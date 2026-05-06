const services = ['UI/UX Design', 'Frontend Development', 'Framer / React websites']

function Services() {
  return (
    <section className="services section-shell section-padding" aria-labelledby="services-title">
      <div className="section-heading section-heading--split" data-reveal>
        <div>
          <p className="eyebrow">Services</p>
          <h2 id="services-title">Lean capabilities for polished digital launches.</h2>
        </div>
        <p>
          From the first visual direction to the final responsive build, every detail is
          considered through the lens of usability, speed and emotional impact.
        </p>
      </div>

      <div className="services__list">
        {services.map((service, index) => (
          <div className="service-row" data-reveal key={service} style={{ '--delay': `${index * 80}ms` }}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{service}</h3>
            <p>Art-directed, responsive, and crafted to feel effortless.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
