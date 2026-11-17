import SectionHead from './SectionHead';
import Tags from './Tags';

export default function Experience({ items }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead label="Experience" title="Professional experience" />
        <div className="timeline">
          {items.map((e) => (
            <article className="card app-card tl-item rv" key={e.company + e.role}>
              <div className="card-body p-4">
                <h3 className="h5">{e.role} <span className="mut">· {e.company}</span></h3>
                <p className="mut">{e.project}</p>
                <ul className="mut ps-3">{e.points.map((p) => <li className="mb-2" key={p}>{p}</li>)}</ul>
                <Tags items={e.tech} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
