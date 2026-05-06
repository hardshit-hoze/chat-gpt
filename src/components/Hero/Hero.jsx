import { useRevealOnScroll } from '../../hooks/useRevealOnScroll.js'

function Hero() {
  useRevealOnScroll()

  return (
    <header className="hero section-shell" id="top">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Fabio Nigro home">
          FN
        </a>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero__grid">
        <div className="hero__content" data-reveal>
          <p className="eyebrow">Independent digital studio</p>
          <h1>Fabio Nigro</h1>
          <p className="hero__subtitle">Designer & Developer crafting digital experiences</p>
          <div className="hero__actions" aria-label="Hero calls to action">
            <a className="button button--dark" href="#work">
              View Work
            </a>
            <a className="button button--light" href="mailto:hello@example.com">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero__panel" data-reveal aria-label="Portfolio availability snapshot">
          <span className="hero__panel-label">Available for selective projects</span>
          <div className="hero__orb" aria-hidden="true" />
          <p>
            Strategy-led interfaces, refined visual systems, and production-ready React
            websites for founders and creative teams.
          </p>
        </aside>
      </div>
    </header>
  )
}

export default Hero
