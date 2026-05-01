/**
 * Hero — Versión Profesional 2026
 * Enfoque: Sostenibilidad Financiera y Fundraising
 */

import { LucideLinkedin, LucideCalendar } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--primary)] text-white">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container relative mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Contenido Principal */}
            <div className="lg:col-span-8">
              <header>
                <p className="text-[#7eb6e6] text-sm tracking-[0.3em] font-bold uppercase mb-6">
                  Fundraising con Rigor Financiero · América Latina
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
                  Impulso el fundraising hacia la <br />
                  <span className="text-[#7eb6e6]">sostenibilidad financiera</span> real.
                </h1>
              </header>

              <div className="max-w-2xl">
                <p className="text-xl lg:text-2xl font-light mb-8 text-blue-50/90">
                  Transformo la recaudación tradicional en modelos de captación recurrente 
                  basados en datos y estrategia financiera.
                </p>
                
                <div className="border-l-4 border-[#7eb6e6] pl-6 mb-10 bg-white/5 py-4 rounded-r-lg">
                  <p className="text-lg italic text-blue-100/80">
                    "Aplico ingeniería financiera al impacto social: métricas de retención 
                    y decisiones basadas en datos para eliminar la improvisación."
                  </p>
                </div>

                {/* Llamadas a la acción */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <a
                    href="/contacto"
                    className="flex items-center gap-2 px-8 py-4 bg-white text-[var(--primary)] font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg"
                  >
                    <LucideCalendar className="w-5 h-5" />
                    Conversemos 20 minutos
                  </a>
                  <a
                    href="https://www.linkedin.com/in/giovanisanchezv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                  >
                    <LucideLinkedin className="w-5 h-5" />
                    Ver Perfil Profesional
                  </a>
                </div>

                {/* Métricas clave */}
                <div className="pt-10 border-t border-white/10">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <div>
                      <div className="text-3xl font-bold mb-1">83.500+</div>
                      <div className="text-xs uppercase tracking-widest text-blue-300/70">Donantes Gestionados</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">+15 años</div>
                      <div className="text-xs uppercase tracking-widest text-blue-300/70">Trayectoria Senior</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
