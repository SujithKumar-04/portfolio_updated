import SectionHead from './SectionHead';
import Tags from './Tags';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section alt">
      <div className="container">
        <SectionHead label="Projects" title="Selected projects" />
        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-lg-6 rv" key={p.title}>
              <article className="card app-card h-100">
                <div className="card-body p-4">
                  <h3 className="h5">{p.title}</h3>
                  <p className="mut">{p.subtitle}</p>
                  <ul className="mut ps-3">{p.points.map((t) => <li className="mb-2" key={t}>{t}</li>)}</ul>
                  <Tags items={p.tech} />
                  {(p.github_url || p.live_url) && (
                    <div className="d-flex gap-2 mt-3">
                      {p.github_url && <a className="btn btn-sm btn-outline-primary" href={p.github_url} target="_blank" rel="noopener noreferrer">Code</a>}
                      {p.live_url && <a className="btn btn-sm btn-primary" href={p.live_url} target="_blank" rel="noopener noreferrer">Live demo</a>}
                    </div>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
