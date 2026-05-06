function Footer() {
  return (
    <footer className="footer section-shell" id="contact">
      <div className="footer__cta" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something together</h2>
        <a className="footer__email" href="mailto:hello@example.com">
          hello@example.com
        </a>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Fabio Nigro. Portfolio concept.</p>
        <div className="footer__socials" aria-label="Social links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
