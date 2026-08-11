import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Button from './Button';
import { siteConfig } from '@/data/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const codeLines = [
  { text: 'const website = {', indent: 0 },
  { text: 'fast: true,', indent: 1, highlight: 'fast' },
  { text: 'responsive: true,', indent: 1, highlight: 'responsive' },
  { text: 'beautiful: true,', indent: 1, highlight: 'beautiful' },
  { text: 'scalable: true', indent: 1, highlight: 'scalable' },
  { text: '};', indent: 0 },
];

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {!reducedMotion && (
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </div>

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs sm:text-sm font-medium tracking-widest text-text-secondary uppercase mb-6"
            >
              Frontend Developer · React · Next.js
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              I build modern websites{' '}
              <span className="text-gradient">that make businesses stand out.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-text-secondary leading-relaxed max-w-xl mb-8"
            >
              I&apos;m a frontend developer with {siteConfig.experienceYears} years of experience
              creating fast, responsive and polished digital experiences for businesses and products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button href="#contact">Start a Project</Button>
              <Button href="#work" variant="secondary" showArrow={false}>
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 text-sm text-text-secondary"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {siteConfig.availability}
            </motion.div>
          </div>

          {/* Code card visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={reducedMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-2xl bg-card border border-white/10 shadow-card overflow-hidden"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-background-secondary/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-white/5 rounded-md flex items-center px-3">
                    <span className="text-[10px] text-text-secondary">localhost:3000</span>
                  </div>
                </div>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex"
                    style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                  >
                    <span className="text-text-secondary/40 mr-4 select-none w-4 text-right">
                      {i + 1}
                    </span>
                    <span className="text-accent-light/90">
                      {line.highlight ? (
                        <>
                          <span className="text-purple-400">{line.highlight}</span>
                          <span className="text-text-secondary">
                            : true{line.highlight === 'scalable' ? '' : ','}
                          </span>
                        </>
                      ) : (
                        line.text
                      )}
                    </span>
                  </motion.div>
                ))}
                {!reducedMotion && (
                  <motion.span
                    className="inline-block w-2 h-4 bg-accent ml-14 mt-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-50 pointer-events-none" />
            </motion.div>

            {/* Floating UI cards */}
            {!reducedMotion && (
              <>
                <motion.div
                  className="absolute -top-4 -right-4 px-3 py-2 rounded-lg bg-card border border-white/10 shadow-lg text-xs text-text-secondary hidden sm:block"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-emerald-400">✓</span> Responsive
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 px-3 py-2 rounded-lg bg-card border border-white/10 shadow-lg text-xs text-text-secondary hidden sm:block"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-accent">⚡</span> Performance
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
