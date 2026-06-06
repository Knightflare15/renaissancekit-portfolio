import { siteConfig } from "./siteConfig";
import logo from "../assets/renaissance-kit-logo.png";

function App() {
  const { brandName, domain, domainUrl, instagramHandle, instagramUrl, status, hero, intro, approach, contactText, contactLinks, projects } =
    siteConfig;

  return (
    <div className="app-shell">
      <div className="ambient ambient--left" />
      <div className="ambient ambient--right" />

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand__line" />
          <span className="brand__name">{brandName}</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__copy">
            <p className="eyebrow">{status}</p>
            <h1>{hero.title}</h1>
            <p className="hero__summary">{hero.summary}</p>

            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                {hero.primaryLabel}
              </a>
              <a className="button button--ghost" href={instagramUrl} target="_blank" rel="noreferrer">
                {hero.secondaryLabel}
              </a>
            </div>

            <div className="hero__meta">
              <div className="hero__meta-card">
                <span className="hero__meta-label">Domain</span>
                <a href={domainUrl} target="_blank" rel="noreferrer">
                  {domain}
                </a>
              </div>
              <div className="hero__meta-card">
                <span className="hero__meta-label">Instagram</span>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  @{instagramHandle}
                </a>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__card hero__card--back" />
            <div className="hero__card hero__card--front">
              <div className="hero__sigil">
                <img src={logo} alt="Renaissance Kit logo" />
              </div>
              <p>{intro}</p>
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Brand statement">
          <div className="marquee__track">
            <span>React</span>
            <span>FastAPI</span>
            <span>RAG</span>
            <span>Realtime multiplayer</span>
            <span>Unity</span>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section__heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects worth opening, not just listing.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-card--${project.accent}`} key={project.key}>
                <div className="project-card__top">
                  <span className="project-card__index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="project-card__category">{project.category}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <div className="project-card__tags">
                  {project.stats.map((stat) => (
                    <span className="project-tag" key={stat}>
                      {stat}
                    </span>
                  ))}
                </div>

                <a className="project-card__link" href={project.href} target="_blank" rel="noreferrer">
                  <span>{project.cta}</span>
                  <span className="project-card__arrow">-&gt;</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section atelier" id="about">
          <div className="section__heading">
            <p className="eyebrow">About</p>
            <h2>Built around the logo. Kept simple on purpose.</h2>
          </div>

          <div className="atelier__grid">
            <article className="panel panel--statement">
              <p>
                The original static page felt too generic. This version stays visual, but the copy is more direct
                and the structure is easier to maintain. The goal is to make the work easy to inspect and the
                links easy to update.
              </p>
            </article>

            <article className="panel panel--details">
              <ul className="detail-list">
                {approach.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section__heading">
            <p className="eyebrow">Contact</p>
            <h2>Domain, socials, and project links.</h2>
          </div>

          <div className="contact__panel">
            <p>{contactText}</p>
            <div className="contact__actions">
              {contactLinks.map((link) => (
                <a
                  className={`button ${link.style === "primary" ? "button--primary" : "button--ghost"}`}
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>{brandName}</span>
        <span className="site-footer__divider" />
        <span>{domain}</span>
      </footer>
    </div>
  );
}

export default App;
