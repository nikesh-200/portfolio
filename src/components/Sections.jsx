import { profile, experience, projects, skills, education } from '../data';
import Reveal from './Reveal';

function SectionHeader({ index, title, subtitle }) {
  return (
    <Reveal className="section-header">
      <span className="section-index">{index}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}

export function About() {
  const facts = [
    { label: 'Location', value: profile.location },
    { label: 'Experience', value: '~2 years' },
    { label: 'Current Role', value: 'Flutter Developer @ Techinfini' },
    { label: 'Education', value: 'B.Tech CSE, 2024' },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader index="01" title="About Me" />
        <div className="about-grid">
          <Reveal className="about-text">
            <p>{profile.summary}</p>
            <p>
              I enjoy turning complex, multi-role workflows into interfaces that feel simple —
              whether that's an admin dashboard, an e-commerce checkout, or a field-agent app.
            </p>
          </Reveal>
          <Reveal className="about-facts" delay={120}>
            {facts.map((f) => (
              <div key={f.label} className="fact">
                <span>{f.label}</span>
                <strong>{f.value}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section alt">
      <div className="container">
        <SectionHeader index="02" title="Work Experience" subtitle="Where I've been building." />
        <div className="timeline">
          {experience.map((job) => (
            <Reveal key={job.company} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card exp-card">
                <div className="exp-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="pill">{job.period}</span>
                    <span className="muted">{job.location}</span>
                  </div>
                </div>
                <ul className="exp-points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader index="03" title="Key Projects" subtitle="A selection of things I've built." />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} className="card project-card" delay={i * 90}>
              <div className="project-icon">{p.icon}</div>
              <h3>{p.name}</h3>
              <p className="project-type">{p.type}</p>
              <p className="project-desc">{p.description}</p>
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <SectionHeader index="04" title="Technical Skills" subtitle="Tools I use to get things done." />
        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} className="card skill-card" delay={i * 90}>
              <h3>{group.category}</h3>
              <ul className="chips">
                {group.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader index="05" title="Education" />
        {education.map((e) => (
          <Reveal key={e.degree} className="card edu-card">
            <div className="edu-icon">🎓</div>
            <div className="edu-body">
              <h3>{e.degree}</h3>
              <p className="muted">{e.school}</p>
            </div>
            <span className="pill">{e.period}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    { icon: '✉', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: '☎', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/-/g, '')}` },
    { icon: 'in', label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
    { icon: '📍', label: 'Location', value: profile.location },
  ];
  return (
    <section id="contact" className="section alt">
      <div className="container">
        <SectionHeader
          index="06"
          title="Let's Work Together"
          subtitle="I'm open to new roles and freelance projects. My inbox is always open."
        />
        <div className="contact-grid">
          {items.map((c, i) => {
            const inner = (
              <>
                <span className="contact-icon">{c.icon}</span>
                <span className="contact-label">{c.label}</span>
                <span className="contact-value">{c.value}</span>
              </>
            );
            return (
              <Reveal key={c.label} delay={i * 80}>
                {c.href ? (
                  <a
                    className="card contact-card"
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="card contact-card">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
        <Reveal className="contact-cta">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">Say Hello 👋</a>
          <a href={profile.resume} className="btn btn-ghost" download={profile.resumeFileName}>Download Resume ↓</a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
