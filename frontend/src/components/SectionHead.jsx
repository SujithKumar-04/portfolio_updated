export default function SectionHead({ label, title }) {
  return (
    <div className="mb-5 rv">
      <span className="eyebrow">{label}</span>
      <h2 className="mb-0">{title}</h2>
    </div>
  );
}
