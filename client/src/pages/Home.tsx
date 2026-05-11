import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { ArrowRight } from "lucide-react";

const serif = { fontFamily: "Georgia,'Times New Roman',serif" };

const PROBLEMAS = [
  {
    pregunta: "Construir retención real de donantes.",
    respuesta:
      "La mayoría de las ONG miden adquisición. Pocas miden retención con rigor. Diseño estrategias basadas en LTV y churn real — para que cada donante que llega, se quede. Mantuve tasas del 85% durante 5 años consecutivos en Save the Children Colombia, triplicando el promedio del sector (43%).",
  },
  {
    pregunta: "Estructurar el fundraising con rigor financiero.",
    respuesta:
      "Presupuestos, KPIs y modelos de proyección listos para presentar ante juntas directivas. No intuición — datos. Aplico ingeniería financiera al sector social porque es lo que realmente construye sostenibilidad institucional a largo plazo.",
  },
  {
    pregunta: "Optimizar el CRM y encontrar el valor oculto en la cartera actual.",
    respuesta:
      "El valor más grande de una organización está en su base de donantes existente — no en los nuevos. Implemento segmentación, automatización y análisis de cartera para identificar dónde está el potencial real y cómo activarlo.",
  },
  {
    pregunta: "Alinear la estrategia a estándares de cooperación internacional.",
    respuesta:
      "Con experiencia directa en proyectos BID en 4 países, conozco los estándares de reporte, gobernanza y alineación estratégica que exigen los organismos multilaterales. No es solo conocimiento teórico — es lo que hice en campo.",
  },
];

const CAPACIDADES = [
  { num: "01", titulo: "Plan anual con ROI medible",             desc: "KPIs, presupuesto y reporte para juntas directivas y organismos internacionales." },
  { num: "02", titulo: "CRM & segmentación de cartera",          desc: "LTV, churn, automatización de fidelización y reducción de abandono involuntario." },
  { num: "03", titulo: "Ingeniería financiera nonprofit",         desc: "Modelos de proyección, análisis de cartera y construcción de reservas institucionales." },
  { num: "04", titulo: "Alianzas corporativas",                   desc: "Partnerships con empresas, fundaciones corporativas y cooperación multilateral." },
  { num: "05", titulo: "Captación F2F y digital integrada",       desc: "Campañas presenciales y digitales con análisis de CPA y segmentación real." },
  { num: "06", titulo: "Reporting ejecutivo",                     desc: "Resultados bajo estándares de organismos de cooperación técnica internacional." },
];

const TRAYECTORIA = [
  {
    periodo: "2024", duracion: "9 meses", iniciales: "BID", color: "#0a7bc4",
    tag: "Cooperación Internacional", tagColor: "bg-[#e8f5e9] text-[#2e7d32]",
    org: "ADA S.A. — Proyecto BID / Economía Circular",
    rol: "Especialista Senior en Marketing Estratégico",
    desc: "Lideré la estrategia integral del Marketplace de Economía Circular en 4 países en el marco del Convenio BID-Alcaldía de Bogotá. Gestioné articulación con stakeholders institucionales bajo estándares multilaterales.",
    metricas: [
      { num: "4 países", label: "Bogotá · Quito · Lima · Santiago" },
      { num: "BID", label: "Convenio cooperación técnica" },
    ],
  },
  {
    periodo: "2022–2024", duracion: "16 meses", iniciales: "PL", color: "#e8281e",
    tag: "ONG Internacional", tagColor: "bg-[#e6f1fb] text-[#1565c0]",
    org: "Fundación PLAN Colombia",
    rol: "Gerente de Marketing, Fundraising y Retención de Donantes",
    desc: "Lideré la estrategia integral de marketing y fundraising. Incrementé el portafolio de donantes activos e ingresos en un 30% mediante campañas optimizadas por segmentación de audiencias.",
    metricas: [
      { num: "+30%", label: "Donantes activos" },
      { num: "+30%", label: "Ingresos recaudados" },
    ],
  },
  {
    periodo: "2016–2021", duracion: "5 años", iniciales: "SC", color: "#e8281e",
    tag: "ONG Internacional", tagColor: "bg-[#e6f1fb] text-[#1565c0]",
    org: "Save the Children International",
    rol: "Gerente Nacional de Marketing, Fundraising & Estrategia de Crecimiento",
    desc: "Lideré durante 5 años la estrategia nacional. Mantuve una tasa de retención superior al 85% durante 5 años consecutivos — triplicando el promedio del sector (43%) — mediante estrategias de fidelización y CRM.",
    metricas: [
      { num: "+25%", label: "Crecimiento donantes" },
      { num: "85%",  label: "Retención — 3× el sector" },
      { num: "5 años", label: "Resultados sostenidos" },
    ],
  },
  {
    periodo: "2014–2016", duracion: "2 años", iniciales: "HH", color: "#00a0e0",
    tag: "ONG Internacional", tagColor: "bg-[#e6f1fb] text-[#1565c0]",
    org: "Hábitat for Humanity International",
    rol: "Coordinador Senior CRM & Gestión de Relaciones con Donantes",
    desc: "Gestioné el CRM e implementé flujos de seguimiento automatizado para donantes recurrentes, reduciendo abandono involuntario por vencimiento de medios de pago.",
    metricas: [
      { num: "+30%", label: "Crecimiento cartera" },
      { num: "CRM",  label: "Automatización implementada" },
    ],
  },
  {
    periodo: "2010–2013", duracion: "3 años", iniciales: "AI", color: "#c8002a",
    tag: "Sector Social", tagColor: "bg-[#f3e5f5] text-[#6a1b9a]",
    org: "Aldeas Infantiles SOS Colombia",
    rol: "Asesor de Gestión Financiera y Desarrollo de Fondos",
    desc: "Gestioné el área financiera y de desarrollo de fondos. Coordiné indicadores de seguimiento de la cartera de donantes. Reconocido como pieza fundamental del equipo de Desarrollo de Fondos.",
    metricas: [
      { num: "+15%", label: "Crecimiento cartera" },
      { num: "Ref.", label: "Juan Cruz Mones — UNICEF" },
    ],
  },
];

