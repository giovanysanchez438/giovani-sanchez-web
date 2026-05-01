import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Principles from "@/components/Principles"; // Expertise
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Hero />
      
      {/* Sección de Servicios */}
      <section id="servicios">
        <Services />
      </section>

      {/* Sección de Expertise (Principios) */}
      <section id="expertise">
        <Principles />
      </section>

      {/* Sección de Experiencia Profesional */}
      <section id="experiencia" className="bg-slate-50">
        <Experience />
      </section>

      {/* Sección de Contacto */}
      <section id="contacto">
        <Contact />
      </section>
    </main>
  );
}
