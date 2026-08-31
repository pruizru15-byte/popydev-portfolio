# Guía completa: despliegue automático desde GitHub a cPanel

> Método utilizado cuando cPanel no tiene **Git Version Control**, pero sí permite FTP/FTPS.

## 1. Arquitectura

```text
PC / VS Code
    ↓
Git
    ↓
GitHub
    ↓
GitHub Actions
    ↓
FTPS
    ↓
cPanel
    ↓
public_html
    ↓
Sitio en producción
```

Ejemplo PopyDev:

```text
Repositorio: https://github.com/pruizru15-byte/popydev-portfolio
Servidor FTP: ftp.popydev.com
Usuario FTP: deploy@popydev.com
Puerto FTPS explícito: 21
Directorio web: /storage/popydev/public_html
```

> Nunca guardes la contraseña FTP dentro del repositorio.

---

## 2. Requisitos

- Dominio configurado en cPanel.
- Acceso a `File Manager`.
- Cuenta FTP dedicada al despliegue.
- Repositorio GitHub.
- Git instalado en tu PC.
- GitHub Actions habilitado.
- Proyecto listo para producción.

---

## 3. Preparar cPanel

### 3.1 Identificar el Document Root

En cPanel:

```text
Files → File Manager
```

Para el dominio principal normalmente será:

```text
public_html
```

En PopyDev:

```text
/storage/popydev/public_html
```

Por ejemplo:

```text
/storage/popydev/public_html/index.html
```

se sirve como:

```text
https://popydev.com
```

### 3.2 Crear cuenta FTP de deployment

En cPanel:

```text
Files → FTP Accounts
```

Configuración recomendada:

```text
Usuario: deploy
Dominio: popydev.com
Directorio: public_html
Cuota: Unlimited
```

Resultado esperado:

```text
FTP Username: deploy@popydev.com
FTP Server: ftp.popydev.com
FTP / Explicit FTPS Port: 21
```

### Seguridad

No utilices la cuenta principal de cPanel para automatizar despliegues.

La cuenta FTP debe estar limitada únicamente al directorio necesario, por ejemplo:

```text
/storage/popydev/public_html
```

---

## 4. Preparar Git

Dentro del proyecto:

```bash
git init
git add .
git commit -m "Primera version"
git branch -M main
```

Conectar GitHub:

```bash
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

Ejemplo:

```bash
git remote add origin https://github.com/pruizru15-byte/popydev-portfolio.git
git push -u origin main
```

Después bastará con:

```bash
git push
```

---

## 5. Crear los Secrets en GitHub

Ruta:

```text
Repository
→ Settings
→ Secrets and variables
→ Actions
→ Repository secrets
```

Crear:

```text
FTP_SERVER
FTP_USERNAME
FTP_PASSWORD
FTP_PORT
```

Ejemplo:

```text
FTP_SERVER = ftp.popydev.com
FTP_USERNAME = deploy@popydev.com
FTP_PASSWORD = TU_CONTRASEÑA_REAL
FTP_PORT = 21
```

Nunca escribas esto directamente en el YAML:

```yaml
password: MiClaveReal123
```

Usa siempre:

```yaml
${{ secrets.FTP_PASSWORD }}
```

---

## 6. Crear GitHub Actions

GitHub solo detecta workflows dentro de:

```text
.github/workflows/
```

Estructura correcta:

```text
proyecto/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── assets/
├── index.html
└── README.md
```

Incorrecto:

```text
.githubworkflowsdeploy.yml
```

Correcto:

```text
.github/workflows/deploy.yml
```

---

## 7. Workflow para HTML, CSS y JavaScript

Crear:

```text
.github/workflows/deploy.yml
```

Contenido:

```yaml
name: Deploy PopyDev

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Descargar codigo
        uses: actions/checkout@v4

      - name: Instalar LFTP
        run: sudo apt-get update && sudo apt-get install -y lftp

      - name: Publicar en cPanel
        run: |
          lftp -c "
          set ftp:ssl-force true;
          set ftp:ssl-protect-data true;
          open -p ${{ secrets.FTP_PORT }} \
          -u '${{ secrets.FTP_USERNAME }}','${{ secrets.FTP_PASSWORD }}' \
          ${{ secrets.FTP_SERVER }};
          mirror -R ./ / \
          --exclude .git/ \
          --exclude .github/ \
          --exclude README.md \
          --exclude .gitignore;
          "
```

Cada `push` a `main` ejecutará el despliegue.

---

## 8. Certificado FTPS autofirmado

Si aparece:

```text
Certificate verification:
The certificate is NOT trusted.
The certificate issuer is unknown.
```

significa que el servidor FTPS usa un certificado que el runner de GitHub no confía.

### Solución temporal

Agregar:

```yaml
set ssl:verify-certificate no;
```

Quedaría:

```yaml
      - name: Publicar en cPanel
        run: |
          lftp -c "
          set ftp:ssl-force true;
          set ftp:ssl-protect-data true;
          set ssl:verify-certificate no;
          open -p ${{ secrets.FTP_PORT }} \
          -u '${{ secrets.FTP_USERNAME }}','${{ secrets.FTP_PASSWORD }}' \
          ${{ secrets.FTP_SERVER }};
          mirror -R ./ / \
          --exclude .git/ \
          --exclude .github/ \
          --exclude README.md \
          --exclude .gitignore;
          "
