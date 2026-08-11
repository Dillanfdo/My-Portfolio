import { motion } from 'framer-motion';
import type { Service } from '@/data/services';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const reducedMotion = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={reducedMotion ? {} : { y: -4, scale: 1.02 }}
      className="group p-6 md:p-8 rounded-2xl bg-card border border-white/5 shadow-card transition-all duration-300 hover:border-accent/30 hover:shadow-card-hover"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-5 h-5 text-accent-light" />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-light transition-colors">
        {service.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  );
}
