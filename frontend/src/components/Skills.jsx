import SectionHead from './SectionHead';
import Tags from './Tags';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <SectionHead label="Skills" title="Technical skills" />
        <div className="row g-4">
          {skills.map((s) => (
            <div className="col-md-6 col-lg-4 rv" key={s.group}>
              <div className="card app-card h-100">
                <div className="card-body p-4">
                  <h3 className="h5">{s.group}</h3>
                  <Tags items={s.items} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
