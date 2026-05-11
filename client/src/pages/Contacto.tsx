import ContactForm from "@/components/ContactForm";
import Contact from "@/components/Contact";

export default function Contacto() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <ContactForm />
      </main>
      <Contact />
    </div>
  );
}
