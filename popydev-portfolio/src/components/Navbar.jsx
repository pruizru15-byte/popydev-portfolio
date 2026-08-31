export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav container">
        <a className="brand" href="#inicio">Popy<span>Dev</span></a>

        <button className="menu-toggle" id="menuToggle" aria-label="Abrir menú" aria-expanded="false">
          ☰
        </button>

        <ul className="nav-links" id="navLinks">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
