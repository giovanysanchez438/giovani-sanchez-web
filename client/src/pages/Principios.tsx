import Header from "@/components/Header";
import Principles from "@/components/Principles";
import Contact from "@/components/Contact";

/**
 * Principios Page
 * 
 * Diseño: Minimalismo Corporativo Elegante
 */

export default function Principios() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Principles />
      </main>
      <Contact />
    </div>
  );
}