const ARTICULOS = [
  {
    tag: "Retención",
    titulo: 'La trampa de la "Primera Donación": por qué celebrar nuevos donantes quiebra las proyecciones financieras',
    fecha: "Abr 2026", mins: "3 min",
    url: "https://www.linkedin.com/in/giovanisanchezv",
  },
  {
    tag: "Segmentación",
    titulo: "Tratar a todos los donantes igual le está costando donantes a tu organización",
    fecha: "Abr 2026", mins: "2 min",
    url: "https://www.linkedin.com/in/giovanisanchezv",
  },
  {
    tag: "FinTech & ONG",
    titulo: "Filantropía digital en Colombia: automatización de donaciones con IA y FinTech",
    fecha: "Abr 2026", mins: "3 min",
    url: "https://www.linkedin.com/in/giovanisanchezv",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* 1 — HERO */}
      <Hero />

      {/* 2 — QUIÉN SOY */}
      <section className="bg-white border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[200px_1fr] gap-14 items-start">
            <img
              src="/giovani.png"
              alt="Giovani Sánchez Vargas"
              className="w-full rounded-[3px] object-cover"
              style={{ maxHeight: "260px", objectFit: "cover", objectPosition: "center top" }}
            />
            <div>
              <p className="text-[10px] tracking-[0.12em] uppercase text-[#bbb] mb-4">Quién soy</p>
              <p className="text-[0.875rem] text-[#555] leading-[1.9] mb-4">
                Con más de 15 años en el sector social de América Latina, he trabajado con organizaciones
                que operan bajo los estándares más exigentes de la cooperación internacional — desde{" "}
                <strong className="text-[#111] font-medium">Save the Children hasta el BID</strong>.
                En ese camino he gestionado más de{" "}
                <strong className="text-[#111] font-medium">83.500 donantes</strong>, recaudado más de{" "}
                <strong className="text-[#111] font-medium">$5.200 millones de pesos</strong>, y mantenido
                tasas de retención que triplican el promedio del sector.
              </p>
              <p className="text-[0.875rem] text-[#555] leading-[1.9] mb-4">
                En ese camino he visto los mismos errores repetirse una y otra vez — organizaciones que
                invierten en captar donantes sin medir retención, que toman decisiones de millones basadas
                en intuición, que confunden actividad con resultados.{" "}
                <strong className="text-[#111] font-medium">
                  Aquí comparto lo que aprendí — para que tu organización no repita los mismos pasos.
                </strong>
              </p>
              <p className="text-[0.875rem] text-[#555] leading-[1.9] mb-5">
                Trabajo en la intersección entre dos mundos que casi nunca se cruzan:{" "}
                <strong className="text-[#111] font-medium">
                  la estrategia de captación y la ingeniería financiera
                </strong>
                . Esa combinación me permite diseñar programas de fundraising con ROI medible — no solo
                campañas, sino estructuras financieras que construyen sostenibilidad real.
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center gap-1.5 text-[12px] text-[#111] border-b border-[#111] pb-px hover:text-[#555] hover:border-[#555] transition-colors"
              >
                Hablemos para ver cómo trabajar juntos <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — CÓMO PUEDO AYUDARTE */}
      <section className="bg-[#f9f8f6] border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <h2 style={serif} className="text-[1.3rem] font-normal text-[#111] tracking-tight mb-3">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-[0.875rem] text-[#555] leading-[1.9] mb-8 max-w-[580px]">
            No hay dos organizaciones iguales — ni dos problemas iguales. Por eso no trabajo con
            recetas genéricas.{" "}
            <strong className="text-[#111] font-medium">
              Escucho primero, entiendo tu situación específica
            </strong>
            , y diseño un acompañamiento que funcione para ti — sea una colaboración continua o un
            proyecto puntual. Ahora mismo estoy ayudando a organizaciones a:
          </p>
          <div className="flex flex-col">
            {PROBLEMAS.map((p, i) => (
              <div
                key={i}
                className="grid lg:grid-cols-[1fr_auto] gap-8 items-start py-6 border-b border-[#e8e6e1] last:border-b-0"
              >
                <div>
                  <p style={serif} className="text-[1rem] text-[#111] leading-[1.4] mb-2.5 font-normal">
                    {p.pregunta}
                  </p>
                  <p className="text-[0.8125rem] text-[#666] leading-[1.8]">{p.respuesta}</p>
                </div>
                <a
                  href="/trabajo"
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#111] border-b border-[#111] pb-px whitespace-nowrap hover:text-[#555] hover:border-[#555] transition-colors mt-1"
                >
                  Cómo lo resuelvo <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/contacto"
              className="inline-flex items-center gap-1.5 bg-[#111] text-white text-[11px] font-medium px-5 py-2.5 rounded-[2px] hover:bg-[#333] transition-colors"
            >
              Resuelve el problema. Hablemos. <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 4 — TRAYECTORIA */}
      <section className="bg-[#f5f4f1] border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between border-b border-[#111] pb-4 mb-0">
            <h2 style={serif} className="text-[1.1rem] font-normal text-[#111]">Trayectoria profesional</h2>
            <span className="text-[10px] text-[#bbb] uppercase tracking-wider">+15 años · sector social LATAM</span>
          </div>
          <div className="flex flex-col">
            {TRAYECTORIA.map((t) => (
              <div key={t.org} className="grid grid-cols-[120px_1fr] border-b border-[#e8e6e1] last:border-b-0">
                <div className="py-6 pr-5 border-r border-[#e8e6e1]">
                  <p className="text-[11px] text-[#111] font-medium">{t.periodo}</p>
                  <p className="text-[10px] text-[#bbb] mt-0.5">{t.duracion}</p>
                  <div
                    className="w-7 h-7 rounded-[3px] flex items-center justify-center mt-3 text-[9px] font-bold text-white"
                    style={{ background: t.color }}
                  >
                    {t.iniciales}
                  </div>
                </div>
                <div className="py-6 pl-5">
                  <span className={`inline-block text-[9px] px-2 py-0.5 rounded-full font-medium tracking-wide mb-2.5 ${t.tagColor}`}>
                    {t.tag}
                  </span>
                  <p className="text-[13px] font-medium text-[#111] mb-0.5">{t.org}</p>
                  <p className="text-[10px] text-[#888] uppercase tracking-wider mb-2.5">{t.rol}</p>
                  <p className="text-[12px] text-[#555] leading-[1.75] mb-3">{t.desc}</p>
                  <div className="flex gap-3 flex-wrap">
                    {t.metricas.map((m) => (
                      <div key={m.label} className="bg-white rounded-[3px] px-2.5 py-1.5">
                        <p style={serif} className="text-[0.9rem] text-[#111] leading-none">{m.num}</p>
                        <p className="text-[9px] text-[#aaa] uppercase tracking-wide mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — CAPACIDADES */}
      <section className="bg-white border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between border-b border-[#111] pb-4 mb-8">
            <h2 style={serif} className="text-[1.1rem] font-normal text-[#111]">Capacidades clave</h2>
            <span className="text-[10px] text-[#bbb] uppercase tracking-wider">+15 años · sector social</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {CAPACIDADES.map((c) => (
              <div key={c.num} className="border-t border-[#ddd] pt-3.5">
                <p className="text-[10px] text-[#ddd] tracking-wider mb-1.5">{c.num}</p>
                <p className="text-[12.5px] font-medium text-[#111] leading-snug mb-1.5">{c.titulo}</p>
                <p className="text-[11.5px] text-[#999] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — LIBRO ONG */}
      <section className="bg-[#f9f8f6] border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_260px] gap-12 items-center">
            <div>
              <p className="text-[10px] tracking-[0.12em] uppercase text-[#bbb] mb-3">Recurso gratuito</p>
              <h2 style={serif} className="text-[1.3rem] font-normal text-[#111] leading-snug mb-4">
                El Arte de Captar Fondos para ONG
              </h2>
              <p className="text-[0.875rem] text-[#555] leading-[1.9] mb-5">
                Un libro interactivo de 6 capítulos sobre estrategia de captación, retención y
                sostenibilidad financiera para organizaciones del sector social. Creado para directores
                de ONG que quieren tomar decisiones basadas en datos — no en tendencias.
              </p>
              <a
                href="/libro-ong"
                className="inline-flex items-center gap-1.5 text-[12px] text-[#111] border-b border-[#111] pb-px hover:text-[#555] hover:border-[#555] transition-colors"
              >
                Leer el libro <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div>
              <div className="bg-[#0a2540] rounded-[4px] p-6 text-center mb-3">
                <p className="text-[9px] text-white/40 uppercase tracking-widest mb-2">Libro interactivo</p>
                <p style={serif} className="text-[0.9rem] text-white leading-snug">
                  El Arte de Captar Fondos para ONG
                </p>
                <p className="text-[9px] text-white/30 mt-2">Giovani Sánchez Vargas</p>
              </div>
              {[
                "Fundamentos del fundraising sostenible",
                "Retención y valor de vida del donante",
                "Segmentación y CRM aplicado",
                "Métricas financieras para ONG",
                "Captación digital y F2F integrada",
                "Sostenibilidad y reservas institucionales",
              ].map((cap) => (
                <div key={cap} className="flex items-center gap-2 text-[11px] text-[#888] py-1.5 border-b border-[#f0ede8] last:border-b-0">
                  <div className="w-1 h-1 rounded-full bg-[#ccc] flex-shrink-0" />
                  {cap}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — ARTÍCULOS */}
      <section className="bg-white border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between border-b border-[#111] pb-4 mb-0">
            <h2 style={serif} className="text-[1.1rem] font-normal text-[#111]">Perspectivas & artículos</h2>
            <a
              href="https://www.linkedin.com/in/giovanisanchezv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-[#aaa] uppercase tracking-wider hover:text-[#111] transition-colors flex items-center gap-1"
            >
              Ver todos <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <div className="grid lg:grid-cols-3 divide-x divide-[#e8e6e1]">
            {ARTICULOS.map((a) => (
              <a
                key={a.titulo}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group pt-6 pb-2 px-5 first:pl-0 last:pr-0 hover:bg-[#fafaf8] transition-colors"
              >
                <span className="text-[9px] uppercase text-[#ccc] tracking-wider block mb-2">{a.tag}</span>
                <p className="text-[12.5px] font-medium text-[#111] leading-snug mb-2.5 group-hover:text-[#333]">
                  {a.titulo}
                </p>
                <p className="text-[10px] text-[#ccc] uppercase tracking-wider">
                  {a.fecha} · {a.mins} de lectura
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — CTA FINAL */}
      <section className="bg-[#f5f4f1] border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h2 style={serif} className="text-[1.4rem] font-normal text-[#111] leading-snug mb-3">
                Resuelve el problema.<br />Hablemos 30 minutos.
              </h2>
              <p className="text-[0.875rem] text-[#666] leading-[1.8] max-w-[460px]">
                Sin costo, sin compromiso. A veces con eso es suficiente para aclarar el camino —
                y si no, vemos cómo trabajar juntos para diseñar un fundraising del que tanto tú
                como tus donantes puedan estar orgullosos.
              </p>
              <p className="text-[11px] text-[#bbb] italic mt-3">
                También disponible para empleo formal en ONG internacional, fundación corporativa
                u organismo multilateral.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-1.5 bg-[#111] text-white text-[11px] font-medium px-6 py-2.5 rounded-[2px] hover:bg-[#333] transition-colors whitespace-nowrap"
              >
                Hablemos hoy <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/giovani-sanchez-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-white text-[#111] text-[11px] font-medium px-6 py-2.5 rounded-[2px] border border-[#ccc] hover:border-[#111] transition-colors whitespace-nowrap"
              >
                Descargar CV
              </a>
              <a
                href="https://www.linkedin.com/in/giovanisanchezv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-white text-[#111] text-[11px] font-medium px-6 py-2.5 rounded-[2px] border border-[#ccc] hover:border-[#111] transition-colors whitespace-nowrap"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — CONTACTO */}
      <section id="contacto">
        <Contact />
      </section>

    </main>
  );
}
