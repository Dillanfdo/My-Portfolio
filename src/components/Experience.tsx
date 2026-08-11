import { siteConfig } from '@/data/site';
import ScrollReveal from './ScrollReveal';

const focusAreas = ['React', 'Next.js', 'TypeScript', 'Frontend Architecture', 'Product Development'];

export default function Experience() {
  return (
    <section className="section-padding">
      <div className="container-max mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">Experience</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="relative pl-8 border-l border-white/10">
            <div className="absolute left-0 top-2 w-3 h-3 -translate-x-[7px] rounded-full bg-accent border-2 border-background" />
            <div className="pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-lg font-semibold text-text-primary">
                  Senior Software Engineer — Frontend
                </h3>
                <span className="text-sm text-text-secondary">2021 — Present</span>
              </div>
              <p className="text-accent-light font-medium mb-3">{siteConfig.currentCompany}</p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-text-secondary border border-white/5"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-white/5">
              <p className="text-text-secondary text-sm">
                <span className="text-accent font-medium">{siteConfig.experienceYears} Years</span>{' '}
                of frontend development experience across products, platforms and business
                applications.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
