import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Tu propuesta de valor con el nuevo estilo claro */}
      <Hero />

      {/* Sección de Servicios: Ingeniería Financiera */}
      <section id="servicios" className="py-20 border-t border-slate-50">
        <Services />
      </section>

      {/* Sección de Experiencia: Trayectoria Senior */}
      <section id="experiencia" className="py-20 bg-slate-50">
        <Experience />
      </section>

      {/* Avales y Certificaciones */}
      <section id="certificaciones" className="py-20">
        <Certifications />
      </section>

      {/* Cierre y Formulario de Contacto */}
      <section id="contacto" className="py-20 bg-white">
        <Contact />
      </section>
    </main>
  );
}
