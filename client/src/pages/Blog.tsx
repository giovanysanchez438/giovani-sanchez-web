import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

/**
 * Blog Page
 * 
 * Diseño: Minimalismo Corporativo Elegante
 */

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Blog />
      </main>
      <Contact />
    </div>
  );
}
