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
  linkedinUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Educación Financiera",
    excerpt: "El Pilar Fundamental para el Crecimiento Personal y Empresarial.",
    category: "Finanzas",
    date: "26 Feb 2026",
    readTime: "8 min",
    slug: "estrategias-finanzas-corporativas",
    linkedinUrl: "https://www.linkedin.com/pulse/educaci%25C3%25B3n-financiera-el-pilar-fundamental-para-y-s%25C3%25A1nchez-vargas-1gqyc/?trackingId=oWprF8LlQaypkn8NUkzosQ%3D%3D"
  },
  {
    id: "2",
    title: "La Inteligencia Artificial en el trabajo",
    excerpt: "𝗟𝗮 𝗜𝗔 𝗵𝗮𝗰𝗲 𝗲𝗹 𝘁𝗿𝗮𝗯𝗮𝗷𝗼 𝗶𝗻𝘃𝗶𝘀𝗶𝗯𝗹𝗲 𝘆 𝗹𝗮𝘀 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝘀, 𝗲𝗹 𝗺𝗲𝗺𝗼𝗿𝗮𝗯𝗹𝗲.",
    category: "Marketing",
    date: "24 Feb 2026",
    readTime: "10 min",
    slug: "marketing-estrategico-datos",
    linkedinUrl: "https://www.linkedin.com/posts/giovani-sanchez_inteligenciaartificial-ai-innovacion-activity-7373740251007098880-ZKV_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAizfnIBkuwJvgYRRhwvElAnbuc7vWzrewc&v=202602281220"
  },
  {
    id: "3",
    title: "El Fundraising en la Era Digital",
    excerpt: "Cómo la IA y la Experiencia del Donante Transforman las ONGs.",
    category: "Liderazgo",
    date: "22 Feb 2026",
    readTime: "12 min",
    slug: "Fundraising-Donación-Digital",
    linkedinUrl: "https://www.linkedin.com/pulse/el-fundraising-en-la-era-digital-c%25C3%25B3mo-ia-y-del-las-s%25C3%25A1nchez-vargas-6a4tf/?trackingId=O20psVHcQzOQbNF4ZRDjWA%3D%3D"
  },
  {
    id: "4",
    title: "PIB 2026",
    excerpt: "Lo positivo y lo que preocupa de los resultados del PIB en Colombia.",
    category: "Finanzas",
    date: "20 Feb 2026",
    readTime: "9 min",
    slug: "finanzas-mercados-desempeño",
    linkedinUrl: "https://www.linkedin.com/pulse/lo-positivo-y-que-preocupa-de-los-resultados-del-pib-s%25C3%25A1nchez-vargas-zdk8e/?trackingId=O20psVHcQzOQbNF4ZRDjWA%3D%3D"
  },
  {
    id: "5",
    title: "Del Fundraising a la Adquisición de Clientes",
    excerpt: "El Poder del Marketing Orientado a Resultados en el Crecimiento Empresarial.",
    category: "Fundraising",
    date: "18 Feb 2026",
    readTime: "11 min",
    slug: "transformacion-digital-crecimiento",
    linkedinUrl: "https://www.linkedin.com/pulse/del-fundraising-la-adquisici%25C3%25B3n-de-clientes-el-poder-s%25C3%25A1nchez-vargas-va3uc/?trackingId=O20psVHcQzOQbNF4ZRDjWA%3D%3D"
  },
  {
    id: "6",
    title: "La Evolución de la Filantropía Digital en Colombia",
    excerpt: "Hacia la Automatización Inteligente de Donaciones Recurrentes en las Organizaciones Sociales.",
    category: "Fundraising",
    date: "16 Feb 2026",
    readTime: "7 min",
    slug: "Fundraising-Digital-herramientas",
    linkedinUrl: "https://www.linkedin.com/pulse/la-evoluci%C3%B3n-de-filantrop%C3%ADa-digital-en-colombia-hacia-giovani-s%C3%A1nchez-z1ece/?trackingId=XP7jGRZ5QcmsVleQNJcokA%3D%3D"
  }
];

const categories = ["Todos", "Finanzas", "Marketing", "Liderazgo", "Fundraising"];

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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Blog & Artículos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comparte mis conocimientos sobre finanzas, estrategia empresarial y liderazgo para ayudarte a tomar mejores decisiones.
          </p>
        </div>

        {/* ── LIBRO DESTACADO ── */}
        {(selectedCategory === "Todos" || selectedCategory === "Fundraising") && (
          <div className="mb-12">
            <article className="rounded-xl overflow-hidden shadow-2xl group relative" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1b3e 60%, #1e3370 100%)' }}>
              {/* líneas decorativas */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(74,127,212,0.3) 60px, rgba(74,127,212,0.3) 61px)'
              }} />

              <div className="relative px-8 py-10 flex flex-col md:flex-row items-center gap-8">

                {/* Ícono libro */}
                <div className="flex-shrink-0 w-24 h-24 rounded-xl flex items-center justify-center text-5xl shadow-lg" style={{ background: 'rgba(74,127,212,0.2)', border: '1px solid rgba(111,163,240,0.3)' }}>
                  📘
                </div>

                {/* Texto */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(74,127,212,0.25)', color: '#6fa3f0' }}>
                      Recurso Gratuito
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(74,127,212,0.25)', color: '#6fa3f0' }}>
                      Libro Interactivo
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(74,127,212,0.25)', color: '#6fa3f0' }}>
                      Fundraising
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    El Arte de <em style={{ color: '#6fa3f0' }}>Captar Fondos</em>
                  </h3>

                  <p className="text-sm mb-5 max-w-2xl" style={{ color: 'rgba(232,238,248,0.7)' }}>
                    Guía estratégica completa para directores y fundadores de ONG. Aprende a cultivar donantes, construir alianzas RSE, lanzar campañas digitales y diseñar tu plan de captación en 6 capítulos interactivos.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-xs mb-6" style={{ color: '#8fa8cc' }}>
                    <span>📖 6 Capítulos</span>
                    <span>·</span>
                    <span>🎯 Donantes · RSE · Digital</span>
                    <span>·</span>
                    <span>⏱ ~40 min de lectura</span>
                    <span>·</span>
                    <span>✅ Acceso gratuito</span>
                  </div>

                  <a
                    href="/libro-ong"
                    className="inline-flex items-center gap-2 font-bold py-3 px-7 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                    style={{ background: '#ffffff', color: '#0d1b3e' }}
                  >
                    Leer el libro completo
                    <ArrowRight size={18} />
                  </a>
                </div>

                {/* Capítulos preview — solo desktop */}
                <div className="hidden lg:flex flex-col gap-2 flex-shrink-0 w-52">
                  {["I. Fundamentos", "II. Cultivar Donantes", "III. Estrategia Digital", "IV. Alianzas RSE", "V. Comunicar Impacto", "VI. Plan de Acción"].map((ch, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(232,238,248,0.6)' }}>
                      <span style={{ color: '#4a7fd4', fontWeight: 600 }}>{i + 1}</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>

              </div>
            </article>
          </div>
        )}

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
                    href={post.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
