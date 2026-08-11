import { Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  return (
    <section className="section-padding bg-background-secondary/30">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            subtitle="Client feedback will appear here. Replace this placeholder with real testimonials."
            align="center"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="relative p-8 md:p-10 rounded-2xl bg-card border border-dashed border-white/15 text-center">
              <Quote className="w-8 h-8 text-accent/40 mx-auto mb-4" />
              <blockquote className="text-lg text-text-secondary italic mb-4">
                &ldquo;Add your client testimonial here.&rdquo;
              </blockquote>
              <p className="text-sm text-text-secondary/60">
                — Client Name, Company
              </p>
              <span className="absolute top-4 right-4 px-2 py-1 rounded text-[10px] uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Placeholder
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
