import { useEffect, useState } from 'react';
import { profile, stats } from '../data';

const roles = ['Web Developer', 'Flutter Developer', 'UI Engineer', 'Problem Solver'];

function useTypewriter(words, speed = 90, pause = 1600) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setI((n) => n + 1);
    } else {
      t = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">
            <span className="dot" /> Available for opportunities
          </p>
          <h1>
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="typed">
            {typed}
            <span className="caret">|</span>
          </h2>
          <p className="hero-sub">
            I build responsive, performant interfaces and integrate dynamic content with REST APIs —
            across the web and mobile. Based in Indore, India.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href={profile.resume} className="btn btn-ghost" download={profile.resumeFileName}>
              Download Resume ↓
            </a>
          </div>
          <ul className="hero-stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="photo-stage">
            <div className="photo-glow" aria-hidden="true" />
            <span className="photo-ripple" aria-hidden="true" />
            <span className="photo-ripple" aria-hidden="true" />
            <span className="photo-ripple" aria-hidden="true" />
            <div className="photo-orbit orbit-1" aria-hidden="true"><i /></div>
            <div className="photo-orbit orbit-2" aria-hidden="true"><i /><i /></div>
            <div className="avatar-ring">
              <div className="avatar">
                <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="640" height="640" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
