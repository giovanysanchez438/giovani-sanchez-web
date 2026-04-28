/**
 * Hero — Versión 2 (alineada con LinkedIn)
 *
 * Réplica del posicionamiento completo de LinkedIn:
 *   "Estratega en Fundraising y Sostenibilidad para ONGs |
 *    Captación, Retención (LTV) y Relacionamiento Institucional |
 *    83.500+ donantes gestionados | Ingeniero Financiero"
 *
 * Jerarquía visual:
 *   1. Eyebrow: posicionamiento principal
 *   2. Headline: "Propósito con impacto" (banner LinkedIn)
 *   3. Tagline: "Transformo recursos en oportunidades..."
 *   4. Especialización: Captación · Retención (LTV) · Relacionamiento
 *   5. Credenciales con cifras (línea inferior)
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

      {/* Acento gráfico de luz */}
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
            {/* Eyebrow — posicionamiento principal */}
            <p className="text-xs lg:text-sm tracking-[0.28em] font-semibold text-[#7eb6e6] mb-6 uppercase leading-relaxed">
              Estratega en Fundraising y Sostenibilidad para ONGs
            </p>

            {/* Headline — banner LinkedIn */}
            <h1 className="!text-white mb-6 !leading-[1.05]">
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

            {/* Especialización — segundo elemento LinkedIn */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-[#9ec5e8] mb-3 font-medium">
                Especialización
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-base lg:text-lg text-white font-medium">
                  Captación
                </span>
                <span className="text-[#7eb6e6]">·</span>
                <span className="text-base lg:text-lg text-white font-medium">
                  Retención <span className="text-[#9ec5e8]">(LTV)</span>
                </span>
                <span className="text-[#7eb6e6]">·</span>
                <span className="text-base lg:text-lg text-white font-medium">
                  Relacionamiento Institucional
                </span>
              </div>
            </div>

            {/* Sello diferenciador (frase propia) */}
            <div className="border-l-2 border-[#7eb6e6] pl-5 mb-10 max-w-xl">
              <p className="text-base lg:text-lg italic text-[#c8dcef] leading-relaxed">
                "Muchos marketers no saben de números. Muchos financieros no saben
                de mercado."
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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

            {/* Línea de credenciales con cifras — pruebas + credencial técnica */}
            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
                <div>
                  <div className="font-serif text-2xl lg:text-3xl !text-white mb-1">
                    83.500+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#9ec5e8]">
                    Donantes gestionados
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl lg:text-3xl !text-white mb-1">
                    $5.200M
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#9ec5e8]">
                    COP captados
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl lg:text-3xl !text-white mb-1">
                    15+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#9ec5e8]">
                    Años en ONGs
                  </div>
                </div>
                <div>
                  <div className="font-serif text-base lg:text-lg !text-white mb-1 leading-tight pt-1">
                    Ingeniero
                    <br />
                    Financiero
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#9ec5e8]">
                    Credencial
                  </div>
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
