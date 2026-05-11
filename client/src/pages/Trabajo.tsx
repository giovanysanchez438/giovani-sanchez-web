import { ArrowRight } from "lucide-react";

const serif = { fontFamily: "Georgia,'Times New Roman',serif" };

const PROBLEMAS = [
  {
    num: "01",
    pregunta: "Construir retención real de donantes.",
    respuesta:
      "La mayoría de las ONG miden adquisición. Pocas miden retención con rigor. Diseño estrategias basadas en LTV y churn real — para que cada donante que llega, se quede. Mantuve tasas del 85% durante 5 años consecutivos en Save the Children Colombia, triplicando el promedio del sector (43%).",
    detalle:
      "Segmentación de cartera · Automatización CRM · Análisis de churn · Programas de fidelización basados en datos",
  },
  {
    num: "02",
    pregunta: "Estructurar el fundraising con rigor financiero.",
    respuesta:
      "Presupuestos, KPIs y modelos de proyección listos para presentar ante juntas directivas. No intuición — datos. Aplico ingeniería financiera al sector social porque es lo que realmente construye sostenibilidad institucional a largo plazo.",
    detalle:
      "Plan anual de captación · Modelos de proyección · KPIs medibles · Reporting ejecutivo para juntas",
  },
  {
    num: "03",
    pregunta: "Optimizar el CRM y encontrar el valor oculto en la cartera actual.",
    respuesta:
      "El valor más grande de una organización está en su base de donantes existente — no en los nuevos. Implemento segmentación, automatización y análisis de cartera para identificar dónde está el potencial real y cómo activarlo.",
    detalle:
      "Auditoría de cartera · Segmentación por LTV · Automatización de flujos · Reducción de abandono involuntario",
  },
  {
    num: "04",
    pregunta: "Alinear la estrategia a estándares de cooperación internacional.",
    respuesta:
      "Con experiencia directa en proyectos BID en 4 países, conozco los estándares de reporte, gobernanza y alineación estratégica que exigen los organismos multilaterales. No es solo conocimiento teórico — es lo que hice en campo.",
    detalle:
      "Estándares BID · Articulación con stakeholders multilaterales · Coherencia estratégica en múltiples países · Reporting internacional",
  },
];

export default function Trabajo() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#bbb] mb-6">Trabajo</p>
          <h1 style={serif} className="text-[2.2rem] font-normal text-[#111] leading-[1.15] tracking-[-0.02em] max-w-[560px] mb-5">
            ¿Cómo puedo ayudarte?
          </h1>
          <p className="text-[0.875rem] text-[#555] leading-[1.9] max-w-[540px]">
            No hay dos organizaciones iguales — ni dos problemas iguales. Por eso no trabajo con
            recetas genéricas.{" "}
            <strong className="text-[#111] font-medium">
              Escucho primero, entiendo tu situación específica
            </strong>
            , y diseño un acompañamiento que funcione para ti — sea una colaboración continua o un
            proyecto puntual.
          </p>
        </div>
      </section>

      {/* Problemas */}
      <section className="border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <p className="text-[0.875rem] text-[#555] leading-[1.9] mb-10 max-w-[540px]">
            Ahora mismo estoy ayudando a organizaciones a:
          </p>

          <div className="flex flex-col">
            {PROBLEMAS.map((p) => (
              <div
                key={p.num}
                className="grid lg:grid-cols-[60px_1fr] gap-6 py-10 border-b border-[#e8e6e1] last:border-b-0"
              >
                {/* Número */}
                <p className="text-[10px] text-[#ccc] tracking-wider pt-1">{p.num}</p>

                {/* Contenido */}
                <div>
                  <h2 style={serif} className="text-[1.2rem] font-normal text-[#111] leading-[1.35] mb-3">
                    {p.pregunta}
                  </h2>
                  <p className="text-[0.875rem] text-[#555] leading-[1.85] mb-4">
                    {p.respuesta}
                  </p>
                  <p className="text-[11px] text-[#aaa] leading-relaxed mb-5">
                    {p.detalle}
                  </p>
                  <a
                    href="/contacto"
                    className="inline-flex items-center gap-1.5 text-[11px] text-[#111] border-b border-[#111] pb-px hover:text-[#555] hover:border-[#555] transition-colors"
                  >
                    Hablemos sobre esto <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f4f1]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h2 style={serif} className="text-[1.3rem] font-normal text-[#111] leading-snug mb-3">
                Resuelve el problema.<br />Hablemos 30 minutos.
              </h2>
              <p className="text-[0.875rem] text-[#666] leading-[1.8] max-w-[440px]">
                Sin costo, sin compromiso. A veces con eso es suficiente para aclarar el camino —
                y si no, vemos cómo trabajar juntos.
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
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
