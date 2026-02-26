import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import Contact from "@/components/Contact";

/**
 * Home Page
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * 
 * Estructura:
 * 1. Header - Navegación
 * 2. Hero - Sección principal con CTA
 * 3. Contact - Footer
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <HomeIntro />
      </main>
      <Contact />
    </div>
  );
}
