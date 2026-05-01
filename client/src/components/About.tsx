/**
 * About — Versión 4 (alineada con nuevo "Acerca de" LinkedIn, mayo 2026)
 *
 * Texto = casi literal del Acerca de de LinkedIn, adaptado a formato web.
 * CTA principal = conversación de 20 min (igual que en LinkedIn).
 */
export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container max-w-3xl mx-auto px-6">

        <h2 className="mb-8">Sobre mí</h2>

        <div className="space-y-6 text-gray-700">

          <p className="text-lg leading-relaxed">
            En muchas ONG hay algo que no cuadra: recaudan año tras año, pero vuelven a empezar
            de cero. Yo ayudo a que el fundraising deje de ser supervivencia y se vuelva{" "}
            <strong>sostenibilidad financiera real</strong>. A esto le llamo{" "}
            <strong>Fundraising con Rigor Financiero</strong>.
          </p>

          <p className="text-lg leading-relaxed">
            Trabajo con fundaciones, ONG y proyectos de cooperación en Latinoamérica que
            necesitan profesionalizar su captación, retener mejor a sus donantes y construir
            un modelo que aguante en el tiempo.
          </p>

          <p className="text-lg leading-relaxed">
            ¿Cómo lo hago? Aplico mi formación como{" "}
            <strong>Ingeniero Financiero</strong> al fundraising: diagnóstico financiero del
            área, estrategia de captación recurrente, modelos de retención y métricas para
            decidir con datos. Nada de improvisación. Cuento con{" "}
            <strong>Maestría en Marketing</strong> (Universidad Externado de Colombia) y más
            de <strong>15 años</strong> gestionando carteras de hasta 35.000 donantes activos
            con tasas de retención del <strong>85%</strong> —el doble del promedio del sector
            nonprofit colombiano (43%).
          </p>

          <p className="text-lg leading-relaxed">
            Me llaman cuando una fundación pierde donantes y las soluciones tradicionales no
            han funcionado. O cuando el equipo de fundraising necesita orden y dirección.
          </p>

          {/* Cita destacada del Acerca de */}
          <blockquote className="border-l-4 border-[#0F3A66] pl-6 my-8">
            <p className="text-xl font-semibold text-[#0F3A66] leading-relaxed">
              "Conversemos 20 minutos y revisamos juntos dónde está la fuga.
              La primera media hora suele bastar para ver el patrón."
            </p>
          </blockquote>

          {/* Métricas como prueba social */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-gray-100">
            {[
              { value: "83.500+", label: "Donantes gestionados" },
              { value: "$5.200M", label: "COP recaudados" },
              { value: "85%", label: "Retención sostenida" },
              { value: "5 orgs", label: "Internacionales" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-[#0F3A66]">{value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{label}</div>
              </div>
            ))}
          </div>

        </div>

        {/* CTAs — conversación como acción principal (igual que LinkedIn) */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/contacto"
            className="inline-block bg-primary hover:bg-blue-800 text-white font-semibold
                       py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
          >
            Conversemos 20 minutos
          </a>
          <a
            href="https://www.linkedin.com/in/giovanisanchezv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary text-primary
                       hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-lg
                       transition-smooth duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
            Ver en LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}
