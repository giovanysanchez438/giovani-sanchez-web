import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Servicios", href: "/#servicios" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Experiencia", href: "/#experiencia" },
    { name: "Blog", href: "/blog" },
    { name: "Libro ONG", href: "/libro-ong" },
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <header className="bg-[#003366] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="bg-white text-[#003366] font-bold w-9 h-9 flex items-center justify-center rounded shadow-sm text-lg">G</div>
            <span className="font-bold text-lg uppercase hidden sm:block tracking-tighter">Giovani Sánchez V.</span>
          </a>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-[10px] font-bold tracking-widest uppercase hover:text-[#7eb6e6] transition-colors">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Botón Móvil Único */}
        <button className="lg:hidden p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="lg:hidden bg-[#003366] border-t border-white/10 py-6 flex flex-col items-center gap-6 shadow-2xl animate-in slide-in-from-top">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest hover:text-[#7eb6e6]">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
