import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import ProfessionalExperience from '@/components/ProfessionalExperience';
import BusinessOwner from '@/components/BusinessOwner';
import UpcomingProjects from '@/components/UpcomingProjects';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import Process from '@/components/Process';
import TechnicalDifferentiator from '@/components/TechnicalDifferentiator';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <ProfessionalExperience />
        <BusinessOwner />
        <UpcomingProjects />
        <WhyWorkWithMe />
        <Process />
        <TechnicalDifferentiator />
        <About />
        <Pricing />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
