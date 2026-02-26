import Header from "@/components/Header";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

/**
 * Certificaciones Page
 * 
 * Diseño: Minimalismo Corporativo Elegante
 */

export default function Certificaciones() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}
