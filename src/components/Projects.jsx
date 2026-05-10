import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    index: '01',
    name: 'Aahaas Lifestyle Travel Web App',
    description:
      'End-to-end lifestyle & travel platform with automated workflows powered by n8n. Built across a cross-functional team under tight production deadlines.',
    stack: ['React.js', 'Laravel', 'n8n', 'MySQL'],
    type: 'Web Platform',
    highlight: 'Workflow Automation',
    color: '#C9A84C',
  },
  {
    index: '02',
    name: 'School Management System',
    description:
      'Comprehensive student, teacher and admin operations platform with a fine-grained role-based access control system and real-time reporting.',
    stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    type: 'Enterprise App',
    highlight: 'Role-Based Access',
    color: '#00E5FF',
  },
  {
    index: '03',
    name: 'ERP System — Brandix Group',
    description:
      'Business process automation ERP deployed for ABA / Brandix Group of Companies. Streamlined procurement, inventory, and reporting pipelines.',
    stack: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    type: 'Enterprise ERP',
    highlight: 'Process Automation',
    color: '#C9A84C',
  },
  {
    index: '04',
    name: 'Sky Smart Technology Web App',
    description:
      'Full-stack corporate web application integrating a polished React.js frontend with a robust Laravel backend for the company\'s digital presence.',
    stack: ['React.js', 'Laravel', 'MySQL', 'AWS'],
    type: 'Corporate Web App',
    highlight: 'Full Stack',
    color: '#00E5FF',
  },
];

// 3D tilt card
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const isInView = useInView(cardRef, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-surface border border-border p-8 flex flex-col gap-6 cursor-default transition-all duration-300"
      whileHover={{
        borderColor: project.color === '#C9A84C' ? 'rgba(201,168,76,0.6)' : 'rgba(0,229,255,0.4)',
        boxShadow:
          project.color === '#C9A84C'
            ? '0 25px 60px rgba(201,168,76,0.12), 0 0 0 1px rgba(201,168,76,0.2)'
            : '0 25px 60px rgba(0,229,255,0.08), 0 0 0 1px rgba(0,229,255,0.15)',
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: project.color }}
          >
            {project.index}
          </span>
          <span className="text-border text-xs">/</span>
          <span className="text-text-muted text-xs font-body tracking-widest uppercase">
            {project.type}
          </span>
        </div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 45 }}
          className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent text-text-muted transition-all duration-300"
        >
          <ArrowUpRight size={14} />
        </motion.div>
      </div>

      {/* Project name */}
      <h3 className="font-display font-bold text-2xl text-text-primary leading-tight group-hover:text-accent transition-colors duration-300">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-text-muted font-body text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Highlight badge */}
      <div className="flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: project.color }}
        />
        <span className="text-xs font-mono tracking-widest" style={{ color: project.color }}>
          {project.highlight}
        </span>
      </div>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs text-text-muted font-mono px-2 py-0.5 border border-border/60 bg-bg/60"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover gradient overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            project.color === '#C9A84C'
              ? 'radial-gradient(ellipse at top right, rgba(201,168,76,0.05) 0%, transparent 60%)'
              : 'radial-gradient(ellipse at top right, rgba(0,229,255,0.04) 0%, transparent 60%)',
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 bg-surface relative overflow-hidden">
      {/* Top skew */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-bg"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}
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
          / Selected Work
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-4xl lg:text-5xl text-text-primary"
          >
            Things I've built.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted font-body text-sm max-w-xs text-right hidden md:block"
          >
            Production-grade systems, real clients, real impact.
          </motion.p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.index} project={project} index={i} />
          ))}
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
