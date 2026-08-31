export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Ingeniería · Desarrollo · Automatización</p>
          <h1>Construyo soluciones digitales que resuelven problemas reales.</h1>
          <p className="hero-copy">
            Desarrollo sistemas, aplicaciones web y automatizaciones con una visión orientada
            a producto, rendimiento y crecimiento.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#proyectos">Ver proyectos</a>
            <a className="btn btn-secondary" href="#contacto">Contactar</a>
          </div>

          <div className="status">
            <span className="status-dot"></span>
            Disponible para proyectos y oportunidades
          </div>
        </div>

        <aside className="terminal-card" aria-label="Resumen técnico">
          <div className="terminal-top">
            <span></span><span></span><span></span>
          </div>
          <pre><code>{`$ whoami
popydev

$ focus
software-engineering

$ stack
web · automation · data

$ deploy
git → cPanel → production

$ status
ready ✓`}</code></pre>
        </aside>
      </div>
    </section>
  )
}
