/**
 * Hero — Versión rediseñada
 *
 * Alinea sitio web con LinkedIn:
 *  - Posicionamiento: "Estratega en Fundraising y Sostenibilidad para ONGs"
 *  - Tagline: "Transformo recursos en oportunidades para un mundo más sostenible"
 *  - Pilares: "Liderazgo estratégico · Crecimiento sostenible · Impacto social"
 *  - Foto profesional circular a la derecha
 *  - Mantiene "Muchos marketers no saben de números..." como sello propio
 *
 * Usa el design system existente:
 *  - var(--primary) #0F3A66 para fondo navy
 *  - Container del sitio
 *  - Playfair Display heredado para h1
 *  - Inter heredado para cuerpo
 */

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary)]">
      {/* Patrón decorativo sutil */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,.5) 0px, transparent 1.5px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Acento gráfico — esquina superior derecha */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(126,182,230,.4) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* ===== COLUMNA IZQUIERDA: COPY ===== */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Eyebrow */}
            <p className="text-xs lg:text-sm tracking-[0.32em] font-medium text-[#7eb6e6] mb-8 uppercase">
              Estratega en Fundraising y Sostenibilidad
            </p>

            {/* Banner principal — réplica de tu LinkedIn */}
            <h1 className="!text-white mb-8 !leading-[1.05]">
              <span className="block">Propósito</span>
              <span className="block">
                <span className="opacity-95">con </span>
                <span className="text-[#7eb6e6]">impacto.</span>
              </span>
            </h1>

            {/* Tagline LinkedIn */}
            <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-2xl mb-8 font-light">
              Transformo recursos en oportunidades para un mundo más sostenible.
            </p>

            {/* Pilares de marca */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-10">
              <span className="text-sm uppercase tracking-wider text-[#c8dcef] font-medium">
                Liderazgo estratégico
              </span>
              <span className="text-[#7eb6e6]">·</span>
              <span className="text-sm uppercase tracking-wider text-[#c8dcef] font-medium">
                Crecimiento sostenible
              </span>
              <span className="text-[#7eb6e6]">·</span>
              <span className="text-sm uppercase tracking-wider text-[#c8dcef] font-medium">
                Impacto social
              </span>
            </div>

            {/* Sello diferenciador (frase propia) */}
            <div className="border-l-2 border-[#7eb6e6] pl-5 mb-10 max-w-xl">
              <p className="text-base lg:text-lg italic text-[#c8dcef] leading-relaxed">
                "Muchos marketers no saben de números. Muchos financieros no saben
                de mercado."
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#perfil"
                className="inline-flex items-center justify-center px-8 py-4 bg-white !text-[var(--primary)] font-semibold rounded-md hover:bg-[#c8dcef] transition-colors"
              >
                Conoce mi perfil
              </a>
              <a
                href="/servicios"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 !text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                Ver mis servicios
              </a>
            </div>

            {/* Footer del hero — credenciales rápidas */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="font-serif text-3xl text-white mb-1">15+</div>
                <div className="text-xs uppercase tracking-wider text-[#9ec5e8]">
                  Años en ONGs
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-white mb-1">83.500</div>
                <div className="text-xs uppercase tracking-wider text-[#9ec5e8]">
                  Donantes
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-white mb-1">$5.200M</div>
                <div className="text-xs uppercase tracking-wider text-[#9ec5e8]">
                  COP captados
                </div>
              </div>
            </div>
          </div>

          {/* ===== COLUMNA DERECHA: FOTO ===== */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Halo decorativo detrás de la foto */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#7eb6e6]/20 to-transparent blur-2xl" />

              {/* Foto circular */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                <img
                  src="/profile-hero.jpg"
                  alt="Giovani Sánchez Vargas — Estratega en Fundraising y Sostenibilidad"
                  className="relative w-full h-full object-cover rounded-full shadow-2xl"
                  loading="eager"
                />

                {/* Decoración: pequeños círculos */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#7eb6e6]" />
                <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
