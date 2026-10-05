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
      <main className="flex-1">
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}
