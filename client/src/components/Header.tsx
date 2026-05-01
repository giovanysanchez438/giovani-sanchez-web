import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Header — Versión 3 (alineado con nuevo LinkedIn, mayo 2026)
 *
 * Tagline = concepto ancla del nuevo posicionamiento
 * Frase = diferenciador del Acerca de
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "PERFIL", href: "/perfil" },
    { label: "SERVICIOS", href: "/servicios" },
    { label: "EXPERIENCIA", href: "/experiencia" },
    { label: "CERTIFICACIONES", href: "/certificaciones" },
    { label: "PRINCIPIOS", href: "/principios" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACTO", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container">

        <div className="py-4 md:py-6 flex items-center justify-between gap-4">
          <a href="/" className="flex-shrink-0 transition-smooth">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>G</span>
            </div>
          </a>

          <div className="flex-1 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-0.5" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400', letterSpacing: '1px' }}>
              Giovani Sánchez V.
            </h1>
            {/* Tagline = concepto ancla del posicionamiento */}
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium tracking-wide">
              FUNDRAISING CON RIGOR FINANCIERO · ONG · LATAM
            </p>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-smooth flex-shrink-0"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:block h-px bg-gray-100" />

        <div className="py-3 md:py-4 hidden md:flex items-center justify-between gap-4">
          {/* Diferenciador del Acerca de */}
          <div className="text-xs md:text-sm text-gray-600 italic hidden lg:block max-w-xs">
            "El fundraising deja de ser supervivencia y se vuelve sostenibilidad financiera real."
          </div>

          <nav className="flex items-center gap-6 md:gap-8 ml-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs md:text-sm font-medium text-gray-700 hover:text-primary transition-smooth duration-200 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-gray-700 hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 text-xs text-gray-600 italic">
              "El fundraising deja de ser supervivencia y se vuelve sostenibilidad financiera real."
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
