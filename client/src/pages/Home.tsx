import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HomeIntro from "@/components/HomeIntro";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HomeIntro />
        <About />
        <Services />
        <Experience />
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}
