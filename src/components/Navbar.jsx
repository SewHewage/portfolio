import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navLinks = [
    { label: 'About',   href: '#about'    },
    { label: 'Work',    href: '#projects' },
    { label: 'Skills',  href: '#skills'   },
    { label: 'Contact', href: '#contact'  },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0,    opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-xl border-b border-border/50 shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">

          {/* ── Logo — text only ── */}
          <motion.a
            href="#"
            whileHover={{ opacity: 0.8 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-baseline gap-1.5 select-none"
          >
            <span className="font-display font-bold text-lg tracking-tight text-text-primary">Sewmini</span>
            <span className="font-display font-bold text-lg tracking-tight text-accent">Hewage</span>
          </motion.a>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                className="relative text-text-muted hover:text-text-primary text-sm font-body tracking-wider uppercase transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-3">

            {/* Contact Me — pill button */}
            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(201,168,76,0.35)' }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 border border-accent text-accent text-sm font-display font-medium tracking-widest uppercase hover:bg-accent hover:text-bg transition-all duration-300"
              style={{ borderRadius: '75px' }}
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Contact Me
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}  className="w-6 h-px bg-text-primary block" />
              <motion.span animate={{ opacity: menuOpen ? 0 : 1 }}                        className="w-6 h-px bg-text-primary block" />
              <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="w-6 h-px bg-text-primary block" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{   height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-surface/95 backdrop-blur-xl md:hidden border-t border-border/30"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-text-muted hover:text-accent text-lg font-display tracking-widest uppercase transition-colors duration-300 py-1 border-b border-border/30"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => { setMenuOpen(false); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-center px-5 py-3 border border-accent text-accent font-display text-sm tracking-widest uppercase"
                style={{ borderRadius: '75px' }}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
