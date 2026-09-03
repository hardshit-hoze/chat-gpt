const projects = [
  {
    title: 'Monolith Studio',
    description: 'A cinematic website for a boutique architecture practice with immersive case studies.',
    year: '2026',
    accent: 'work-card__image--warm',
  },
  {
    title: 'Northline Labs',
    description: 'A crisp product narrative and UI system for an early-stage AI analytics platform.',
    year: '2025',
    accent: 'work-card__image--cool',
  },
  {
    title: 'Aster Objects',
    description: 'Premium commerce experience blending editorial layouts with subtle interaction design.',
    year: '2025',
    accent: 'work-card__image--neutral',
  },
]

function Work() {
  return (
    <section className="work section-shell section-padding" id="work" aria-labelledby="work-title">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Selected Work</p>
        <h2 id="work-title">Projects shaped with clarity, rhythm and restraint.</h2>
      </div>

      <div className="work__grid">
        {projects.map((project, index) => (
          <article className="work-card" data-reveal key={project.title} style={{ '--delay': `${index * 90}ms` }}>
            <div className={`work-card__image ${project.accent}`}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div className="work-card__overlay">
                <span>View case study</span>
              </div>
            </div>
            <div className="work-card__content">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <time dateTime={project.year}>{project.year}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work
