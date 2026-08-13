import { professionalExperience } from '@/data/professionalExperience';
import SectionHeading from './SectionHeading';
import ProfessionalExperienceCard from './ProfessionalExperienceCard';
import ScrollReveal from './ScrollReveal';

export default function ProfessionalExperience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Career"
            title="Professional Experience"
            subtitle="A look at the products and platforms I've contributed to throughout my frontend engineering career."
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {professionalExperience.map((item, index) => (
            <ProfessionalExperienceCard key={item.id} experience={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
