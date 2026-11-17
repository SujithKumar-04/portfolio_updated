import { useState } from 'react';
import '../styles/navbar.css';

const links = [['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'], ['projects', 'Projects'], ['education', 'Education']];

export default function Navbar({ dark, onToggle, name }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg sticky-top app-nav">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#top">{name}</a>
        <button className="navbar-toggler" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={'collapse navbar-collapse' + (open ? ' show' : '')}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {links.map(([id, label]) => (
              <li className="nav-item" key={id}>
                <a className="nav-link" href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 my-2 my-lg-0">
              <button className="btn btn-sm btn-outline-secondary" onClick={onToggle} aria-label="Switch light or dark theme">{dark ? 'Light' : 'Dark'}</button>
            </li>
            <li className="nav-item ms-lg-2 mb-2 mb-lg-0">
              <a className="btn btn-sm btn-primary" href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
