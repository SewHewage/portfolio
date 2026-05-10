import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ── All skills for the marquee rows ── */
const ROW_1 = [
  { name: 'React.js',      cat: 'Frontend' },
  { name: 'Laravel',       cat: 'Backend'  },
  { name: 'Node.js',       cat: 'Backend'  },
  { name: 'Flutter',       cat: 'Mobile'   },
  { name: 'JavaScript',    cat: 'Frontend' },
  { name: 'Tailwind CSS',  cat: 'Frontend' },
  { name: 'PHP',           cat: 'Backend'  },
  { name: 'Python',        cat: 'Backend'  },
  { name: 'TypeScript',    cat: 'Frontend' },
  { name: 'REST APIs',     cat: 'Backend'  },
];

const ROW_2 = [
  { name: 'AWS',            cat: 'Cloud'   },
  { name: 'Microsoft Azure',cat: 'Cloud'   },
  { name: 'Docker',         cat: 'DevOps'  },
  { name: 'MySQL',          cat: 'Database'},
  { name: 'MongoDB',        cat: 'Database'},
  { name: 'n8n Automation', cat: 'Tools'   },
  { name: 'Git & GitHub',   cat: 'DevOps'  },
  { name: 'Postman',        cat: 'Tools'   },
  { name: 'CI/CD',          cat: 'DevOps'  },
  { name: 'Linux',          cat: 'DevOps'  },
];

const ROW_3 = [
  { name: 'Figma',          cat: 'Design'  },
  { name: 'Android Studio', cat: 'Mobile'  },
  { name: 'VS Code',        cat: 'Tools'   },
  { name: 'Java',           cat: 'Backend' },
  { name: 'HTML5 / CSS3',   cat: 'Frontend'},
  { name: 'Dart',           cat: 'Mobile'  },
  { name: 'Firebase',       cat: 'Cloud'   },
  { name: 'Nginx',          cat: 'DevOps'  },
  { name: 'Agile / Scrum',  cat: 'Process' },
  { name: 'PowerBI',        cat: 'Tools'   },
];

const CAT_COLOR = {
  Frontend: '#60A5FA', Backend:  '#34D399', Mobile:   '#A78BFA',
  Cloud:    '#38BDF8', DevOps:   '#F472B6', Database: '#FBBF24',
  Tools:    '#94A3B8', Design:   '#F9A8D4', Process:  '#6EE7B7',
};

function SkillPill({ name, cat }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        padding: '8px 18px',
        border: '1px solid rgba(201,168,76,0.2)',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '100px',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: CAT_COLOR[cat] || '#C9A84C', flexShrink: 0 }} />
      <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 500, color: '#D4D4D4', letterSpacing: '0.02em' }}>
        {name}
      </span>
    </span>
  );
}

function MarqueeRow({ skills, direction = 1, speed = 30 }) {
  const doubled = [...skills, ...skills];
  return (
    <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
      <motion.div
        animate={{ x: direction === 1 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '12px', width: 'max-content' }}
      >
        {doubled.map((s, i) => <SkillPill key={`${s.name}-${i}`} name={s.name} cat={s.cat} />)}
      </motion.div>
    </div>
  );
}

/* ── Certification badges ── */
const CERTS = [
  { name: 'AWS Academy Cloud Foundations',   icon: '☁️',  year: '2024' },
  { name: 'CISCO CCNA — Introduction',        icon: '🔗',  year: '2023' },
  { name: 'CISCO Python Essentials',          icon: '🐍',  year: '2023' },
  { name: 'Udemy Advanced Python Bootcamp',   icon: '🎓',  year: '2024' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 bg-bg relative overflow-hidden">

      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold leading-none select-none pointer-events-none hidden xl:block"
        style={{ fontSize: '200px', color: 'rgba(201,168,76,0.022)', right: '-1rem' }}
      >
        STACK
      </div>

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
          / Arsenal
        </motion.p>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-4xl lg:text-5xl text-text-primary"
          >
            Tools I wield.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted font-body text-sm max-w-xs text-left md:text-right"
          >
            Built across production systems, certifications, and relentless self-study.
          </motion.p>
        </div>

        {/* ── 3 infinite marquee rows ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-4 mb-20"
        >
          <MarqueeRow skills={ROW_1} direction={1}  speed={32} />
          <MarqueeRow skills={ROW_2} direction={-1} speed={40} />
          <MarqueeRow skills={ROW_3} direction={1}  speed={36} />
        </motion.div>

        {/* ── Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-text-muted font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-border" />
            Certifications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                whileHover={{ borderColor: 'rgba(201,168,76,0.5)', y: -3 }}
                className="border border-border bg-surface/40 p-5 flex flex-col gap-3 transition-all duration-300 group"
                style={{ borderRadius: '2px' }}
              >
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: '20px' }}>{c.icon}</span>
                  <span className="font-mono text-xs text-text-muted">{c.year}</span>
                </div>
                <p className="font-body text-sm text-text-muted leading-snug group-hover:text-text-primary transition-colors duration-300">
                  {c.name}
                </p>
                <div className="w-8 h-px bg-accent/40 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
