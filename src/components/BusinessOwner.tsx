import { services } from '@/data/services';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

export default function BusinessOwner() {
  return (
    <section id="services" className="section-padding bg-background-secondary/30">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <SectionHeading
            title={
              <>
                Turning Ideas Into{' '}
                <span className="text-gradient">Digital Experiences</span>
              </>
            }
            subtitle="Whether you're launching a new business, refreshing an outdated website, or planning a custom web application, I can help turn your requirements into a polished, responsive digital experience."
            align="center"
          />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Button href="#contact">Tell Me About Your Project</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
