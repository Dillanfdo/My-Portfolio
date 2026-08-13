import { siteConfig } from '@/data/site';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const focusAreas = ['React', 'Next.js', 'TypeScript', 'Frontend Architecture', 'Product Development'];

export default function About() {
  return (
    <section id="about" className="section-padding bg-background-secondary/30">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal>
            <SectionHeading
              title={
                <>
                  I&apos;m a frontend developer who enjoys{' '}
                  <span className="text-gradient">turning ideas into interfaces.</span>
                </>
              }
            />
            <div className="space-y-4 text-text-secondary leading-relaxed -mt-4">
              <p>
                I&apos;m Dillan, a {siteConfig.currentRole} focused on frontend development.
                I&apos;ve spent {siteConfig.experienceYears} years building web applications and
                digital experiences using modern technologies such as React, Next.js and TypeScript.
              </p>
              <p>
                Over the years I&apos;ve worked on consumer products, SaaS platforms, dashboards,
                healthcare applications and AI-powered products.
              </p>
              <p>
                Today, I&apos;m offering that experience to businesses that need modern websites
                and web applications — from business websites and landing pages to custom
                applications and redesigns.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Employment</h3>
              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute left-0 top-2 w-2.5 h-2.5 -translate-x-[5px] rounded-full bg-accent border-2 border-background-secondary" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <p className="font-medium text-text-primary">
                    Senior Software Engineer — Frontend
                  </p>
                  <span className="text-sm text-text-secondary">2021 — Present</span>
                </div>
                <p className="text-accent-light text-sm font-medium mb-3">{siteConfig.currentCompany}</p>
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
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative lg:sticky lg:top-28">
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-card border border-white/10 shadow-card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-purple-900/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 to-purple-500/20 border border-white/10 flex items-center justify-center">
                      <span className="text-5xl font-bold text-gradient">DF</span>
                    </div>
                    <div className="absolute -top-4 -right-8 px-3 py-1.5 rounded-lg bg-card border border-white/10 text-xs text-text-secondary shadow-lg">
                      React
                    </div>
                    <div className="absolute -bottom-2 -left-10 px-3 py-1.5 rounded-lg bg-card border border-white/10 text-xs text-text-secondary shadow-lg">
                      Next.js
                    </div>
                    <div className="absolute top-1/2 -right-12 px-3 py-1.5 rounded-lg bg-card border border-white/10 text-xs text-text-secondary shadow-lg">
                      TypeScript
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
              </div>
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
