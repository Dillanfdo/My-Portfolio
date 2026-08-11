import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/faq';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-background-secondary/30">
      <div className="container-max mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            subtitle="Answers to questions business owners often ask before starting a project."
            align="center"
          />
        </ScrollReveal>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <ScrollReveal key={item.id} delay={index * 0.05}>
                <div className="rounded-xl bg-card border border-white/5 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-text-primary">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-text-secondary flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed border-t border-white/5 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
