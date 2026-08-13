import Button from './Button';
import ScrollReveal from './ScrollReveal';
import { siteConfig } from '@/data/site';

export default function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(99,102,241,0.2),transparent)]" />
      </div>

      <div className="container-max mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto p-8 md:p-16 rounded-3xl bg-card border border-white/10 shadow-card">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
              Have an idea?{' '}
              <span className="text-gradient">Let&apos;s turn it into a website.</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Tell me what you&apos;re building and what you need. We&apos;ll figure out the right
              approach together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="#contact">Start a Conversation</Button>
              <Button href="#experience" variant="secondary">See My Experience</Button>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-text-secondary hover:text-accent-light transition-colors text-sm"
            >
              {siteConfig.email}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
