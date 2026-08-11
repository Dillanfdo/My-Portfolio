import { pricingTiers } from '@/data/pricing';
import SectionHeading from './SectionHeading';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

export default function Pricing() {
  return (
    <section className="section-padding">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <SectionHeading
            title={
              <>
                Simple <span className="text-gradient">starting points.</span>
              </>
            }
            subtitle="Every project is unique. These are starting points — final pricing depends on project requirements."
            align="center"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <ScrollReveal key={tier.id} delay={index * 0.1}>
              <div
                className={`relative p-6 md:p-8 rounded-2xl bg-card border shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
                  index === 1
                    ? 'border-accent/30 ring-1 ring-accent/20'
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                {index === 1 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-text-primary mb-2">{tier.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-text-primary">{tier.price}</span>
                </div>
                <p className="text-text-secondary text-sm mb-6">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <p className="text-text-secondary text-sm mb-6">
              Final pricing depends on project requirements.
            </p>
            <Button href="#contact">Discuss Your Project</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
