import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { ArrowRight } from "lucide-react";

/* ─── Datos ─────────────────────────────────────────────── */

const SERVICIOS = [
  {
    num: "01",
    area: "Estrategia de captación",
    pregunta:
      "¿Tu organización está midiendo el Valor de Vida del Donante o solo el costo de adquisición?",
    cuerpo:
      "Diseño estrategias de fundraising con ROI medible — planes anuales con presupuesto, KPIs y modelos de proyección listos para juntas directivas y organismos de cooperación internacional. Sin improvisación.",
    cierre: "¿Podemos empezar a construir eso para tu organización hoy?",
    bg: "bg-white",
  },
  {
    num: "02",
    area: "CRM & retención de donantes",
    pregunta:
      "¿De cada 100 donantes que conseguiste este año, cuántos volverán el siguiente?",
    cuerpo:
      "El promedio del sector es 43%. Con segmentación, automatización y fidelización basadas en datos, mantuve tasas superiores al 85% durante cinco años consecutivos en Save the Children Colombia.",
    cierre: "¿Podemos empezar a construir eso para tu organización hoy?",
    bg: "bg-[#f9f8f6]",
  },
  {
    num: "03",
    area: "Cooperación internacional",
    pregunta:
      "¿Tu organización está lista para trabajar bajo los estándares de un organismo multilateral?",
    cuerpo:
      "Con experiencia directa en proyectos BID, gestioné la articulación con stakeholders institucionales — BID, Alcaldías, Secretarías — manteniendo coherencia estratégica y los estándares de la cooperación internacional.",
    cierre: "¿Podemos empezar a construir eso para tu organización hoy?",
    bg: "bg-white",
  },
];

const CAPACIDADES = [
  { num: "01", titulo: "Plan anual con ROI medible",          desc: "KPIs, presupuesto y reporte para juntas directivas y organismos internacionales." },
  { num: "02", titulo: "CRM & segmentación de cartera",       desc: "LTV, churn, automatización de fidelización y reducción de abandono involuntario." },
  { num: "03", titulo: "Ingeniería financiera nonprofit",      desc: "Modelos de proyección, análisis de cartera y construcción de reservas institucionales." },
  { num: "04", titulo: "Alianzas corporativas de alto valor",  desc: "Partnerships con empresas, fundaciones corporativas y cooperación multilateral." },
  { num: "05", titulo: "Captación F2F y digital integrada",    desc: "Campañas presenciales y digitales por segmentación de audiencias y CPA real." },
  { num: "06", titulo: "Reporting ante juntas y multilaterales", desc: "Resultados bajo estándares BID, USAID y organismos de cooperación técnica." },
];

const ORGS = [
  { nombre: "Save the Children", periodo: "2016 – 2021 · Gerente Nacional" },
  { nombre: "Fundación PLAN",    periodo: "2022 – 2024 · Gerente Marketing" },
  { nombre: "Habitat for Humanity", periodo: "2014 – 2016 · Coord. Senior CRM" },
  { nombre: "Aldeas Infantiles SOS", periodo: "2010 – 2013 · Asesor Financiero" },
  { nombre: "BID / ADA S.A.",    periodo: "2024 · Especialista Senior" },
];

const ARTICULOS = [
  {
    tag: "Retención",
    titulo: 'La trampa de la "Primera Donación": por qué celebrar nuevos donantes quiebra las proyecciones financieras',
    fecha: "Abr 2026",
    mins: "3 min",
    url: "https://www.linkedin.com/in/giovanisanchezv",
  },
  {
    tag: "Segmentación",
    titulo: "Tratar a todos los donantes igual le está costando donantes a tu organización",
    fecha: "Abr 2026",
    mins: "2 min",
    url: "https://www.linkedin.com/in/giovanisanchezv",
  },
  {
    tag: "FinTech & ONG",
    titulo: "Filantropía digital en Colombia: automatización de donaciones con IA y FinTech",
    fecha: "Abr 2026",
    mins: "3 min",
    url: "https://www.linkedin.com/in/giovanisanchezv",
  },
];

