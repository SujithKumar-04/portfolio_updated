import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import usePortfolio from './hooks/usePortfolio';
import useReveal from './hooks/useReveal';

export default function App() {
  const data = usePortfolio();
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const mode = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', mode);
    document.documentElement.setAttribute('data-bs-theme', mode); // Bootstrap 5.3 dark mode
  }, [dark]);

  useReveal(data);

  return (
    <>
      <Navbar dark={dark} onToggle={() => setDark(!dark)} name={data.profile.name} />
      <Hero profile={data.profile} />
      <main>
        <About data={data} />
        <Skills skills={data.skills} />
        <Experience items={data.experience} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
      </main>
      <Contact profile={data.profile} />
    </>
  );
}
