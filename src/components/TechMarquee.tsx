import { technologies, siteConfig } from '@/data/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function TechMarquee() {
  const reducedMotion = useReducedMotion();
  const items = [...technologies, ...technologies];

  return (
    <section className="py-8 border-y border-white/5 bg-background-secondary/50 overflow-hidden">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <p className="text-center text-sm text-text-secondary">
          <span className="text-accent font-medium">{siteConfig.experienceYears} Years</span> Building
          for the Web
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none" />
        <div
          className={`flex gap-12 whitespace-nowrap ${reducedMotion ? '' : 'animate-marquee'}`}
          aria-hidden="true"
        >
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-text-secondary/60 text-sm font-medium tracking-wide flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="sr-only">{technologies.join(', ')}</div>
      </div>
    </section>
  );
}
