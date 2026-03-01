/**
 * About Section Component
 *
 * Diseño: Minimalismo Corporativo Elegante
 * - Fondo blanco, letras oscuras
 * - Mismo estilo que HomeIntro
 */
export default function About() {
  const stats = [
    { value: "15+", label: "Años de experiencia" },
    { value: "4", label: "Países — Proyecto BID" },
    { value: "$2.000M+", label: "Presupuestos gestionados" },
    { value: "4", label: "ONGs internacionales" },
  ];

  const pillars = [
    "Ingeniería Financiera",
    "Maestría en Mercadeo",
    "Sector Social Internacional",
    "Fintech & BID",
    "SAP · Power BI · CRM",
    "SECOP II",
  ];

  return (
    <section id="perfil" className="py-16 md:py-24 bg-white">
      <div className="container max-w-4xl mx-auto px-4">

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Sobre mí
        </h2>

        {/* Descripción principal */}
        <div className="space-y-5 text-gray-700 mb-10">
          <p className="text-lg leading-relaxed">
            Soy <span className="font-semibold text-primary">Giovani Sánchez V.</span>,{" "}
            <span className="font-semibold text-gray-800">Ingeniero Financiero con Maestría en Mercadeo</span>,
            con más de <span className="font-semibold text-gray-800">15 años</span> liderando estrategias
            comerciales, financieras y de marketing en organizaciones de alto impacto:{" "}
            <span className="font-semibold text-gray-800">Save the Children International, Habitat for Humanity,
            Fundación PLAN, Aldeas Infantiles y Grupo Aval.</span>
          </p>

          <p className="text-lg leading-relaxed">
            Lideré el desarrollo de la{" "}
            <span className="font-semibold text-gray-800">Plataforma Regional de Economía Circular</span>{" "}
            financiada por el BID y la Alcaldía de Bogotá — con alcance en Colombia, Ecuador, Perú y Chile —
            logrando 58 empresas activas en su primera fase.
          </p>

              <p className="text-lg leading-relaxed">
            Mi enfoque es simple:{" "}
            <span className="font-semibold text-gray-800">análisis riguroso + visión estratégica + ejecución real.</span>{" "}
            Sin fórmulas genéricas — solo soluciones que generan{" "}
            <span className="font-semibold text-gray-800">crecimiento sostenible</span>.
          </p>
        </div>

        {/* Pills de especialidades */}
        <div className="flex flex-wrap gap-2 mb-10">
          {pillars.map((p) => (
            <span
              key={p}
              className="text-sm font-medium px-4 py-1.5 rounded-full"
              style={{
                background: '#f4f7fd',
                color: '#0d1b3e',
                border: '1px solid rgba(74,127,212,0.2)'
              }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 rounded-xl p-6"
          style={{ background: '#f4f7fd', border: '1px solid rgba(74,127,212,0.15)' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold mb-1"
                style={{ fontFamily: "Playfair Display, serif", color: '#0d1b3e' }}>
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="/servicios"
            className="inline-block bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
          >
            Conoce mis servicios
          </a>
          <a
            href="https://www.linkedin.com/in/giovani-sanchez/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200"
          >
            Ver LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}
