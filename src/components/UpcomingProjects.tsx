import { upcomingProjects } from '@/data/upcomingProjects';
import SectionHeading from './SectionHeading';
import ComingSoonCard from './ComingSoonCard';
import ScrollReveal from './ScrollReveal';

export default function UpcomingProjects() {
  return (
    <section id="upcoming" className="section-padding bg-background-secondary/30">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Demonstrations"
            title="Websites I'm Building Next"
            subtitle="I'm currently preparing a collection of live website examples for different types of businesses. These upcoming projects will demonstrate how I approach real-world business websites — from structure and UX to responsive design, performance and conversion-focused experiences."
            align="center"
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {upcomingProjects.map((project, index) => (
            <ComingSoonCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
