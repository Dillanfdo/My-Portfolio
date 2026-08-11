import { projects } from '@/data/projects';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  return (
    <section id="work" className="section-padding">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Work"
            subtitle="A few things I've built across products, platforms and business experiences."
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
