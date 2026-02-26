import Header from "@/components/Header";
import About from "@/components/About";
import Contact from "@/components/Contact";

/**
 * Perfil Page
 * 
 * Diseño: Minimalismo Corporativo Elegante
 */

export default function Perfil() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Contact />
    </div>
  );
}
