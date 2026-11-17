import SectionHead from './SectionHead';

export default function Education({ education: ed }) {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHead label="Education" title="Education and certifications" />
        <div className="row g-4">
          <div className="col-lg-4 rv">
            <div className="card app-card h-100"><div className="card-body p-4">
              <h3 className="h5">{ed.degree?.title}</h3>
              <p className="mut mb-0">{ed.degree?.place} · {ed.degree?.year}</p>
            </div></div>
          </div>
          <div className="col-lg-4 rv">
            <div className="card app-card h-100"><div className="card-body p-4">
              <h3 className="h5">Certifications</h3>
              <ul className="mut ps-3 mb-0">
                {ed.certs.map((c) => (
                  <li className="mb-2" key={c.title}><strong className="text-body">{c.title}</strong>, {c.place}{c.text ? `. ${c.text}` : ''}</li>
                ))}
              </ul>
            </div></div>
          </div>
          <div className="col-lg-4 rv">
            <div className="card app-card h-100"><div className="card-body p-4">
              <h3 className="h5">Languages</h3>
              <ul className="mut ps-3 mb-0">
                {ed.languages.map(([l, lv]) => <li className="mb-2" key={l}><strong className="text-body">{l}</strong>, {lv}</li>)}
              </ul>
            </div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
