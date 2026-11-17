import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import App from './App';
import './styles/motion.css'; // last, so reduced-motion rules win

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
