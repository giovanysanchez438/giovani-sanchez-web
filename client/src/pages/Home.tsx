import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Solo el contenido, sin Header aquí */}
      <Hero />
      <Services />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}
