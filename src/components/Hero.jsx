import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail } from 'lucide-react';


/* ─── Letter-by-letter animated text reveal ─── */
function AnimatedText({ text, className, delay = 0, stagger = 0.04, gold = false }) {
  return (
    <span className={className} aria-label={text} style={gold ? { display: 'inline-block' } : {}}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: char === ' ' ? 'inline' : 'inline-block',
            ...(gold && char !== ' ' ? {
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 45%, #C9A84C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            } : {}),
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}


/* ─── Hero image — full photo, static, no crop ─── */
function HeroImageContainer() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {/* Subtle gold glow behind photo */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.10) 0%, transparent 70%)',
        filter: 'blur(30px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Full portrait — no crop, pushed up to align with stats */}
      <img
        src="/Gemini_Generated_Image_dqglw5dqglw5dqgl.png"
        alt="Sewmini Hewage — Junior Web & Mobile Developer"
        style={{
          display: 'block',
          width: '100%',
          maxWidth: '480px',
          height: 'auto',
          objectFit: 'contain',
          objectPosition: 'top center',
          position: 'relative',
          zIndex: 1,
          marginTop: '-80px',
          filter: 'contrast(1.05) brightness(1.06) saturate(1.08)',
        }}
      />
    </div>

  );
}


/* ─── Magnetic CTA button ─── */
function MagneticButton({ href, children, primary }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };
  const onLeave = () => {
    ref.current.style.transform = 'translate(0,0)';
    ref.current.style.transition = 'transform 0.45s cubic-bezier(0.16,1,0.3,1)';
  };
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex items-center px-6 py-3 text-sm font-display font-medium tracking-widest uppercase transition-colors duration-300 ${
        primary
          ? 'bg-accent text-bg border border-accent hover:bg-transparent hover:text-accent'
          : 'border border-border text-text-muted hover:border-accent hover:text-accent'
      }`}
    >
      {children}
    </a>
  );
}

/* ─── Hero section ─── */
export default function Hero() {
  return (
    <>


      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: 'var(--bg)',
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      >
        {/* Background ambient glows */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,229,255,0.03) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />


        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[82vh]">

            {/* ── LEFT: Text content ── */}
            <div className="flex flex-col justify-center order-2 lg:order-1">

              {/* Available badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 mb-8 w-fit"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full" style={{ boxShadow: '0 0 8px #4ade80', animation: 'pulse 2.5s ease-in-out infinite' }} />
                <span className="text-text-muted text-xs font-body tracking-widest uppercase border border-border/50 px-3 py-1">
                  Available for work
                </span>
              </motion.div>

              {/* Main heading */}
              <div className="mb-6">
                <h1 className="font-display font-bold leading-none tracking-tight">
                  <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-[clamp(4rem,7vw,6rem)] mb-1 overflow-hidden">
                    <AnimatedText text="I'm Sewmini." className="text-text-primary" delay={0.4} stagger={0.04} />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-[clamp(2rem,4.5vw,3.5rem)] overflow-hidden">
                    <AnimatedText text="I build things" className="text-text-primary" delay={0.85} stagger={0.03} />
                    <br />
                    <AnimatedText
                      text="for the web."
                      delay={1.15}
                      stagger={0.04}
                      gold={true}
                      className=""
                    />
                  </div>
                </h1>
                {/* "for the web." gets gold gradient separately so AnimatedText works */}
              </div>

              {/* Role + location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10"
              >
                <span className="text-text-muted font-body text-base tracking-wide">
                  Junior Web & Mobile Developer
                </span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
                <span className="flex items-center gap-1.5 text-text-muted text-sm font-body">
                  <MapPin size={12} className="text-accent" />
                  Homagama, Sri Lanka
                </span>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex flex-wrap items-center gap-4 mb-16"
              >
                <MagneticButton href="#projects" primary>View My Work</MagneticButton>
                <MagneticButton href="mailto:tsewmini.hewage@gmail.com">
                  <Mail size={13} className="mr-2" />
                  Get In Touch
                </MagneticButton>
              </motion.div>

              {/* Stats strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.1 }}
                className="flex items-center gap-8 pt-8 border-t border-border/30"
              >
                {[
                  { num: '2+', label: 'Years Exp.' },
                  { num: '4',  label: 'Major Projects' },
                  { num: '10+',label: 'Technologies' },
                  { num: 'AWS',label: 'Certified' },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="font-display font-bold text-2xl text-accent">{s.num}</span>
                    <span className="text-text-muted text-xs tracking-wider uppercase">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT: Circular image container ── */}
            <motion.div
              className="hero-circle-wrap flex items-center justify-center order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroImageContainer />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-text-muted text-xs tracking-widest uppercase font-body">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={15} className="text-accent" />
          </motion.div>
        </motion.div>

        {/* Large ghost number */}
        <div
          aria-hidden="true"
          className="absolute right-4 top-1/2 -translate-y-1/2 font-display font-bold leading-none select-none pointer-events-none hidden xl:block"
          style={{ fontSize: '200px', color: 'rgba(201,168,76,0.025)' }}
        >
          01
        </div>
      </section>
    </>
  );
}
