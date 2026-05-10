import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChatbot from './components/FloatingChatbot';
import './index.css';

function CustomCursor() {
  const dot  = useRef(null);
  const ring = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      if (dot.current)  { dot.current.style.left  = `${e.clientX}px`; dot.current.style.top  = `${e.clientY}px`; }
      if (ring.current) { ring.current.style.left = `${e.clientX}px`; ring.current.style.top = `${e.clientY}px`; }
    };
    const on  = () => setHovered(true);
    const off = () => setHovered(false);

    window.addEventListener('mousemove', move);
    const els = document.querySelectorAll('a, button, [data-cursor]');
    els.forEach((el) => { el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off); });

    return () => {
      window.removeEventListener('mousemove', move);
      els.forEach((el) => { el.removeEventListener('mouseenter', on); el.removeEventListener('mouseleave', off); });
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot  no-transition" />
      <div ref={ring} className={`cursor-ring no-transition ${hovered ? 'hovered' : ''}`} />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg font-body">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
        <FloatingChatbot />
      </div>
    </ThemeProvider>
  );
}
