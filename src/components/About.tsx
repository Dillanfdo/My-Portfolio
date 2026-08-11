import { siteConfig } from '@/data/site';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="section-padding bg-background-secondary/30">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                Today, I&apos;m also helping businesses turn their ideas into modern websites and
                web experiences.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-card border border-white/10 shadow-card overflow-hidden">
                {/* Abstract developer visual */}
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
