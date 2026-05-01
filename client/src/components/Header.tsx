import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Tu propuesta de valor con la foto corregida y fondo claro */}
      <Hero />

      {/* Sección de Servicios: Ingeniería Financiera */}
      <section id="servicios" className="py-12 border-t border-slate-50">
        <Services />
      </section>

      {/* Sección de Experiencia: Trayectoria Senior */}
      <section id="experiencia" className="py-12 bg-slate-50">
        <Experience />
      </section>

      {/* Avales y Certificaciones */}
      <section id="certificaciones" className="py-12">
        <Certifications />
      </section>

      {/* Cierre y Formulario de Contacto */}
      <section id="contacto" className="py-12 bg-white">
        <Contact />
      </section>
    </main>
  );
}
