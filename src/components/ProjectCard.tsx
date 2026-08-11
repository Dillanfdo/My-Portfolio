import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import ProjectPreview from './ProjectPreview';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="rounded-2xl bg-card border border-white/5 shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:border-white/10 hover:-translate-y-1">
        {/* Preview */}
        <div className="relative overflow-hidden">
          <motion.div
            className="transition-transform duration-700 group-hover:scale-[1.04]"
            {...(reducedMotion ? {} : {})}
          >
            <ProjectPreview preview={project.preview} />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          {project.isConcept && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-xs font-medium text-accent-light">
              Concept Project
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <p className="text-xs text-accent font-medium tracking-wide uppercase mb-2">
            {project.category}
          </p>
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent-light transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
          </div>
          <p className="text-text-secondary leading-relaxed mb-4">{project.description}</p>
          <p className="text-sm text-text-secondary/80 mb-4">{project.contribution}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-text-secondary border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm font-medium text-accent-light/80">{project.highlight}</p>
        </div>
      </div>
    </motion.article>
  );
}
