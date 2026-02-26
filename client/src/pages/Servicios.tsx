import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

/**
 * Servicios Page
 * 
 * Diseño: Minimalismo Corporativo Elegante
 */

export default function Servicios() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Services />
      </main>
      <Contact />
    </div>
  );
}
