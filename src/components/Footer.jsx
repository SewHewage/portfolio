import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-accent/60 flex items-center justify-center">
              <span className="font-display font-bold text-accent text-xs">SH</span>
            </div>
            <span className="text-text-muted font-body text-sm">
              Sewmini Hewage &copy; {currentYear}
            </span>
          </div>

          {/* Center — subtle tagline */}
          <motion.span
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-text-muted/40 text-xs font-mono tracking-widest uppercase hidden sm:block"
          >
            Homagama, Sri Lanka
          </motion.span>

          {/* Right */}
          <div className="flex items-center gap-2 text-text-muted text-sm font-body">
            <span>Made with</span>
            <span className="text-accent">React</span>
            <span>&</span>
            <span className="text-accent2">Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
