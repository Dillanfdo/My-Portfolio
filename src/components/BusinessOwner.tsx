import { services } from '@/data/services';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import ScrollReveal from './ScrollReveal';

export default function BusinessOwner() {
  return (
    <section id="services" className="section-padding bg-background-secondary/30">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <SectionHeading
            title={
              <>
                Have a business?{' '}
                <span className="text-gradient">Let&apos;s build its digital home.</span>
              </>
            }
            subtitle="Whether you're launching a new business, redesigning an outdated website, or turning an idea into a web application, I can design and build the frontend experience around your needs."
            align="center"
          />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
