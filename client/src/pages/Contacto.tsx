import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Contact from "@/components/Contact";

/**
 * Contacto Page
 * 
 * Diseño: Minimalismo Corporativo Elegante
 */

export default function Contacto() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Contact />
    </div>
  );
}
