import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Hero />
      <section id="servicios"><Services /></section>
      <section id="experiencia"><Experience /></section>
      <section id="certificaciones"><Certifications /></section>
      <section id="contacto"><Contact /></section>
    </main>
  );
}