```

> ⚠️ Esta línea desactiva la verificación del certificado. Es útil como solución temporal, pero lo correcto es instalar un certificado confiable o usar SFTP si el proveedor lo permite.

Cuando el certificado sea válido, elimina:

```text
set ssl:verify-certificate no;
```

---

## 9. Primer deployment

Ejecutar:

```bash
git add .
git commit -m "Configurar deployment automatico"
git push
```

Luego revisar:

```text
GitHub → Repository → Actions
```

Estados habituales:

```text
Queued
In progress
Success
Failed
```

Si termina en:

```text
Success
```

el deployment se ejecutó correctamente.

---

## 10. Flujo de trabajo diario

Después de configurar todo:

```bash
git status
git add .
git commit -m "Actualizar proyecto"
git push
```

GitHub hará:

```text
git push
   ↓
GitHub
   ↓
GitHub Actions
   ↓
FTPS
   ↓
public_html
   ↓
Producción
```

---

## 11. Prueba rápida

Cambia algo visible, por ejemplo:

```html
<h1>PopyDev</h1>
```

por:

```html
<h1>PopyDev V1.1</h1>
```

Luego:

```bash
git add .
git commit -m "Test deployment automatico"
git push
```

Cuando Actions muestre `Success`, actualiza con:

```text
Ctrl + F5
```

---

## 12. Rollback

Ver historial:

```bash
git log --oneline
```

Ejemplo:

```text
9fa321b Cambio con error
80bc190 Version estable
```

Revertir de forma segura:

```bash
git revert 9fa321b
git push
```

GitHub Actions publicará automáticamente el revert.

---

## 13. Estrategia de ramas

Para proyectos comerciales:

```text
feature/*
   ↓
develop
   ↓
pruebas
   ↓
main
   ↓
producción
```

Crear rama:

```bash
git checkout -b feature/nuevo-dashboard
```

El workflow debe desplegar únicamente `main`:

```yaml
on:
  push:
    branches:
      - main
```

---

## 14. React / Vite

Para React/Vite no debes desplegar todo el código fuente.

Flujo:

```text
React
  ↓
npm ci
  ↓
npm run build
  ↓
dist/
  ↓
cPanel
```

Ejemplo:

```yaml
name: Deploy React to cPanel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Descargar codigo
        uses: actions/checkout@v4

      - name: Configurar Node
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Instalar dependencias
        run: npm ci

      - name: Compilar
        run: npm run build

      - name: Instalar LFTP
        run: sudo apt-get update && sudo apt-get install -y lftp

      - name: Publicar dist
        run: |
          lftp -c "
          set ftp:ssl-force true;
          set ftp:ssl-protect-data true;
          open -p ${{ secrets.FTP_PORT }} \
          -u '${{ secrets.FTP_USERNAME }}','${{ secrets.FTP_PASSWORD }}' \
          ${{ secrets.FTP_SERVER }};
          mirror -R ./dist/ / --delete;
          "
```

Si el FTPS sigue teniendo certificado autofirmado, temporalmente se puede añadir:

```text
set ssl:verify-certificate no;
```

---

## 15. Múltiples proyectos

Organización sugerida:

```text
popydev.com
    ↓
popydev-portfolio

demo.popydev.com/ventas
    ↓
sistema-ventas

demo.popydev.com/inventario
    ↓
sistema-inventario
```

Para mayor aislamiento, usa una cuenta FTP por proyecto:

```text
deploy-portfolio@popydev.com
deploy-ventas@popydev.com
deploy-inventario@popydev.com
```

Cada cuenta debe apuntar únicamente a su carpeta.

---

## 16. `.gitignore` recomendado

```gitignore
.DS_Store
Thumbs.db
.vscode/
.idea/
*.log
.env
node_modules/
```

Nunca subas:

```text
.env
contraseñas
tokens
llaves privadas
backups con datos sensibles
credenciales FTP
```

---

## 17. Problemas frecuentes

### Actions no aparece

Verifica:

```text
.github/workflows/deploy.yml
```

Y:

```text
Settings → Actions → General
```

GitHub Actions debe estar habilitado.

### `Queued`

Normalmente GitHub está esperando un runner disponible.

### `Certificate is NOT trusted`

El certificado FTPS no es confiable/autofirmado.

Solución definitiva:

- instalar certificado válido
- pedir al hosting certificado válido para FTP
- utilizar SFTP si está disponible

Solución temporal:

```text
set ssl:verify-certificate no;
```

### Error `530 Authentication failed`

Revisar los Secrets:

```text
FTP_USERNAME
FTP_PASSWORD
FTP_SERVER
FTP_PORT
```

### Workflow en Success pero la web no cambia

Comprobar:

1. Document Root correcto.
2. Cuenta FTP apuntando a `public_html`.
3. `index.html` existente.
4. Caché del navegador.
5. Caché/CDN del hosting.

Forzar actualización:

```text
Ctrl + F5
```

### Web muestra “No es seguro”

No es un problema de Git.

Revisar:

```text
cPanel → Security → SSL/TLS Status
```

Un certificado `Self-signed` genera advertencias en los navegadores. Lo ideal es AutoSSL/Let's Encrypt o un certificado confiable proporcionado por el hosting.

### Advertencia Node.js en Actions

Si el job termina en `Success`, una advertencia de deprecación de Node no implica por sí sola que el deployment haya fallado.

---

## 18. `mirror -R` y `--delete`

`mirror -R` sincroniza desde el runner hacia el servidor:

```text
GitHub Actions
      ↓
Servidor FTP
```

`--delete` elimina del servidor archivos que ya no existen en el origen.

Ejemplo:

```text
mirror -R ./dist/ / --delete;
```

> ⚠️ Usa `--delete` solo cuando estés completamente seguro de que la cuenta FTP apunta al directorio correcto.

---

## 19. Seguridad mínima recomendada

- Cuenta FTP exclusiva para deployment.
- Acceso limitado al directorio del proyecto.
- Contraseña fuerte y única.
- Credenciales únicamente en GitHub Secrets.
- No exponer secretos en logs.
- No versionar `.env`.
- Preferir FTPS o SFTP sobre FTP plano.
- Corregir certificados autofirmados.
- Activar 2FA en GitHub.
- Mantener repositorios comerciales privados.
- Realizar backups antes de cambios importantes.

---

## 20. Backups

Git protege el código, no toda la producción.

Debes respaldar:

```text
Código
Base de datos
Archivos subidos por usuarios
Configuraciones
```

Arquitectura:

```text
Código → GitHub
Producción → cPanel
Base de datos → backup periódico
Archivos importantes → backup externo
```

---

## 21. Sistemas con base de datos

El pipeline debe desplegar código, pero no sobrescribir automáticamente los datos de producción.

Separación recomendada:

```text
CÓDIGO
GitHub
   ↓
Deployment

DATOS
MariaDB
   ↓
Backups / migraciones controladas
```

---

## 22. Organización PopyDev sugerida

```text
popydev.com
└── Portafolio

demo.popydev.com
├── ventas
├── inventario
└── reservas

app.popydev.com
└── Sistema comercial principal
```

Cada aplicación importante debería tener:

```text
Repositorio propio
Secrets propios
Deployment propio
Directorio propio
```

---

## 23. Pipeline profesional final

```text
DESARROLLO
VS Code
   │
   ↓
feature/*
   │
   ↓
develop
   │
   ↓
Pruebas
   │
   ↓
main
   │
   ↓
GitHub Actions
   │
   ↓
FTPS / SFTP
   │
   ↓
cPanel
   │
   ↓
PRODUCCIÓN
```

---

## 24. Comandos útiles

Ver cambios:

```bash
git status
```

Agregar cambios:

```bash
git add .
```

Commit:

```bash
git commit -m "Descripcion del cambio"
```

Subir:

```bash
git push
```

Historial:

```bash
git log --oneline
```

Crear rama:

```bash
git checkout -b feature/nombre
```

Volver a main:

```bash
git checkout main
```

Actualizar local:

```bash
git pull
```

---

## 25. Checklist para desplegar un nuevo proyecto

- [ ] Crear Document Root/carpeta en cPanel.
- [ ] Crear cuenta FTP exclusiva.
- [ ] Limitar FTP al directorio del proyecto.
- [ ] Crear repositorio GitHub.
- [ ] Subir código.
- [ ] Crear `FTP_SERVER`.
- [ ] Crear `FTP_USERNAME`.
- [ ] Crear `FTP_PASSWORD`.
- [ ] Crear `FTP_PORT`.
- [ ] Crear `.github/workflows/deploy.yml`.
- [ ] Configurar deployment únicamente desde `main`.
- [ ] Ejecutar primer `git push`.
- [ ] Revisar GitHub Actions.
- [ ] Comprobar producción.
- [ ] Configurar SSL/TLS válido.
- [ ] Configurar backups.

---

## 26. Referencias oficiales

GitHub Docs — Workflow syntax for GitHub Actions  
https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions

GitHub Docs — Using secrets in GitHub Actions  
https://docs.github.com/actions/security-guides/using-secrets-in-github-actions

GitHub Docs — Understanding GitHub Actions  
https://docs.github.com/actions/about-github-actions/understanding-github-actions

cPanel Documentation — FTP Accounts  
https://docs.cpanel.net/cpanel/files/ftp-accounts/

cPanel Documentation — SSL/TLS Status  
https://docs.cpanel.net/cpanel/security/ssl-tls-status/

cPanel Documentation — SFTP Client  
https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/

---

## Resumen rápido

Una vez configurado el pipeline, el trabajo normal queda reducido a:

```bash
git add .
git commit -m "Nuevo cambio"
git push
```

Y automáticamente:

```text
GitHub
  ↓
GitHub Actions
  ↓
FTPS
  ↓
cPanel
  ↓
Producción actualizada
```
