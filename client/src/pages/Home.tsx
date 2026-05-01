import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Header Azul (Cinta de autoridad) */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero (Fondo claro, tu foto e impacto) */}
        <Hero />

        {/* 3. Servicios (Bloques de ingeniería financiera) */}
        <section id="servicios" className="py-20 border-t border-slate-100">
          <Services />
        </section>

        {/* 4. Experiencia (Estilo Fichas de Expertos de Huron) */}
        <section id="experiencia" className="py-20 bg-slate-50">
          <Experience />
        </section>

        {/* 5. Certificaciones y Contacto */}
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
