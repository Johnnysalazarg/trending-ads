import Hero from "@/components/Hero";
import TrustTicker from "@/components/TrustTicker";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustTicker />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
