import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <p className="section-label">Servicios</p>
        <div className="service-list">
          {skills.map((skill, index) => (
            <div className="service" key={index}>
              <strong>{skill.number}</strong>
              <span>{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
