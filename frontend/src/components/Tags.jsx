export default function Tags({ items }) {
  return (
    <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0 mt-3">
      {items.map((t) => <li key={t}><span className="badge rounded-pill tag">{t}</span></li>)}
    </ul>
  );
}
