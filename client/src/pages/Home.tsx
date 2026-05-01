import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Tu propuesta de valor principal */}
      <Hero />

      {/* Secciones con ID para que el menú sepa a dónde bajar */}
      <section id="servicios" className="py-20 border-t border-slate-50">
        <Services />
      </section>

      <section id="experiencia" className="py-20 bg-slate-50">
        <Experience />
      </section>

      <section id="certificaciones" className="py-20">
        <Certifications />
      </section>

      <section id="contacto" className="py-20 bg-white">
        <Contact />
      </section>
    </main>
  );
}
