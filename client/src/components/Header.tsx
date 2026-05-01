import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-[#003366] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* IDENTIDAD: Logo tipo Sello de Autoridad */}
          <Link href="/">
            <a className="flex items-center gap-4 group">
              <div className="bg-white text-[#003366] font-bold w-10 h-10 flex items-center justify-center rounded shadow-md group-hover:bg-[#7eb6e6] transition-colors duration-300">
                <span className="text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none uppercase">Giovani Sánchez V.</span>
                <span className="text-[9px] tracking-[0.25em] text-[#7eb6e6] font-semibold mt-1">FUNDRAISING CON RIGOR FINANCIERO</span>
              </div>
            </a>
          </Link>

          {/* NAVEGACIÓN: La "Cinta" Estilo Huron */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/perfil">
              <a className="text-[11px] font-bold tracking-widest uppercase hover:text-[#7eb6e6] transition-colors">Perfil</a>
            </Link>
            <Link href="/servicios">
              <a className="text-[11px] font-bold tracking-widest uppercase hover:text-[#7eb6e6] transition-colors">Servicios</a>
            </Link>
            <Link href="/experiencia">
              <a className="text-[11px] font-bold tracking-widest uppercase hover:text-[#7eb6e6] transition-colors">Experiencia</a>
            </Link>
            <Link href="/certificaciones">
              <a className="text-[11px] font-bold tracking-widest uppercase hover:text-[#7eb6e6] transition-colors">Certificaciones</a>
            </Link>
          </nav>

          {/* ACCIÓN: Botón de Conversión Directa */}
          <Link href="/contacto">
            <a className="hidden sm:block px-6 py-2 bg-[#7eb6e6] text-[#003366] font-bold text-[10px] uppercase tracking-widest rounded hover:bg-white hover:shadow-xl transition-all duration-300">
              Contacto
            </a>
          </Link>

        </div>
      </div>
    </header>
  );
}
