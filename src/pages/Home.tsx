import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Projects from '@/components/Projects';
import BusinessOwner from '@/components/BusinessOwner';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import Process from '@/components/Process';
import TechnicalDifferentiator from '@/components/TechnicalDifferentiator';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
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
        <Projects />
        <BusinessOwner />
        <WhyWorkWithMe />
        <Process />
        <TechnicalDifferentiator />
        <About />
        <Experience />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
