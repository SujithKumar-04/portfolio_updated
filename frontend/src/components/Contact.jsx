import { useState } from 'react';
import { sendMessage } from '../api';
import '../styles/contact.css';

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendMessage(form);
      setForm({ name: '', email: '', message: '' });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="contact" data-bs-theme="dark">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <h2>Let’s work together</h2>
            <p className="soft">Open to full stack developer roles. Send me a message and I’ll get back to you.</p>
            <ul className="list-unstyled mb-0 contact-list">
              <li><small>Email</small><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><small>Phone</small><a href={`tel:${profile.phone}`}>{profile.phone}</a></li>
              <li><small>LinkedIn</small><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">chepuri-sujithkumar</a></li>
              <li><small>GitHub</small><a href={profile.github} target="_blank" rel="noopener noreferrer">SujithKumar-04</a></li>
            </ul>
          </div>
          <div className="col-lg-7">
            <form className="row g-3" onSubmit={submit}>
              <div className="col-md-6">
                <label htmlFor="cn" className="form-label">Your name</label>
                <input id="cn" className="form-control" required maxLength={120} value={form.name} onChange={set('name')} />
              </div>
              <div className="col-md-6">
                <label htmlFor="ce" className="form-label">Email</label>
                <input id="ce" type="email" className="form-control" required value={form.email} onChange={set('email')} />
              </div>
              <div className="col-12">
                <label htmlFor="cm" className="form-label">Message</label>
                <textarea id="cm" rows="4" className="form-control" required minLength={10} value={form.message} onChange={set('message')} />
              </div>
              <div className="col-12 d-flex align-items-center gap-3 flex-wrap">
                <button className="btn btn-light fw-semibold px-4" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                {status === 'sent' && <span role="status" className="text-success-emphasis">Thanks! Your message was saved.</span>}
                {status === 'error' && (
                  <span role="alert" className="text-warning">
                    The message server isn’t reachable. Please email me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
        <p className="fine">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
