import { Calendar, ArrowRight } from "lucide-react";
import ShareButtons from "./ShareButtons";
import { useState } from "react";

/**
 * Blog Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Grid de artículos profesionales
 * - Categorías por tema con filtrado funcional
 * - Información de fecha y lectura
 * - Call-to-action para leer más
 */

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Estrategias de Finanzas Corporativas para Maximizar Rentabilidad",
    excerpt: "Descubre cómo optimizar la gestión financiera de tu empresa mediante estrategias probadas que aumentan rentabilidad y reducen riesgos operacionales.",
    category: "Finanzas",
    date: "26 Feb 2026",
    readTime: "8 min",
    slug: "estrategias-finanzas-corporativas"
  },
  {
    id: "2",
    title: "Marketing Estratégico: Cómo Combinar Datos con Visión Comercial",
    excerpt: "Aprende a integrar análisis de datos con estrategia comercial para crear campañas que generen resultados medibles y sostenibles.",
    category: "Marketing",
    date: "24 Feb 2026",
    readTime: "10 min",
    slug: "marketing-estrategico-datos"
  },
  {
    id: "3",
    title: "Planificación Financiera: Guía Completa para Empresarios",
    excerpt: "Una guía paso a paso para crear un plan financiero sólido que te permita tomar decisiones informadas y alcanzar tus objetivos empresariales.",
    category: "Finanzas",
    date: "22 Feb 2026",
    readTime: "12 min",
    slug: "planificacion-financiera-empresarios"
  },
  {
    id: "4",
    title: "Liderazgo Efectivo: Construyendo Equipos de Alto Desempeño",
    excerpt: "Descubre las claves del liderazgo moderno para motivar, desarrollar y retener talento en tu organización.",
    category: "Liderazgo",
    date: "20 Feb 2026",
    readTime: "9 min",
    slug: "liderazgo-equipos-desempeño"
  },
  {
    id: "5",
    title: "Transformación Digital: Oportunidades y Desafíos para el Crecimiento",
    excerpt: "Explora cómo la transformación digital puede impulsar el crecimiento de tu negocio y qué desafíos debes anticipar.",
    category: "Estrategia",
    date: "18 Feb 2026",
    readTime: "11 min",
    slug: "transformacion-digital-crecimiento"
  },
  {
    id: "6",
    title: "Análisis de Mercado: Herramientas para Tomar Decisiones Estratégicas",
    excerpt: "Aprende a utilizar herramientas de análisis de mercado para identificar oportunidades y anticipar cambios en tu industria.",
    category: "Mercado",
    date: "16 Feb 2026",
    readTime: "7 min",
    slug: "analisis-mercado-herramientas"
  }
];

const categories = ["Todos", "Finanzas", "Marketing", "Liderazgo", "Estrategia", "Mercado"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = selectedCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Blog & Artículos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comparte mis conocimientos sobre finanzas, estrategia empresarial y liderazgo para ayudarte a tomar mejores decisiones.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden card-shadow hover:shadow-lg transition-smooth group"
              >
                {/* Category Badge */}
                <div className="px-6 pt-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-sm font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <span className="font-medium">{post.readTime}</span>
                  </div>

                  {/* Share Buttons */}
                  <div className="mb-4">
                    <ShareButtons
                      title={post.title}
                      url={`${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${post.slug}`}
                      description={post.excerpt}
                    />
                  </div>

                  {/* CTA */}
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-smooth"
                  >
                    Leer más
                    <ArrowRight size={18} />
                  </a>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">No hay artículos en esta categoría.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿Tienes una pregunta específica? No dudes en contactarme para una consultoría personalizada.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
          >
            Solicitar Consultoría
          </a>
        </div>
      </div>
    </section>
  );
}
