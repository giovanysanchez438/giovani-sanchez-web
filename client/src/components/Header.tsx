import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Header Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Nombre en firma manuscrita
 * - Tagline profesional
 * - Frase diferenciadora
 * - Navegación horizontal limpia
 * - Transiciones suaves
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
        {/* Top Section: Logo, Name, Tagline */}
        <div className="py-4 md:py-6 flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <a href="/" className="flex-shrink-0 transition-smooth">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold" style={{fontFamily: 'Playfair Display, serif'}}>G</span>
            </div>
          </a>

          {/* Center: Name and Tagline */}
          <div className="flex-1 text-center hidden sm:block">
            <h1 className="text-xl md:text-2xl text-gray-800 mb-1" style={{fontFamily: 'Great Vibes, cursive', fontWeight: '400', letterSpacing: '1px'}}>
              Giovani Sánchez V.
            </h1>
            <p className="text-xs md:text-sm text-gray-600 font-medium tracking-wide">
              GENERADOR DE CRECIMIENTO CON VISIÓN FINANCIERA
            </p>
          </div>

          {/* Right: Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-smooth flex-shrink-0"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-px bg-gray-100" />

        {/* Bottom Section: Tagline and Navigation */}
        <div className="py-3 md:py-4 flex items-center justify-between gap-4">
          {/* Left: Differentiator Quote */}
          <div className="text-xs md:text-sm text-gray-600 italic hidden lg:block max-w-xs">
            "Muchos marketers no saben de números. Muchos financieros no saben de mercado."
          </div>

          {/* Center/Right: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 md:gap-8 ml-auto">
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

      {/* Mobile Navigation */}
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
              "Muchos marketers no saben de números. Muchos financieros no saben de mercado."
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
