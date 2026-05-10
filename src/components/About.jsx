import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function StatCard({ num, label, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(201,168,76,0.08)' }}
      className="relative bg-surface/40 border border-border p-6 flex flex-col gap-2 cursor-default group overflow-hidden transition-all duration-300"
    >
      {/* Gold left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        style={{ originY: 0 }}
      />
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />

      <span className="font-display font-black text-5xl leading-none tracking-tight"
        style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        {num}
      </span>
      <span className="text-text-muted text-xs tracking-widest uppercase font-body">{label}</span>
      <div className="w-6 h-px bg-accent/40 group-hover:w-full transition-all duration-500 mt-1" />
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 bg-surface">
      {/* Top skew */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-bg"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono text-xs tracking-widest uppercase mb-16 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-accent" />
          / About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Bio — left */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-4xl lg:text-5xl text-text-primary leading-tight"
            >
              Turning complex problems into{' '}
              <span className="text-gold-gradient">elegant digital solutions.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 text-text-muted font-body text-base leading-relaxed"
            >
              <p>
                I'm a Junior Web & Mobile Developer at Aahaas (Pvt) Ltd, with a BICT (Hons) in Software
                Systems Technology from South Eastern University of Sri Lanka. I specialize in building
                full-stack web and mobile applications that are fast, scalable, and genuinely useful.
              </p>
              <p>
                My stack spans React.js, Laravel, Flutter, Node.js, and cloud platforms like AWS and
                Azure. I've shipped production systems — from ERP platforms for enterprise clients like
                Brandix Group to end-to-end travel web apps with automated workflows. I care deeply about
                clean architecture, intuitive UX, and code that doesn't break at 2am.
              </p>
              <p>
                When I'm not shipping features, I'm deepening my knowledge through certifications —
                currently working through an Advanced Python Bootcamp and always exploring what's next
                in tech.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-6 pt-4"
            >
              <a
                href="mailto:tsewmini.hewage@gmail.com"
                className="text-accent text-sm font-display tracking-widest uppercase underline underline-offset-4 hover:text-accent2 transition-colors duration-300"
              >
                tsewmini.hewage@gmail.com
              </a>
              <span className="text-border">·</span>
              <a
                href="tel:+94713559194"
                className="text-text-muted text-sm font-body hover:text-text-primary transition-colors duration-300"
              >
                +94 71 355 9194
              </a>
            </motion.div>
          </div>

          {/* Stats — right */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <StatCard num="1+" label="Years Experience" delay={0.2} />
            <StatCard num="4" label="Major Projects" delay={0.3} />
            <StatCard num="10+" label="Technologies" delay={0.4} />
            <StatCard num="AWS" label="Certified" delay={0.5} />
          </div>
        </div>

        {/* Decorative horizontal rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 h-px origin-left"
          style={{ background: 'linear-gradient(to right, #C9A84C, transparent)' }}
        />
      </div>

      {/* Bottom skew */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-bg"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      />
    </section>
  );
}
