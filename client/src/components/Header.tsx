import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Servicios", href: "/#servicios" },
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
            <div className="bg-white text-[#003366] font-bold w-9 h-9 flex items-center justify-center rounded">G</div>
            <span className="font-bold tracking-tighter text-lg uppercase hidden sm:block">Giovani Sánchez V.</span>
          </a>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] font-bold tracking-widest uppercase hover:text-[#7eb6e6] transition-colors">{link.name}</a>
          ))}
        </nav>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#003366] border-t border-white/10 py-6 flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest">{link.name}</a>
          ))}
        </div>
      )}
    </header>
  );
}
