import {
  Layers,
  Smartphone,
  Accessibility,
  Gauge,
  Plug,
  Search,
  Code,
  GitBranch,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const capabilities = [
  { icon: Layers, label: 'Component architecture' },
  { icon: Smartphone, label: 'Responsive design' },
  { icon: Accessibility, label: 'Accessibility' },
  { icon: Gauge, label: 'Performance' },
  { icon: Plug, label: 'API integration' },
  { icon: Search, label: 'SEO fundamentals' },
  { icon: Code, label: 'Maintainable code' },
  { icon: GitBranch, label: 'Scalable architecture' },
];

export default function TechnicalDifferentiator() {
  return (
    <section className="section-padding">
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <SectionHeading
              title={
                <>
                  Built with engineering,{' '}
                  <span className="text-gradient">designed with intent.</span>
                </>
              }
              subtitle="My background is software engineering, but my focus is frontend development. That means I care about both how a website looks and how it works underneath."
            />
            <p className="text-text-secondary leading-relaxed -mt-8">
              Every project benefits from clean code, thoughtful architecture, and attention to
              detail — so your website is not just impressive today, but easy to maintain and
              extend tomorrow.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((cap, index) => (
                <div
                  key={cap.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-white/5 hover:border-accent/20 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-4 h-4 text-accent-light" />
                  </div>
                  <span className="text-sm text-text-primary font-medium">{cap.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
