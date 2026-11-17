// Talks to the Django REST API. In development Vite proxies /api to port 8000.
const BASE = import.meta.env.VITE_API_URL || '/api';

export async function fetchPortfolio() {
  const res = await fetch(`${BASE}/portfolio/`);
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

export async function sendMessage(payload) {
  const res = await fetch(`${BASE}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}
