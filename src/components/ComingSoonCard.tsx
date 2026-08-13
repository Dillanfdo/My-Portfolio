import { motion } from 'framer-motion';
import { ExternalLink, Clock } from 'lucide-react';
import type { UpcomingProject } from '@/data/upcomingProjects';
import ProjectPreview from './ProjectPreview';
import Button from './Button';

interface ComingSoonCardProps {
  project: UpcomingProject;
  index: number;
}

export default function ComingSoonCard({ project, index }: ComingSoonCardProps) {
  const isLive = project.status === 'live' && project.liveUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="rounded-2xl bg-card border border-white/5 shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:border-white/10 hover:-translate-y-1 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <motion.div
            className={`transition-transform duration-700 ${!isLive ? 'group-hover:scale-[1.03]' : 'group-hover:scale-[1.04]'}`}
          >
            <ProjectPreview preview={project.preview} />
          </motion.div>

          {!isLive ? (
            <>
              <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
                  <span className="text-sm font-semibold tracking-widest text-text-primary uppercase">
                    Coming Soon
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.liveUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg flex items-center gap-2 text-sm font-semibold tracking-widest text-text-primary uppercase hover:bg-white/15 transition-colors"
                >
                  View Website
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </>
          )}

          <div className="absolute top-4 left-4 flex gap-2">
            {project.isConcept && (
              <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-xs font-medium text-accent-light backdrop-blur-sm">
                Concept Project
              </span>
            )}
            {!isLive && (
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-text-secondary backdrop-blur-sm flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Upcoming
              </span>
            )}
          </div>
        </div>

        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <p className="text-xs text-accent font-medium tracking-wide uppercase mb-2">
            {project.category}
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-light transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary leading-relaxed mb-5">{project.description}</p>

          <div className="mb-6">
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-3">
              Capabilities demonstrated
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-center gap-2 text-sm text-text-secondary"
                >
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            {isLive ? (
              <Button
                href={project.liveUrl!}
                variant="primary"
                className="!py-2.5 !px-5 !text-sm"
                showArrow={false}
              >
                <span className="flex items-center gap-2">
                  View Website
                  <ExternalLink className="w-4 h-4" />
                </span>
              </Button>
            ) : (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-text-secondary bg-white/5 border border-white/10 cursor-default">
                <Clock className="w-4 h-4" />
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
