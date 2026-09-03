function About() {
  return (
    <section className="about section-shell section-padding" id="about" aria-labelledby="about-title">
      <div className="about__layout">
        <div className="about__intro" data-reveal>
          <p className="eyebrow">About</p>
          <h2 id="about-title">
            I design and build modern web experiences focused on clarity, performance and
            storytelling.
          </h2>
        </div>

        <div className="about__info" data-reveal>
          <p>
            My work sits between editorial art direction and pragmatic front-end delivery:
            precise layouts, intentional motion, and scalable systems that feel distinctive
            without getting in the way.
          </p>
          <dl>
            <div>
              <dt>Location</dt>
              <dd>Remote / Worldwide</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Brand websites, portfolios, product storytelling</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>React, Vite, Framer, design systems</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
