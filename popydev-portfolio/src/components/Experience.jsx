import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <p className="section-label">Experiencia</p>
        <div className="section-heading">
          <h2>Trayectoria Profesional</h2>
        </div>
        <div className="experience-list" style={{ marginTop: '35px' }}>
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index} style={{ marginBottom: '30px', borderBottom: '1px solid var(--line)', paddingBottom: '30px' }}>
              <h3 style={{ color: 'var(--text)', marginBottom: '8px' }}>{exp.role}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent)', marginBottom: '12px', fontSize: '0.9rem' }}>
                <strong>{exp.company}</strong>
                <span>{exp.period}</span>
              </div>
              <p style={{ color: 'var(--muted)' }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
