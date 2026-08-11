import { Code2, Smartphone, Zap, TrendingUp } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: Code2,
    title: 'Built from scratch',
    description:
      'No cookie-cutter templates when your business needs something custom. Every project is tailored to your brand and goals.',
  },
  {
    icon: Smartphone,
    title: 'Responsive by default',
    description:
      'Your website should look excellent on phones, tablets and desktops. Mobile-first design is built into every project.',
  },
  {
    icon: Zap,
    title: 'Performance matters',
    description:
      'Fast-loading websites create better user experiences and help your business make a strong first impression.',
  },
  {
    icon: TrendingUp,
    title: 'Built to grow',
    description:
      'Start with a simple website today and add functionality as your business grows — without starting over.',
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="section-padding">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <SectionHeading
            title={
              <>
                More than just a <span className="text-gradient">website.</span>
              </>
            }
            subtitle="I bring software engineering experience to frontend development — so your website isn't just beautiful, it's built to last."
            align="center"
          />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-6 h-6 text-accent-light" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
