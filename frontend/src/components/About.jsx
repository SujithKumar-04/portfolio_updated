import SectionHead from './SectionHead';

export default function About({ data }) {
  const { profile, experience, education } = data;
  const job = experience[0];
  const glance = [
    ['Current role', job ? `${job.role}, ${job.company}` : profile.role],
    ['Location', profile.location],
    ['Education', education.degree ? `${education.degree.title} (${education.degree.year})` : ''],
    ['Languages', education.languages.map((l) => l[0]).join(', ')],
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead label="About" title="Building reliable web applications" />
        <div className="row g-5">
          <div className="col-lg-7 rv">
            <p>{profile.summary}</p>
            <p className="mb-0">{profile.about}</p>
          </div>
          <div className="col-lg-5 rv">
            <div className="card app-card">
              <ul className="list-group list-group-flush">
                {glance.map(([k, v]) => (
                  <li className="list-group-item d-flex justify-content-between gap-3" key={k}>
                    <span className="mut">{k}</span><strong className="text-end">{v}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
