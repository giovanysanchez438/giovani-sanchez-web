import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface BluechipRole {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  metrics: string[];
  achievements: string[];
}

interface HistoricalRole {
  title: string;
  company: string;
  period: string;
}

const bluechipRoles: BluechipRole[] = [
  {
    id: "ada",
    title: "Especialista Senior en Marketing Estratégico",
    company: "ADA S.A.",
    type: "Cooperación Internacional · Proyecto BID",
    period: "Ene. 2024 – Sept. 2024",
    metrics: ["4 ciudades", "BID / Economía Circular", "Colombia · Ecuador · Perú · Chile"],
    achievements: [
      "Único responsable de marketing del Marketplace de Economía Circular del BID durante toda la duración del proyecto.",
      "Lanzamiento con 98 usuarios registrados y 58 empresas activas en primera fase.",
      "Articulación directa con Secretaría Distrital de Ambiente, Alcaldía de Bogotá y equipos técnicos del BID.",
      "Estrategia de posicionamiento ejecutada simultáneamente en Bogotá, Quito, Lima y Santiago de Chile.",
    ],
  },
  {
    id: "plan",
    title: "Gerente de Marketing, Fundraising y Retención de Donantes",
    company: "Fundación PLAN",
    type: "ONG Internacional",
    period: "Oct. 2022 – Ene. 2024",
    metrics: ["15.000 donantes", "COP $1.500M/año", "Retención >85%", "+30% portafolio"],
    achievements: [
      "Gestión de portafolio de 15.000 donantes activos con recaudación de COP $1.500M anuales.",
      "Retención de donantes superior al 85%, más del doble del promedio del sector nonprofit colombiano (43%).",
      "Crecimiento del portafolio de donantes en un 30% durante el período.",
      "Diseño e implementación de campañas omnicanal de captación y retención basadas en insights de CRM.",
    ],
  },
  {
    id: "stc",
    title: "Gerente Nacional de Marketing, Fundraising & Estrategia de Crecimiento de Ingresos",
    company: "Save the Children International",
    type: "ONG Internacional",
    period: "Jul. 2016 – Ago. 2021",
    metrics: ["35.000 donantes", "COP $1.800M/año", "Retención >85%", "+25% portafolio"],
    achievements: [
      "Gestión de portafolio de 35.000 donantes activos con recaudación de COP $1.800M anuales.",
      "Retención >85% sostenida durante 5 años consecutivos con equipos de hasta 15 personas.",
      "Crecimiento del portafolio en un 25% mediante estrategias de captación digital y presencial.",
      "Representación de Colombia en Fundraising Forum India (2017) y congresos AEDROS y AFCOL (2016).",
    ],
  },
  {
    id: "habitat",
    title: "Coordinador Senior CRM & Gestión de Relaciones con Donantes",
    company: "Habitat for Humanity International",
    type: "ONG Internacional",
    period: "May. 2014 – Jul. 2016",
    metrics: ["5.000 donantes", "COP $900M/año", "Retención >85%", "+30% portafolio"],
    achievements: [
      "Gestión de portafolio de 5.000 donantes activos con recaudación de COP $900M anuales.",
      "Retención >85% sostenida mediante estrategias de CRM y up-selling corporativo.",
      "Crecimiento del portafolio en un 30% en dos años de gestión.",
      "Administración de plataforma CRM con garantía de calidad de datos y KPIs de desempeño.",
    ],
  },
  {
    id: "aldeas",
    title: "Asesor de Gestión Financiera y Desarrollo de Fondos",
    company: "Aldeas Infantiles SOS Colombia",
    type: "ONG Internacional",
    period: "Mar. 2010 – Mar. 2013",
    metrics: ["25.000 donantes", "COP $1.100M/año", "Retención >85%", "+15% portafolio"],
    achievements: [
      "Gestión de portafolio de 25.000 donantes activos con recaudación de COP $1.100M anuales.",
      "Retención >85% mediante estrategias de desarrollo de fondos institucionales.",
      "Crecimiento del portafolio en un 15% a través de alianzas corporativas y captación individual.",
      "Elaboración de análisis financieros y reportes de gestión para dirección nacional.",
    ],
  },
];

const historicalRoles: HistoricalRole[] = [
  { title: "Analista Senior de Planeación Financiera", company: "Grupo Aval", period: "Oct. 2013 – Mar. 2014" },
  { title: "Director de Operaciones – Mesa de Dinero", company: "AGROPAR S.A.", period: "Nov. 2008 – Abr. 2009" },
  { title: "Auxiliar de Operaciones", company: "Banco Caja Social", period: "Feb. 2008 – Ago. 2008" },
  { title: "Asistente de Tesorería", company: "Labinco S.A.", period: "Ago. 2004 – Oct. 2006" },
  { title: "Auxiliar Líder Área Comercial", company: "Challenger", period: "Mar. 2001 – Dic. 2003" },
];

export default function Experience() {
  const [showHistorical, setShowHistorical] = useState(false);

  return (
    <section id="experiencia" className="py-20 md:py-32 bg-gray-50">
      <div className="container max-w-3xl mx-auto px-6">

        <div className="mb-14">
          <h2 className="mb-3">Experiencia Profesional</h2>
          <p className="text-lg text-gray-500">
            15 años liderando marketing y fundraising en el sector social y la cooperación internacional.
          </p>
        </div>

        {/* Timeline blue-chip */}
        <div className="space-y-8">
          {bluechipRoles.map((role, index) => (
            <div key={role.id} className="relative flex gap-6">

              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md mt-2 shrink-0" />
                {index !== bluechipRoles.length - 1 && (
                  <div className="w-0.5 bg-blue-200 flex-1 mt-2" />
                )}
              </div>

              <div className="bg-white rounded-lg p-6 card-shadow hover:shadow-lg transition-smooth w-full mb-2">

                <div className="mb-4">
                  <h3 className="text-lg font-bold text-primary mb-0.5">{role.title}</h3>
                  <p className="text-base font-semibold text-gray-800">{role.company}</p>
                  <p className="text-sm text-gray-400 mb-3">{role.type} · {role.period}</p>

                  {/* Badges de métricas */}
                  <div className="flex flex-wrap gap-2">
                    {role.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: "#e8f0fb", color: "#0F3A66" }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {role.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* Trayectoria financiera colapsable */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <button
            onClick={() => setShowHistorical(!showHistorical)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-smooth"
          >
            {showHistorical ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            Trayectoria financiera anterior ({historicalRoles.length} cargos)
          </button>

          {showHistorical && (
            <div className="mt-6 space-y-3">
              {historicalRoles.map((role) => (
                <div key={role.title} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{role.title}</p>
                    <p className="text-sm text-gray-500">{role.company}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 sm:mt-0 sm:text-right shrink-0">{role.period}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
