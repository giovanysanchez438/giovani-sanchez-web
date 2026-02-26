import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

/**
 * Experiencia Page
 * 
 * Diseño: Minimalismo Corporativo Elegante
 */

export default function Experiencia() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Experience />
      </main>
      <Contact />
    </div>
  );
}
