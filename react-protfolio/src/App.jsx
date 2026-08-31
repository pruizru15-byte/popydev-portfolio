import React from 'react';
import './App.css';

// SVG Icons
const Icons = {
  Logo: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 10-20 10 20" /><path d="m6 14 12 0" /></svg>,
  Download: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
  ArrowRight: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>,
  Message: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  Github: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
  Linkedin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
  Mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
  User: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  Check: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
  Send: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>,
  Phone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  MapPin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  GraduationCap: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
  Briefcase: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  Code: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  Twitter: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>,
  Frontend: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
  Backend: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  ChevronLeft: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>,
  ChevronRight: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
};

function Navbar() {
  return (
    <nav className="navbar container">
      <div className="logo-container">
        <div className="logo-icon"><Icons.Logo /></div>
        <div className="logo-text">
          <h2>Piero Dev</h2>
          <p>INGENIERO DE SISTEMAS</p>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#home" className="active">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#demos">Demos</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <a href="/CV_Piero_Alexandro_Ruiz_Ruiz_Actualizado%20(1).pdf" target="_blank" rel="noreferrer" className="nav-btn">
        Descargar CV <Icons.Download />
      </a>
    </nav>
  );
}

function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    {
      title: "Ingeniero de Sistemas",
      subtitle: "Desarrollador de Soluciones\nTecnológicas",
      desc: "Transformo ideas en soluciones digitales escalables, eficientes y centradas en las personas. Experiencia en aseguramiento de calidad (QA) y desarrollo.",
      img: "/imagen1.png"
    },
    {
      title: "Backend & Frontend",
      subtitle: "Construyendo Arquitecturas\nRobustas",
      desc: "Especialista en desarrollo con React, Node.js y Python. Diseño sistemas integrales que optimizan el rendimiento y la escalabilidad del negocio.",
      img: "/imgen2.png"
    },
    {
      title: "QA Automation",
      subtitle: "Asegurando la Calidad\ndel Software",
      desc: "Implementación de pruebas automatizadas, historias de usuario y control de calidad exhaustivo para garantizar productos estables y eficientes.",
      img: "/imagen3.jpeg"
    },
    {
      title: "Especialista TI",
      subtitle: "Innovación y Soporte\nContinuo",
      desc: "Experiencia en gestión de incidencias, flujos automatizados en Salesforce y soporte de infraestructura para mantener la operatividad del negocio.",
      img: "/imagen4.png"
    },
    {
      title: "Desarrollador Apasionado",
      subtitle: "Construyendo el\nFuturo Digital",
      desc: "Siempre explorando nuevas tecnologías y metodologías para aportar valor real a cada línea de código.",
      img: "/avatar.jpg"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 120000); // 2 minutos
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="dark-header">
      <Navbar />
      <section id="home" className="hero-content container">
        <div className="hero-text">
          <div className="availability-badge">
            <span className="dot"></span> DISPONIBLE PARA NUEVOS PROYECTOS
          </div>
          
          <div className="hero-carousel-text" style={{ display: 'grid' }}>
            {slides.map((slide, i) => (
              <div 
                key={i}
                style={{
                  gridArea: '1 / 1 / 2 / 2',
                  opacity: i === currentSlide ? 1 : 0,
                  visibility: i === currentSlide ? 'visible' : 'hidden',
                  transition: 'opacity 1.2s ease-in-out, visibility 1.2s ease-in-out',
                  pointerEvents: i === currentSlide ? 'auto' : 'none',
                }}
              >
                <h1>{slide.title} |<br />
                  <span>
                    {slide.subtitle.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>{line}{idx === 0 && <br/>}</React.Fragment>
                    ))}
                  </span>
                </h1>
                <p>{slide.desc}</p>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Ver mis proyectos <Icons.ArrowRight /></a>
            <a href="#contact" className="btn-secondary">Hablemos <Icons.Message /></a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/pruizru15-byte" target="_blank" rel="noreferrer"><Icons.Github /></a>
            <a href="https://linkedin.com/in/piero-ruiz-ruiz-a487b52b7" target="_blank" rel="noreferrer"><Icons.Linkedin /></a>
            <a href="mailto:pieroalexandro@gmail.com"><Icons.Mail /></a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="floating-widget widget-1">
            <pre>
              <code>
                <span className="keyword">const</span> <span className="property">engineer</span> = {'{\n'}
                {'  '}role: <span className="string">'Desarrollador'</span>,
                {'\n  '}skills: [<span className="string">'Python'</span>, <span className="string">'JS'</span>, <span className="string">'React'</span>],
                {'\n  '}focus: <span className="string">'Soluciones que impactan'</span>,
                {'\n  '}passion: <span className="string">'Tecnología'</span>
                {'\n}'};
              </code>
            </pre>
          </div>
          <div className="floating-widget widget-2">
            <h4>System Performance</h4>
            <div className="stat-row"><span>CPU</span><span>23%</span></div>
            <div className="stat-bar"><div className="stat-fill" style={{ width: '23%' }}></div></div>
            <br />
            <div className="stat-row"><span>RAM</span><span>45%</span></div>
            <div className="stat-bar"><div className="stat-fill" style={{ width: '45%' }}></div></div>
          </div>
          
          <div className="hero-avatar-carousel" style={{ position: 'relative', width: '100%', height: '100%' }}>
            {slides.map((slide, i) => (
              <img 
                key={i}
                src={slide.img} 
                alt="Piero Dev" 
                className="hero-avatar"
                style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: i === currentSlide ? 1 : 0,
                  transition: 'opacity 1.2s ease-in-out'
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-padding container">
      <div className="section-title">Sobre Mí</div>
      <div className="about-grid">
        <div className="about-left">
          <div><Icons.User /></div>
          <h3>Apasionado por la tecnología y la resolución de problemas</h3>
        </div>
        <div className="about-right">
          <p>Soy Ingeniero de Sistemas de la Universidad César Vallejo con experiencia en aseguramiento de calidad (QA), desarrollo de software web y soporte TI. Me enfoco en construir soluciones robustas, escalables y de alto impacto, aplicando buenas prácticas y tecnologías modernas.</p>
          <ul className="about-features">
            <li><Icons.Check /> Pensamiento analítico</li>
            <li><Icons.Check /> Aprendizaje continuo</li>
            <li><Icons.Check /> Trabajo en equipo</li>
            <li><Icons.Check /> Orientado a resultados</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg' },
    { name: 'Git / GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Flask / Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'HTML / CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Salesforce', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
  ];

  return (
    <section id="skills" className="section-padding container">
      <div className="section-title">Mis Habilidades</div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ImageViewer({ src, onClose }) {
  const [zoomStyle, setZoomStyle] = React.useState({});
  
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(1.8)'
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: 'center center',
      transform: 'scale(1)'
    });
  };

  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <button className="viewer-close" onClick={onClose}>&times;</button>
      <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
        <img 
          src={src} 
          alt="Vista ampliada" 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={zoomStyle}
          className="zoomable-image"
        />
        <div className="magnify-hint">
          <Icons.Code /> Pasa el mouse para usar la lupa
        </div>
      </div>
    </div>
  );
}

function Logros() {
  const [selectedImg, setSelectedImg] = React.useState(null);

  const logros = [
    {
      title: 'Título de Ingeniero de Sistemas',
      desc: 'Certificación oficial que acredita mi formación profesional y competencias en ingeniería de sistemas.',
      duration: 'Duración: 5 años',
      images: ['/Logros/titulodeingenierodesistemas.jpg', '/Logros/adversodeltitulo.jpg']
    },
    {
      title: 'Grado Académico de Bachiller',
      desc: 'Grado obtenido tras completar el plan de estudios universitario con excelencia académica.',
      duration: 'Duración: 5 años',
      images: ['/Logros/BACHILLER_page-0001.jpg', '/Logros/BACHILLER_page-0002.jpg']
    }
  ];

  return (
    <section id="logros" className="section-padding container">
      <div className="section-title">Logros y Certificaciones</div>
      <div className="logros-grid">
        {logros.map((logro, i) => (
          <div key={i} className="logro-card">
            <div className="logro-images">
              {logro.images.map((img, j) => (
                <div key={j} className="logro-img-wrapper" onClick={() => setSelectedImg(img)}>
                  <img src={img} alt={`${logro.title} - Página ${j + 1}`} loading="lazy" />
                  <div className="zoom-icon-overlay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="logro-info">
              <h3>{logro.title}</h3>
              <p>{logro.desc}</p>
              <div className="logro-badge">
                <Icons.GraduationCap /> {logro.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImg && <ImageViewer src={selectedImg} onClose={() => setSelectedImg(null)} />}
    </section>
  );
}


function Projects() {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      current.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
    }
  };

  const projects = [
    { title: 'popydev-portfolio', link: 'https://github.com/pruizru15-byte/popydev-portfolio', desc: 'Portafolio profesional personal desarrollado para presentar experiencia, habilidades técnicas, proyectos y perfil como Ingeniero de Sistemas.' },
    { title: 'SistemaInteligente-', link: 'https://github.com/pruizru15-byte/SistemaInteligente-', desc: 'Aplicación web inteligente que integra Python y algoritmos como K-Means para procesar datos y clasificar patrones de consumo.' },
    { title: 'juego-unity', link: 'https://github.com/pruizru15-byte/juego-unity', desc: 'Proyecto de videojuego orientado al aprendizaje de lógica interactiva, mecánicas de juego y construcción de escenarios digitales.' },
    { title: 'roventix', link: 'https://github.com/pruizru15-byte/roventix', desc: 'Sistema web orientado al comercio electrónico, con gestión de productos, categorías, servicios backend y despliegue en producción.' },
    { title: 'demuna', link: 'https://github.com/pruizru15-byte/demuna', desc: 'Sistema de gestión enfocado en organizar registros, usuarios y procesos administrativos dentro de una solución web centralizada.' },
    { title: 'eve-tienda', link: 'https://github.com/pruizru15-byte/eve-tienda', desc: 'Tienda virtual desarrollada con tecnologías web modernas para gestionar productos, catálogo y experiencia de compra digital.' },
    { title: 'loreIa', link: 'https://github.com/pruizru15-byte/loreIa', desc: 'Proyecto web experimental que integra conceptos de inteligencia artificial con funcionalidades desarrolladas en JavaScript.' },
    { title: 'wedding-invite-hub', link: 'https://github.com/pruizru15-byte/wedding-invite-hub', desc: 'Plataforma web para administrar invitaciones digitales, información de eventos y experiencia personalizada para invitados.' },
    { title: 'juego-conejos', link: 'https://github.com/pruizru15-byte/juego-conejos', desc: 'Videojuego web desarrollado con TypeScript que aplica lógica de programación, eventos, interacción y control de estados.' },
    { title: 'backend-versos', link: 'https://github.com/pruizru15-byte/backend-versos', desc: 'Backend desarrollado para gestionar contenido literario, almacenar información y proporcionar servicios a aplicaciones frontend.' },
    { title: 'verse-vault', link: 'https://github.com/pruizru15-byte/verse-vault', desc: 'Aplicación para almacenar, organizar y consultar versos o contenido escrito mediante una interfaz web estructurada.' },
    { title: 'the-warm-embrace', link: 'https://github.com/pruizru15-byte/the-warm-embrace', desc: 'Experiencia web creativa desarrollada con TypeScript, enfocada en diseño visual, interacción y componentes dinámicos.' },
    { title: 'qaAutomatizador_backend', link: 'https://github.com/pruizru15-byte/qaAutomatizador_backend', desc: 'Backend de una solución orientada a automatización QA, responsable de soportar la lógica y procesamiento de pruebas automatizadas.' },
    { title: 'qaAutomatizador', link: 'https://github.com/pruizru15-byte/qaAutomatizador', desc: 'Proyecto de automatización de pruebas enfocado en validar funcionalidades, ejecutar escenarios y aplicar conceptos de QA Automation.' },
    { title: 'SWGP-PIG', link: 'https://github.com/pruizru15-byte/SWGP-PIG', desc: 'Sistema web desarrollado en JavaScript para gestionar información y procesos mediante una estructura modular y escalable.' },
    { title: 'paper-path-race', link: 'https://github.com/pruizru15-byte/paper-path-race', desc: 'Proyecto interactivo desarrollado con TypeScript basado en recorridos, lógica de estados y mecánicas dinámicas.' },
    { title: 'tech-haven-store', link: 'https://github.com/pruizru15-byte/tech-haven-store', desc: 'E-commerce tecnológico desarrollado con TypeScript para gestionar productos, catálogo y experiencia de usuario.' },
    { title: 'portfolio', link: 'https://github.com/pruizru15-byte/portfolio', desc: 'Primera versión de un portafolio web personal para mostrar habilidades, perfil profesional y proyectos desarrollados.' },
    { title: 'store-qalab', link: 'https://github.com/pruizru15-byte/store-qalab', desc: 'Entorno de práctica orientado a QA, diseñado para ejecutar pruebas y experimentar con funcionalidades de una tienda digital.' },
    { title: 'gym', link: 'https://github.com/pruizru15-byte/gym', desc: 'Aplicación web orientada al sector fitness para gestionar usuarios, entrenamientos y procesos relacionados con gimnasios.' },
    { title: 'miraculous-planner', link: 'https://github.com/pruizru15-byte/miraculous-planner', desc: 'Herramienta de planificación desarrollada con TypeScript para organizar actividades, tareas e información desde una interfaz web.' },
    { title: 'automatizaci-n-nttdata', link: 'https://github.com/pruizru15-byte/automatizaci-n-nttdata', desc: 'Repositorio de prácticas de automatización y testing desarrollado durante formación técnica orientada a QA Automation.' },
    { title: 'practica-git-piero', link: 'https://github.com/pruizru15-byte/practica-git-piero', desc: 'Repositorio práctico para aprender Git mediante commits, ramas, fusiones y control de versiones.' },
    { title: 'git-practica-piero', link: 'https://github.com/pruizru15-byte/git-practica-piero', desc: 'Proyecto de aprendizaje enfocado en versionamiento de código y uso de GitHub dentro de flujos de desarrollo.' },
    { title: 'yutu-descarga-vidio-pa', link: 'https://github.com/pruizru15-byte/yutu-descarga-vidio-pa', desc: 'Herramienta desarrollada en Python para automatizar la descarga y procesamiento de contenido multimedia.' },
    { title: 'audio-flow-player', link: 'https://github.com/pruizru15-byte/audio-flow-player', desc: 'Reproductor web de audio desarrollado con TypeScript, con controles multimedia y gestión de reproducción.' },
    { title: 'creative-canvas-local', link: 'https://github.com/pruizru15-byte/creative-canvas-local', desc: 'Aplicación web creativa para experimentar con elementos visuales, componentes interactivos y edición dentro del navegador.' },
    { title: 'bot', link: 'https://github.com/pruizru15-byte/bot', desc: 'Proyecto de automatización mediante bots para procesar información, ejecutar acciones y responder a diferentes eventos.' },
    { title: 'bovine-registry-pro', link: 'https://github.com/pruizru15-byte/bovine-registry-pro', desc: 'Sistema digital para gestionar registros ganaderos y centralizar información relacionada con animales y procesos productivos.' },
    { title: 'gestionUsers', link: 'https://github.com/pruizru15-byte/gestionUsers', desc: 'Sistema de administración de usuarios que implementa operaciones CRUD para registrar, consultar, modificar y eliminar información.' },
    { title: 'poemas-con-coraz-n', link: 'https://github.com/pruizru15-byte/poemas-con-coraz-n', desc: 'Plataforma web creativa para publicar, almacenar y visualizar poemas dentro de una experiencia digital.' },
    { title: 'get-fit-miguel', link: 'https://github.com/pruizru15-byte/get-fit-miguel', desc: 'Sistema fitness orientado a gestionar usuarios, rutinas y servicios asociados al entrenamiento físico.' },
    { title: 'chanchos', link: 'https://github.com/pruizru15-byte/chanchos', desc: 'Proyecto orientado a gestionar y organizar información dentro de un contexto agropecuario o productivo.' },
    { title: 'proyectos-personales', link: 'https://github.com/pruizru15-byte/proyectos-personales', desc: 'Colección de proyectos desarrollados para practicar Python, automatización, consumo de APIs y resolución de problemas reales.' },
    { title: 'asistencia-qr', link: 'https://github.com/pruizru15-byte/asistencia-qr', desc: 'Sistema web para registrar asistencia mediante códigos QR, agilizando la identificación y control de participantes.' },
    { title: 'get-fit', link: 'https://github.com/pruizru15-byte/get-fit', desc: 'Sistema para gestión de gimnasio desarrollado con Python, enfocado en usuarios, control administrativo y procesos internos.' },
    { title: 'asistencias_qr', link: 'https://github.com/pruizru15-byte/asistencias_qr', desc: 'Solución inicial para digitalizar el control de asistencias mediante lectura y registro de códigos QR.' },
    { title: 'SISTEMA-GYM', link: 'https://github.com/pruizru15-byte/SISTEMA-GYM', desc: 'Sistema de gestión para gimnasios enfocado en administrar usuarios, información operativa y procesos internos.' },
  ];

  return (
    <section id="projects" className="section-padding container" style={{ position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div className="section-title" style={{ marginBottom: 0 }}>Repositorios en GitHub</div>
        <div className="carousel-controls" style={{ display: 'flex', gap: '10px' }}>
          <button className="carousel-btn" onClick={() => scroll('left')}><Icons.ChevronLeft /></button>
          <button className="carousel-btn" onClick={() => scroll('right')}><Icons.ChevronRight /></button>
        </div>
      </div>
      
      <div className="carousel-container" ref={scrollRef}>
        {projects.map((proj, i) => (
          <div key={i} className="carousel-card">
            <div className="carousel-card-icon"><Icons.Github /></div>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">
              Ver Repositorio <Icons.ArrowRight />
            </a>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <a href="https://github.com/pruizru15-byte" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'inline-flex' }}>
          Visitar Perfil Completo de GitHub <Icons.Github />
        </a>
      </div>
    </section>
  );
}

function VideoDemos() {
  const demos = [
    {
      title: 'Cursos de Ingeniería Civil',
      desc: 'Plataforma educativa para ingeniería civil. Sistema de gestión de contenidos y seguimiento.',
      video: '/videos/aplicación-cursosingenieriacivil.mp4',
      tech: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
      ]
    },
    {
      title: 'Gestión de Granja Bovina',
      desc: 'Software de administración agrícola ganadera. Control de ganado, inventario y productividad.',
      video: '/videos/gestionGranjavacas.mp4',
      tech: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' }
      ]
    },
    {
      title: 'Gestión de Gimnasio',
      desc: 'Sistema integral para gimnasios con módulo de pagos y control de membresías.',
      video: '/videos/proyecto-gym-primersistemapagado.mp4',
      tech: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg' }
      ]
    },
    {
      title: 'Registro de Tareas',
      desc: 'Aplicación interactiva de gestión de tareas desarrollada para optimizar productividad.',
      video: '/videos/registro_tareas_primerproyecto_react.mp4',
      tech: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ]
    },
    {
      title: 'Gestión Geotécnica',
      desc: 'Herramienta especializada para el registro y análisis de estudios de suelos.',
      video: '/videos/sistemadegestióngeotécnica.mp4',
      tech: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' }
      ]
    }
  ];

  return (
    <section id="demos" className="section-padding container">
      <div className="section-title">Demos y Prototipos</div>
      <div className="demos-grid">
        {demos.map((demo, index) => (
          <div key={index} className="demo-card">
            <div className="video-container">
              <video src={demo.video} controls muted preload="metadata" />
            </div>
            <div className="demo-info">
              <h3>{demo.title}</h3>
              <p>{demo.desc}</p>
              <div className="demo-architecture">
                <span className="arch-badge"><Icons.Frontend /> Frontend</span>
                <span className="arch-badge"><Icons.Backend /> Backend</span>
              </div>
              <div className="demo-tech-stack">
                {demo.tech.map((t, i) => (
                  <img key={i} src={t.icon} alt={t.name} title={t.name} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="experience" className="section-padding container">
      <div className="section-title">Mi Trayectoria</div>
      <div className="timeline-container">
        <div className="timeline-line"></div>

        <div className="timeline-item">
          <div className="timeline-icon"><Icons.GraduationCap /></div>
          <div className="timeline-date">2026</div>
          <h4 className="timeline-title">Ingeniero de Sistemas</h4>
          <p className="timeline-company">Universidad César Vallejo</p>
          <p className="timeline-desc">Título Profesional. Formación en arquitectura de software, bases de datos y redes.</p>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"><Icons.Code /></div>
          <div className="timeline-date">03/2025 - 08/2025</div>
          <h4 className="timeline-title">Quality Assurance</h4>
          <p className="timeline-company">RESTAURANT.PE S.A.C.</p>
          <p className="timeline-desc">Pruebas funcionales, reportes de bugs, historias de usuario y validación de correcciones.</p>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"><Icons.Briefcase /></div>
          <div className="timeline-date">08/2025 - 12/2025</div>
          <h4 className="timeline-title">Diseño de Procesos</h4>
          <p className="timeline-company">GET FIT S.A.C.</p>
          <p className="timeline-desc">Desarrollo web Full Stack con Python/Flask, gestión de clientes y pruebas funcionales.</p>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"><Icons.Briefcase /></div>
          <div className="timeline-date">01/2026 - 06/2026</div>
          <h4 className="timeline-title">Desarrollador & Soporte</h4>
          <p className="timeline-company">Salesforce</p>
          <p className="timeline-desc">Desarrollo de mejoras, soporte remoto a usuarios y configuración de componentes.</p>
        </div>

      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-padding container">
      <div className="section-title">Contacto</div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>¿Tienes un proyecto en mente?</h3>
          <p>Hablemos y hagámoslo realidad.</p>
          <div className="contact-details">
            <div className="contact-detail"><Icons.Mail /> pieroalexandro@gmail.com</div>
            <div className="contact-detail"><Icons.Phone /> +51 918 389 768</div>
            <div className="contact-detail"><Icons.MapPin /> Piura, Perú</div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" placeholder="Nombre" className="form-input" />
            <input type="email" placeholder="Correo electrónico" className="form-input" />
          </div>
          <input type="text" placeholder="Asunto" className="form-input" />
          <textarea placeholder="Mensaje" className="form-input"></textarea>
          <button type="submit" className="btn-submit">Enviar mensaje <Icons.Send /></button>
        </form>

        <div className="contact-social">
          <h4>Conectemos en redes</h4>
          <div className="social-links-vertical">
            <a href="https://linkedin.com/in/piero-ruiz-ruiz-a487b52b7" target="_blank" rel="noreferrer"><Icons.Linkedin /> linkedin.com/in/piero-ruiz-ruiz-a487b52b7</a>
            <a href="https://github.com/pruizru15-byte" target="_blank" rel="noreferrer"><Icons.Github /> github.com/pruizru15-byte</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <Icons.Logo /> Piero Dev
        </div>
        <p>© 2026 Piero Ruiz. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#home">Política de privacidad</a>
          <a href="#home">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Logros />
      <Projects />
      <VideoDemos />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
