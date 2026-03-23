import Hero from "@/components/sections/Hero";
import LeadCapture from "@/components/sections/LeadCapture";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Speaking from "@/components/sections/Speaking";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LeadCapture />
      <About />
      <Services />
      <Speaking />
      <Testimonials />
      <Contact />
    </>
  );
}
