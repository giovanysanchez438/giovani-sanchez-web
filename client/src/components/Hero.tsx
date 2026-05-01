**
 * Hero — Versión 4 (alineada con LinkedIn, mayo 2026 — versión actualizada)
 *
 * Titular LinkedIn:
 *   "Impulso el fundraising de ONG hacia la sostenibilidad financiera real,
 *    aplicando ingeniería financiera al sector social. | +15 años"
 *
 * Propuesta de valor (Acerca de):
 *   "En muchas ONG hay algo que no cuadra: recaudan año tras año, pero vuelven a
 *    empezar de cero. Yo ayudo a que el fundraising deje de ser supervivencia y
 *    se vuelva sostenibilidad financiera real. A esto le llamo Fundraising con
 *    Rigor Financiero."
 *
 * Posicionamiento consultivo:
 *   "Me llaman cuando una fundación pierde donantes y las soluciones tradicionales
 *    no han funcionado."
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

            {/* Eyebrow — concepto ancla */}
            <p className="text-xs lg:text-sm tracking-[0.28em] font-semibold text-[#7eb6e6] mb-6 uppercase leading-relaxed">
              Fundraising con Rigor Financiero · +15 años · América Latina
            </p>

            {/* Headline principal — titular LinkedIn */}
            <h1 className="!text-white mb-6 !leading-[1.05]">
              <span className="block">Impulso el fundraising</span>
              <span className="block">
                hacia la{" "}
                <span className="text-[#7eb6e6]">sostenibilidad</span>
              </span>
              <span className="block text-[#7eb6e6]">financiera real.</span>
            </h1>

            {/* Propuesta de valor — primera línea del Acerca de */}
            <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-2xl mb-8 font-light">
              En muchas ONG hay algo que no cuadra: recaudan año tras año,
              pero vuelven a empezar de cero.
            </p>

            {/* Diferenciador — segundo párrafo del Acerca de */}
            <div className="border-l-2 border-[#7eb6e6] pl-5 mb-10 max-w-xl">
              <p className="text-base lg:text-lg italic text-[#c8dcef] leading-relaxed">
                "Aplico ingeniería financiera al fundraising: diagnóstico financiero,
                estrategia de captación recurrente, modelos de retención y métricas
                para decidir con datos. Nada de improvisación."
              </p>
            </div>

            {/* CTAs — el principal es conversación, no CV */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-white !text-[var(--primary)] font-semibold rounded-md hover:bg-[#c8dcef] transition-colors"
              >
                Conversemos 20 minutos
              </a>
              <a
                href="https://www.linkedin.com/in/giovanisanchezv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 !text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
                Ver perfil LinkedIn
              </a>
            </div>

            {/* Métricas de credibilidad */}
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
                    COP recaudados
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl lg:text-3xl !text-white mb-1">
                    85%
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#9ec5e8]">
                    Retención sostenida
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl lg:text-3xl !text-white mb-1">
                    15+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#9ec5e8]">
                    Años en sector social
                  </div>
                </div>
              </div>
            </div>

            {/* Organizaciones */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-[#7eb6e6] mb-4 font-medium">
                Experiencia verificable en
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Save the Children",
                  "Fundación PLAN",
                  "Habitat for Humanity",
                  "Aldeas Infantiles SOS",
                  "BID · Alcaldía de Bogotá",
                ].map((org) => (
                  <span
                    key={org}
                    className="text-xs text-[#c8dcef] border border-white/20 rounded-full px-3 py-1"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ===== COLUMNA DERECHA: FOTO ===== */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#7eb6e6]/20 to-transparent blur-2xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                <img
                  src="/profile-hero.jpg"
                  alt="Giovani Sánchez Vargas — Fundraising con Rigor Financiero"
                  className="relative w-full h-full object-cover rounded-full shadow-2xl"
                  loading="eager"
                />
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