/* ─── Componente ─────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* 1 ── HERO */}
      <Hero />

      {/* 2 ── EDITORIAL: El diferenciador */}
      <section className="border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 section-pad">
          <div className="grid lg:grid-cols-[180px_1fr] gap-12">
            <p className="eyebrow pt-1 leading-relaxed">
              El perfil<br />diferencial
            </p>
            <div>
              <h2 className="text-[1.5rem] font-normal text-[#111] leading-snug tracking-tight mb-5">
                Muchos marketers no saben de números.<br />
                Muchos financieros no saben de mercado.
              </h2>
              <p className="text-[#666] text-[0.9375rem] leading-[1.85] max-w-[560px]">
                Giovani Sánchez Vargas es el punto de encuentro entre los dos
                mundos. Con Maestría en Marketing e Ingeniería Financiera, aplica{" "}
                <strong className="text-[#111] font-medium">
                  modelos de LTV, churn y análisis de cartera
                </strong>{" "}
                al sector social — disciplinas que la mayoría de las ONG
                simplemente no tienen en su equipo de captación. El resultado:
                estrategias que no solo generan donantes, sino que{" "}
                <strong className="text-[#111] font-medium">
                  construyen flujo de caja predecible y reservas institucionales
                  sostenibles.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── SERVICIOS ALTERNADOS */}
      {SERVICIOS.map((s, i) => (
        <section key={s.num} className={`${s.bg} border-b border-[#e8e6e1]`}>
          <div className="container mx-auto px-6 section-pad">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Texto */}
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <p className="eyebrow mb-3">
                  {s.num} / {s.area}
                </p>
                <h2 className="text-[1.35rem] font-normal text-[#111] leading-snug tracking-tight mb-4">
                  {s.pregunta}
                </h2>
                <p className="text-[#666] text-[0.9rem] leading-[1.8] mb-4">
                  {s.cuerpo}
                </p>
                <p className="text-[#999] text-[0.85rem] italic mb-5">
                  {s.cierre}
                </p>
                <a
                  href="/contacto"
                  className="inline-flex items-center gap-1.5 text-[0.75rem] text-[#111] border-b border-[#111] pb-px hover:text-[#555] hover:border-[#555] transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  Más información
                </a>
              </div>

              {/* Placeholder imagen */}
              <div
                className={`rounded-sm h-60 lg:h-72 flex items-center justify-center ${
                  i % 2 === 1 ? "lg:[direction:ltr]" : ""
                } ${
                  i === 0
                    ? "bg-[#dde4ec]"
                    : i === 1
                    ? "bg-[#e8e6e1]"
                    : "bg-[#e8e3dc]"
                }`}
              >
                <span className="text-[#bbb] text-xs uppercase tracking-widest">
                  Foto / imagen
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 4 ── CAPACIDADES */}
      <section className="bg-[#f5f4f1] border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 section-pad">
          {/* Header */}
          <div className="flex items-baseline justify-between border-b border-[#111] pb-5 mb-8">
            <h2 className="text-[1.25rem] font-normal text-[#111] tracking-tight">
              Capacidades clave
            </h2>
            <span className="eyebrow">+15 años en el sector social</span>
          </div>

          {/* Grid 3×2 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {CAPACIDADES.map((c) => (
              <div key={c.num} className="border-t border-[#d3d1c7] pt-4">
                <p className="text-[0.625rem] text-[#ccc] tracking-wider mb-2">
                  {c.num}
                </p>
                <p className="text-[0.8125rem] font-medium text-[#111] leading-snug mb-2">
                  {c.titulo}
                </p>
                <p className="text-[0.75rem] text-[#999] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── TRAYECTORIA — barra dark */}
      <section className="bg-[#111] py-8">
        <div className="container mx-auto px-6">
          <p className="eyebrow text-white/30 mb-5">Trayectoria profesional</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-white/10">
            {ORGS.map((o) => (
              <div key={o.nombre} className="px-4 first:pl-0">
                <p className="text-[0.75rem] text-white/60 font-medium leading-snug">
                  {o.nombre}
                </p>
                <p className="text-[0.625rem] text-white/25 mt-1 leading-snug">
                  {o.periodo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── ARTÍCULOS */}
      <section className="bg-white border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 section-pad">
          {/* Header */}
          <div className="flex items-baseline justify-between border-b border-[#111] pb-4 mb-0">
            <h2 className="text-[1.25rem] font-normal text-[#111] tracking-tight">
              Perspectivas & artículos
            </h2>
            <a
              href="https://www.linkedin.com/in/giovanisanchezv"
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-[#aaa] hover:text-[#111] transition-colors flex items-center gap-1"
            >
              Ver todos <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-3 divide-x divide-[#e8e6e1]">
            {ARTICULOS.map((a) => (
              <a
                key={a.titulo}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group pt-6 pb-2 pr-6 last:pr-0 first:pl-0 pl-6 hover:bg-[#fafaf8] transition-colors"
              >
                <span className="cat-tag">{a.tag}</span>
                <p className="text-[0.8125rem] font-medium text-[#111] leading-snug mb-3 group-hover:text-[#333]">
                  {a.titulo}
                </p>
                <p className="text-[0.625rem] text-[#ccc] uppercase tracking-wider">
                  {a.fecha} · {a.mins} de lectura
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7 ── CTA FINAL */}
      <section className="bg-[#f5f4f1] border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 section-pad">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h2 className="text-[1.4rem] font-normal text-[#111] leading-snug tracking-tight mb-3">
                ¿Buscas un perfil senior en fundraising<br className="hidden lg:block" />
                {" "}para tu organización?
              </h2>
              <p className="text-[#777] text-[0.875rem] leading-relaxed max-w-[460px]">
                Disponible para empleo formal en ONG internacional, fundación
                corporativa u organismo multilateral. También acepto proyectos de
                consultoría estratégica en el sector social. ¿Podemos hablar hoy?
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="/giovani-sanchez-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                Descargar CV
              </a>
              <a href="/contacto" className="btn-outline text-center justify-center">
                Escribirme
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8 ── CONTACTO (componente existente) */}
      <section id="contacto">
        <Contact />
      </section>

    </main>
  );
}
