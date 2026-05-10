import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ArrowUpRight, Phone } from 'lucide-react';

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      className="py-40 bg-bg relative overflow-hidden"
    >
      {/* Large background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono text-xs tracking-widest uppercase mb-10 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-accent" />
          / Get In Touch
        </motion.p>

        {/* Large headline */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-none text-text-primary"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
          >
            Let's Build
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-none text-gold-gradient"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
          >
            Something.
          </motion.h2>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-muted font-body text-base max-w-lg mb-12 leading-relaxed"
        >
          Open to full-time roles, freelance contracts, and interesting collaborations.
          If you have a project in mind or just want to connect — my inbox is always open.
        </motion.p>

        {/* Email — large clickable */}
        <motion.a
          href="mailto:tsewmini.hewage@gmail.com"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ x: 10 }}
          className="group flex items-center gap-4 mb-16 w-fit"
        >
          <span
            className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary group-hover:text-accent transition-colors duration-300"
          >
            tsewmini.hewage@gmail.com
          </span>
          <motion.div
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
            className="text-text-muted group-hover:text-accent transition-colors duration-300"
          >
            <ArrowUpRight size={28} />
          </motion.div>
        </motion.a>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px mb-16 origin-left"
          style={{ background: 'linear-gradient(to right, var(--border), transparent)' }}
        />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          {/* Phone */}
          <a
            href="tel:+94713559194"
            className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors duration-300 group"
          >
            <Phone size={14} className="text-accent" />
            <span className="font-body text-sm">+94 71 355 9194</span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <SocialLink
              href="https://github.com/"
              icon={<GithubIcon size={18} />}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/"
              icon={<LinkedinIcon size={18} />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:tsewmini.hewage@gmail.com"
              icon={<Mail size={18} />}
              label="Email"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -4, borderColor: '#C9A84C', color: '#C9A84C' }}
      whileTap={{ scale: 0.95 }}
      className="w-11 h-11 border border-border flex items-center justify-center text-text-muted transition-all duration-300"
    >
      {icon}
    </motion.a>
  );
}
