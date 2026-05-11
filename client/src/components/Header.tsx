import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Sobre mí",    href: "/sobre-mi"   },
  { name: "Trabajo",     href: "/trabajo"    },
  { name: "Experiencia", href: "/experiencia"},
  { name: "Artículos",   href: "/blog"       },
  { name: "Libro ONG",   href: "/libro-ong"  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="bg-white border-b border-[#e8e6e1] sticky top-0 z-50">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <a className="text-[12px] font-medium text-[#111] tracking-[0.08em] uppercase hover:text-[#555] transition-colors">
            Giovani Sánchez V.
          </a>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                className={`text-[11.5px] transition-colors ${
                  location === item.href
                    ? "text-[#111] font-medium"
                    : "text-[#777] hover:text-[#111]"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
          <Link href="/contacto">
            <a className="text-[11px] font-medium bg-[#111] text-white px-4 py-2 rounded-[2px] hover:bg-[#333] transition-colors">
              Hablemos
            </a>
          </Link>
        </nav>

        {/* Botón móvil */}
        <button
          className="lg:hidden p-2 text-[#111]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8e6e1] py-5 flex flex-col items-center gap-5 shadow-md">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                onClick={() => setIsOpen(false)}
                className="text-[13px] text-[#555] hover:text-[#111] transition-colors"
              >
                {item.name}
              </a>
            </Link>
          ))}
          <Link href="/contacto">
            <a
              onClick={() => setIsOpen(false)}
              className="text-[12px] font-medium bg-[#111] text-white px-5 py-2 rounded-[2px]"
            >
              Hablemos
            </a>
          </Link>
        </div>
      )}
    </header>
  );
}
