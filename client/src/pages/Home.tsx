import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      <section id="inicio"><Hero /></section>
      <section id="servicios" className="py-20 border-t border-slate-50"><Services /></section>
      <section id="experiencia" className="py-20 bg-slate-50"><Experience /></section>
      <section id="certificaciones" className="py-20"><Certifications /></section>
      <section id="contacto" className="py-20 bg-white"><Contact /></section>
    </main>
  );
}
