import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const steps = [
  {
    number: '01',
    title: 'Tell me about your business',
    description:
      'You tell me what you do, who your customers are and what you want your website to accomplish.',
  },
  {
    number: '02',
    title: 'Plan & Design',
    description:
      'I turn your requirements into a clear website structure and visual direction.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'I develop the website with responsive design, modern frontend technologies and performance in mind.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Your website goes live and is ready for your customers.',
  },
];

export default function Process() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="process" className="section-padding bg-background-secondary/30">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <SectionHeading
            eyebrow="How It Works"
            title="From idea to launch"
            subtitle="A straightforward process designed to make building your website simple and stress-free."
            align="center"
          />
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block md:-translate-x-px" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.15}>
                <motion.div
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className={`p-6 md:p-8 rounded-2xl bg-card border border-white/5 shadow-card ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}
                    >
                      <span className="text-accent font-mono text-sm font-medium">{step.number}</span>
                      <h3 className="text-xl font-bold text-text-primary mt-2 mb-3">{step.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-glow" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
