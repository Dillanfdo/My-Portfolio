import { motion } from 'framer-motion';
import type { ProfessionalExperience } from '@/data/professionalExperience';

interface ProfessionalExperienceCardProps {
  experience: ProfessionalExperience;
  index: number;
}

const categoryAccents: Record<string, string> = {
  bloom: 'from-accent/20 via-purple-500/10 to-background',
  healthcare: 'from-emerald-500/15 via-teal-500/10 to-background',
  ulabsystems: 'from-blue-500/15 via-indigo-500/10 to-background',
};

export default function ProfessionalExperienceCard({
  experience,
  index,
}: ProfessionalExperienceCardProps) {
  const accent = categoryAccents[experience.id] ?? 'from-accent/15 to-background';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="rounded-2xl bg-card border border-white/5 shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:border-white/10 hover:-translate-y-1 h-full flex flex-col">
        {/* Abstract header — no confidential product UI */}
        <div className={`relative aspect-[16/7] bg-gradient-to-br ${accent} overflow-hidden`}>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl font-bold text-white/20">
                {experience.title.charAt(0)}
              </span>
            </div>
          </div>
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-text-primary backdrop-blur-sm">
            Professional Experience
          </span>
        </div>

        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <p className="text-xs text-accent font-medium tracking-wide uppercase mb-2">
            {experience.category}
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-light transition-colors">
            {experience.title}
          </h3>
          <p className="text-text-secondary leading-relaxed mb-4">{experience.description}</p>
          <p className="text-sm text-text-secondary/80 mb-4">{experience.contribution}</p>
          <div className="flex flex-wrap gap-2 mb-4 mt-auto">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-text-secondary border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm font-medium text-accent-light/80">{experience.highlight}</p>
        </div>
      </div>
    </motion.article>
  );
}
