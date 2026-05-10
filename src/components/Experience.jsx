import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    company: 'Aahaas (Pvt) Ltd',
    role: 'Junior Web & Mobile Developer',
    period: 'Nov 2025 – Present',
    location: 'Sri Lanka',
    type: 'Full-Time',
    points: [
      'Developing and maintaining the Aahaas Lifestyle Travel Web App using React.js and Laravel, integrating n8n for intelligent workflow automation.',
      'Collaborating across cross-functional teams to ship new features under production deadlines, contributing to both frontend architecture and API design.',
    ],
    color: '#C9A84C',
    current: true,
  },
  {
    company: 'Sky Smart Technology',
    role: 'Full Stack Developer Intern',
    period: 'Apr 2025 – Nov 2025',
    location: 'Sri Lanka',
    type: 'Internship',
    points: [
      'Built the Sky Smart Technology corporate web application end-to-end — full React.js frontend integrated with a Laravel/PHP backend and cloud deployment on AWS.',
      'Delivered the ERP system for ABA / Brandix Group of Companies, automating core business processes and backend data pipelines using Laravel.',
    ],
    color: '#00E5FF',
    current: false,
  },
];

function TimelineEntry({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          className="w-3 h-3 rounded-full border-2 relative z-10"
          style={{
            borderColor: exp.color,
            background: exp.current ? exp.color : 'transparent',
            boxShadow: exp.current ? `0 0 12px ${exp.color}60` : 'none',
          }}
        />
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
            className="w-px flex-1 mt-2 origin-top"
            style={{
              minHeight: '120px',
              background: 'linear-gradient(to bottom, var(--border), transparent)',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {exp.current && (
                <span
                  className="text-xs font-mono px-2 py-0.5 tracking-widest uppercase"
                  style={{
                    background: `${exp.color}15`,
                    border: `1px solid ${exp.color}40`,
                    color: exp.color,
                  }}
                >
                  Current
                </span>
              )}
              <span className="text-text-muted text-xs font-body tracking-widest uppercase border border-border/40 px-2 py-0.5">
                {exp.type}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-text-primary">{exp.role}</h3>
            <p className="font-display font-semibold text-sm mt-0.5" style={{ color: exp.color }}>
              {exp.company}
            </p>
          </div>
          <div className="text-right">
            <p className="text-text-muted text-sm font-body">{exp.period}</p>
            <p className="text-text-muted/50 text-xs font-body">{exp.location}</p>
          </div>
        </div>

        {/* Bullet points */}
        <ul className="space-y-3">
          {exp.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-text-muted text-sm font-body leading-relaxed">
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 bg-bg relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-accent" />
          / Timeline
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-4xl lg:text-5xl text-text-primary mb-16"
        >
          Where I've worked.
        </motion.h2>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <TimelineEntry key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
