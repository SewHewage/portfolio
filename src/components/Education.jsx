import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    year: '2024',
    status: 'Completed',
    color: '#C9A84C',
    icon: '☁',
  },
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'CISCO',
    year: '2020',
    status: 'Completed',
    color: '#00E5FF',
    icon: '⬡',
  },
  {
    name: 'CCNA: Switching, Routing & Wireless',
    issuer: 'CISCO',
    year: '2020',
    status: 'Completed',
    color: '#00E5FF',
    icon: '⬡',
  },
  {
    name: 'JavaScript Essentials I & II',
    issuer: 'CISCO',
    year: '2023',
    status: 'Completed',
    color: '#C9A84C',
    icon: '{ }',
  },
  {
    name: 'Introduction to Data Science',
    issuer: 'CISCO',
    year: '2023',
    status: 'Completed',
    color: '#00E5FF',
    icon: '▲',
  },
  {
    name: 'Advanced Python Bootcamp',
    issuer: 'Udemy',
    year: '2026',
    status: 'In Progress',
    color: '#C9A84C',
    icon: '⬢',
  },
];

function CertCard({ cert, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, borderColor: cert.color + '60' }}
      className="flex items-start gap-4 p-5 border border-border bg-surface/50 group transition-all duration-300 cursor-default"
    >
      <div
        className="w-10 h-10 flex items-center justify-center flex-shrink-0 border text-xs font-mono font-bold transition-all duration-300"
        style={{
          borderColor: cert.color + '40',
          color: cert.color,
          background: cert.color + '08',
        }}
      >
        {cert.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h4 className="font-display font-semibold text-sm text-text-primary leading-snug group-hover:text-accent transition-colors">
            {cert.name}
          </h4>
          <span
            className="text-xs font-mono px-2 py-0.5 flex-shrink-0"
            style={{
              color: cert.status === 'In Progress' ? '#00E5FF' : '#888',
              borderColor: cert.status === 'In Progress' ? '#00E5FF40' : 'var(--border)',
              border: '1px solid',
              background: cert.status === 'In Progress' ? 'rgba(0,229,255,0.05)' : 'transparent',
            }}
          >
            {cert.status}
          </span>
        </div>
        <p className="text-text-muted text-xs font-body mt-1">
          {cert.issuer} · {cert.year}
        </p>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-32 bg-surface relative">
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
          className="text-accent font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-accent" />
          / Credentials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-4xl lg:text-5xl text-text-primary mb-16"
        >
          Education & Certs.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education — Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap size={18} className="text-accent" />
              <h3 className="font-display font-semibold text-text-primary text-sm tracking-widest uppercase">
                Academic Background
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative p-8 border border-border bg-bg/50 group hover:border-accent/40 transition-all duration-300"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-px bg-accent" />
              <div className="absolute top-0 left-0 w-px h-8 bg-accent" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-accent/30" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-accent/30" />

              <div className="mb-6">
                <p className="text-text-muted text-xs font-mono tracking-widest uppercase mb-2">
                  2020 – 2024
                </p>
                <h4 className="font-display font-bold text-xl text-text-primary mb-1">
                  BICT (Hons) Software Systems Technology
                </h4>
                <p className="text-accent text-sm font-body font-medium">
                  South Eastern University of Sri Lanka
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="flex flex-col">
                  <span className="font-display font-bold text-3xl text-accent">3.2</span>
                  <span className="text-text-muted text-xs tracking-widest uppercase">GPA</span>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-lg text-text-primary">Second Class</span>
                  <span className="text-text-muted text-xs tracking-widest uppercase">Honours</span>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent/60 rounded-full" />
                  <span className="text-text-muted text-xs font-body">English</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent/60 rounded-full" />
                  <span className="text-text-muted text-xs font-body">Sinhala</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications — Right */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <Award size={18} className="text-accent" />
              <h3 className="font-display font-semibold text-text-primary text-sm tracking-widest uppercase">
                Certifications
              </h3>
            </motion.div>

            <div className="flex flex-col gap-3">
              {certifications.map((cert, i) => (
                <CertCard key={cert.name} cert={cert} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom skew */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-bg"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      />
    </section>
  );
}
