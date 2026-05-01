import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Perfil", href: "/perfil" },
    { name: "Blog", href: "/blog" },
    { name: "Libro ONG", href: "/libro-ong" },
  ];

  return (
    <header className="bg-[#003366] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="bg-white text-[#003366] font-bold w-9 h-9 flex items-center justify-center rounded shadow-sm">G</div>
            <span className="font-bold text-lg uppercase hidden sm:block">Giovani Sánchez V.</span>
          </a>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map(item => (
            <Link key={item.name} href={item.href}>
              <a className="text-[11px] font-bold tracking-widest uppercase hover:text-[#7eb6e6] transition-colors">{item.name}</a>
            </Link>
          ))}
        </nav>

        {/* Móvil (Botón Único) */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="lg:hidden bg-[#003366] border-t border-white/10 py-6 flex flex-col items-center gap-6 animate-in slide-in-from-top shadow-xl">
          {menuItems.map(item => (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
              <a className="text-sm font-bold uppercase tracking-widest">{item.name}</a>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
