import { technologies } from '@/data/technologies';
import { siteConfig } from '@/data/site';
import TechLogo from './TechLogo';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function TechMarquee() {
  const reducedMotion = useReducedMotion();
  const items = [...technologies, ...technologies];

  return (
    <section className="py-10 border-y border-white/5 bg-background-secondary/50 overflow-hidden">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-sm text-text-secondary">
          <span className="text-accent font-medium">{siteConfig.experienceYears} Years</span> Building
          for the Web
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none" />
        <div
          className={`flex items-center gap-14 md:gap-16 ${reducedMotion ? 'flex-wrap justify-center px-4' : 'animate-marquee w-max'}`}
          aria-hidden={!reducedMotion}
        >
          {items.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex-shrink-0 opacity-100 hover:opacity-100 transition-opacity duration-300"
            >
              <TechLogo tech={tech} />
            </div>
          ))}
        </div>
        <div className="sr-only">{technologies.map((t) => t.name).join(', ')}</div>
      </div>
    </section>
  );
}
