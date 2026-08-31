import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section section-alt" id="proyectos">
      <div className="container">
        <p className="section-label">Proyectos</p>
        <div className="section-heading">
          <h2>Trabajo seleccionado</h2>
          <p>Esta V1 queda preparada para que agreguemos tus proyectos reales progresivamente.</p>
        </div>

        <div className="cards">
          {projects.map((project, index) => (
            <article className="card" key={index}>
              <span className="card-number">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
