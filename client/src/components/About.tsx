/**
 * About Section Component
 *
 * Diseño: Minimalismo Corporativo Elegante
 * - Fondo con imagen + overlay
 * - Stats con métricas reales
 * - Contenido concreto y diferenciador
 */
export default function About() {
  const aboutImageUrl =
    "https://private-us-east-1.manuscdn.com/sessionFile/I1g2OKY8Wx2Uola4rJYRpN/sandbox/lp4B5j2xAjFcvn06pm0C0a-img-3_1772125284000_na1fn_YWJvdXQtc2VjdGlvbi1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSTFnMk9LWThXeDJVb2xhNHJKWVJwTi9zYW5kYm94L2xwNEI1ajJ4QWpGY3ZuMDZwbTBDMGEtaW1nLTNfMTc3MjEyNTI4NDAwMF9uYTFmbl9ZV0p2ZFhRdGMyVmpkR2x2YmkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Abx01EJOUxnVKA5vZCiqE9JSSJHjWzght~BSbsY8nBPdtaA-Wn89SzbU41cY3R-QyVPRhGeRga2ppqDgU3C1Zo8QP8TsgcmDNMmye7VJUK15A40LfzeGs3--7jaSsFJHJxlSHrarX6HXa686f-8~SD7ZvHQBs6J64Cw3Pm3linNNGUesL58W0M-zwVp90F82z45JvXUIKKU15FtUrskYhcXrctpAjBR~N11XRinUSmzjMVdRsgNJ23k1Jvty~MxiMAeGPd0glFoE9YVWns8uZ8i4q3L1g53SgAg4Uc31BX2tHVzHrjKAkimOfr4JR4kbkAgD6DGxYl8eWQ8iaSXVdQ__";

  const stats = [
    { value: "10+", label: "Años de experiencia" },
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
    <section
      id="perfil"
      className="relative py-20 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url('${aboutImageUrl}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container">
        <div className="max-w-4xl">

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Sobre mí
          </h2>

          {/* Descripción principal */}
          <div className="space-y-5 text-gray-100 mb-10">
            <p className="text-lg leading-relaxed">
              Soy <strong className="text-white">Ingeniero Financiero con Maestría en Mercadeo</strong>, con más de 10 años liderando estrategias comerciales, financieras y de marketing en organizaciones de alto impacto: <strong className="text-white">Save the Children International, Habitat for Humanity, Fundación PLAN, Aldeas Infantiles y Grupo Aval.</strong>
            </p>
            <p className="text-lg leading-relaxed">
              Lideré el desarrollo de la <strong className="text-white">Plataforma Regional de Economía Circular</strong> financiada por el BID y la Alcaldía de Bogotá — con alcance en Colombia, Ecuador, Perú y Chile — logrando 58 empresas activas en su primera fase.
            </p>
            <p className="text-lg leading-relaxed italic font-semibold text-yellow-200">
              "Muchos marketers no saben de números. Muchos financieros no saben de mercado. Yo domino ambos mundos."
            </p>
            <p className="text-lg leading-relaxed">
              Mi enfoque es simple: <strong className="text-white">análisis riguroso + visión estratégica + ejecución real.</strong> Sin fórmulas genéricas — solo soluciones que generan crecimiento sostenible.
            </p>
          </div>

          {/* Pills de especialidades */}
          <div className="flex flex-wrap gap-2 mb-10">
            {pillars.map((p) => (
              <span
                key={p}
                className="bg-white/15 border border-white/30 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}>
                  {stat.value}
                </p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/servicios"
              className="inline-block bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
            >
              Conoce mis servicios
            </a>
            <a
              href="https://www.linkedin.com/in/giovani-sanchez/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200"
            >
              Ver LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
