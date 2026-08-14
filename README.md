# PopyDev Portfolio V1

Primera versión del portafolio preparada para probar despliegue con Git + cPanel.

## Estructura

```text
popydev-portfolio-v1/
├── index.html
├── .cpanel.yml
├── .gitignore
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js
```

## Objetivo de esta V1

Validar este flujo:

```text
PC -> Git -> repositorio administrado por cPanel -> .cpanel.yml -> public_html -> popydev.com
```

## 1. Crear el repositorio local

Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "feat: primera version de PopyDev"
git branch -M main
```

## 2. Crear repositorio vacío en cPanel

En cPanel:

```text
Files -> Git Version Control -> Create
```

Para el modo Push Deployment de cPanel, crea un repositorio VACÍO.
No marques la opción de clonar otro repositorio.

Nombre sugerido:

```text
popydev-portfolio
```

Ruta sugerida:

```text
/storage/popydev/repositories/popydev-portfolio
```

La ruta exacta puede variar según las restricciones configuradas por el proveedor.

## 3. Obtener Clone URL

En:

```text
Git Version Control -> popydev-portfolio -> Manage
```

copia la dirección indicada como `Clone URL`.

## 4. Agregar cPanel como remoto

Ejemplo:

```bash
git remote add production URL_CLONE_DE_CPANEL
git push -u production main
```

Al recibir el push, cPanel ejecutará las tareas de `.cpanel.yml`.

## 5. Próximos cambios

Después de editar el proyecto:

```bash
git add .
git commit -m "feat: actualizo portafolio"
git push production main
```

Con el Push Deployment configurado correctamente, cPanel desplegará la nueva versión.

## GitHub opcional

También puedes conservar GitHub como remoto:

```bash
git remote add origin URL_DE_GITHUB
git push -u origin main
```

Entonces tendrás:

```text
origin      -> GitHub
production  -> cPanel
```

Y al terminar una versión puedes ejecutar:

```bash
git push origin main
git push production main
```

Una segunda versión puede automatizar GitHub -> cPanel con GitHub Actions, para que un único push a GitHub publique producción.

## Importante

El archivo `.cpanel.yml` está configurado actualmente para:

```text
/storage/popydev/public_html/
```

porque `/storage/popydev` es el Home Directory indicado por la cuenta. Antes del primer despliegue confirma en File Manager que `public_html` exista exactamente en esa ubicación.
