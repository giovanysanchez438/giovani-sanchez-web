import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#003366] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="bg-white text-[#003366] font-bold w-9 h-9 flex items-center justify-center rounded">G</div>
            <span className="font-bold tracking-tighter text-lg uppercase hidden md:block">Giovani Sánchez V.</span>
          </a>
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#servicios" className="text-[11px] font-bold tracking-widest uppercase hover:text-[#7eb6e6] transition-colors">Servicios</a>
          <a href="#experiencia" className="text-[11px] font-bold tracking-widest uppercase hover:text-[#7eb6e6] transition-colors">Experiencia</a>
          <Link href="/blog"><a className="text-[11px] font-bold tracking-widest uppercase hover:text-[#7eb6e6]">Blog</a></Link>
          <Link href="/libro-ong"><a className="text-[11px] font-bold tracking-widest uppercase hover:text-[#7eb6e6]">Libro ONG</a></Link>
          <a href="#contacto" className="text-[11px] font-bold tracking-widest uppercase hover:text-[#7eb6e6]">Contacto</a>
        </nav>

        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="lg:hidden bg-[#003366] border-t border-white/10 py-6 flex flex-col items-center gap-6">
          <a href="#servicios" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest">Servicios</a>
          <a href="#experiencia" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest">Experiencia</a>
          <Link href="/blog" onClick={() => setIsOpen(false)}><a className="text-sm font-bold uppercase tracking-widest">Blog</a></Link>
          <Link href="/libro-ong" onClick={() => setIsOpen(false)}><a className="text-sm font-bold uppercase tracking-widest">Libro ONG</a></Link>
        </div>
      )}
    </header>
  );
}
