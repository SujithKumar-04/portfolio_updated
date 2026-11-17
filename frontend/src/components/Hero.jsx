import HexPhoto from './HexPhoto';
import '../styles/hero.css';

export default function Hero({ profile }) {
  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 order-2 order-lg-1 hero-text">
            <span className="eyebrow">{profile.role} · {profile.location}</span>
            <h1 className="mb-3">{profile.name}</h1>
            <p className="lead mut mb-4">{profile.summary}</p>
            <div className="d-flex flex-wrap gap-2">
              <a className="btn btn-primary px-4" href={`mailto:${profile.email}`}>Get in touch</a>
              <a className="btn btn-outline-primary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="btn btn-outline-primary" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 d-flex justify-content-center">
            <HexPhoto alt={`Portrait of ${profile.name}`} />
          </div>
        </div>
      </div>
    </header>
  );
}
