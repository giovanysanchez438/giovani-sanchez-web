import { MapPin, Calendar } from "lucide-react";

/**
 * Experience Section Component
 *
 * Diseño: Minimalismo Corporativo Elegante
 * - Timeline vertical
 * - Achievements visibles por tarjeta
 * - Períodos y ubicación claros
 */

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "ada",
    title: "Profesional en Marketing",
    company: "ADA S.A.",
  
    location: "Bogotá",
    description:
      "Desarrollo y lanzamiento de la Plataforma Regional de Economía Circular, marketplace 100% digital financiado por el BID y la Alcaldía de Bogotá.",
    achievements: [
      "98 usuarios registrados y 58 empresas activas en primera fase de lanzamiento",
      "Estrategia de marketing y posicionamiento en 4 países: Colombia, Ecuador, Perú y Chile",
      "Articulación con Secretaría Distrital de Ambiente y equipos técnicos del BID",
      "Coordinación interdisciplinaria con equipos de tecnología, operaciones y comunicación",
    ],
  },
  {
    id: "plan",
    title: "Gerente de Mercadeo",
    company: "Fundación PLAN",
    period: "2022 – 2024",
    location: "Bogotá",
    description:
      "Dirección del área de mercadeo con enfoque en estrategia comercial, fundraising corporativo y campañas omnicanal.",
    achievements: [
      "Liderazgo de estrategia de fundraising corporativo con empresas del sector privado",
      "Diseño e implementación de campañas omnicanal basadas en insights de mercado",
      "Coordinación con operaciones, finanzas y stakeholders internacionales",
      "Gestión de relaciones con cooperantes, aliados institucionales y medios",
    ],
  },
  {
    id: "stc",
    title: "Gerente Nacional de Mercadeo y Fundraising",
    company: "Save the Children International",
    period: "2016 – 2021",
    location: "Bogotá",
    description:
      "Dirección de la estrategia de mercadeo y fundraising a nivel nacional con alcance y reporte internacional.",
    achievements: [
      "Liderazgo de equipos de hasta 15 personas: coordinadores regionales y ejecutivos comerciales",
      "Gestión de presupuesto anual superior a COP $2.000M",
      "Coordinación con sede regional (Panamá) y sede global (Reino Unido)",
      "Participación en Congresos Internacionales de Fundraising: Colombia (2016), Argentina (2016), India (2017)",
      "Elaboración de informes ejecutivos y propuestas estratégicas para dirección global",
    ],
  },
  {
    id: "habitat",
    title: "Coordinador CRM",
    company: "Habitat for Humanity International",
    period: "2014 – 2016",
    location: "Bogotá",
    description:
      "Administración de plataforma CRM, gestión de bases de datos de donantes y estrategias de retención de clientes corporativos.",
    achievements: [
      "Administración de plataforma CRM y garantía de calidad de datos",
      "Diseño e implementación de estrategias de retención y up-selling corporativo",
      "Elaboración de informes de gestión comercial con KPIs de desempeño",
      "Coordinación con equipos de programas para alineación de estrategias",
    ],
  },
  {
    id: "aval",
    title: "Analista Senior de Planeación Financiera",
    company: "Grupo Aval",
    period: "2013 – 2014",
    location: "Bogotá",
    description:
      "Modelación financiera y análisis presupuestal para la dirección ejecutiva del grupo bancario más grande de Colombia.",
    achievements: [
      "Elaboración de modelos de planeación financiera y presupuestos corporativos en Excel avanzado",
      "Consolidación de indicadores financieros para reportes a comités directivos",
      "Análisis de rentabilidad por línea de negocio y modelación de escenarios",
      "Manejo de SAP para verificación, ajuste y consolidación de datos financieros",
    ],
  },
  {
    id: "aldeas",
    title: "Asesor Financiero",
    company: "Aldeas Infantiles SOS Colombia",
    period: "2010 – 2013",
    location: "Bogotá",
    description:
      "Asesoría financiera y comercial a clientes institucionales y corporativos en el sector social.",
    achievements: [
      "Gestión de relaciones y desarrollo de cartera de donantes corporativos",
      "Apoyo en estrategias de fundraising y captación de fondos institucionales",
      "Elaboración de análisis financieros y reportes de gestión para la dirección",
    ],
  },
  {
    id: "agropar",
    title: "Director de Operaciones – Mesa de Dinero",
    company: "AGROPAR S.A.",
    period: "2008 – 2009",
    location: "Bogotá",
    description:
      "Dirección de operaciones financieras de la mesa de dinero en entorno B2B del sector financiero.",
    achievements: [
      "Gestión de instrumentos del mercado de capitales y control de posiciones",
      "Elaboración de reportes financieros diarios para la alta dirección",
      "Seguimiento de indicadores de desempeño y análisis de riesgo operacional",
    ],
  },
  {
    id: "bancacajasocial",
    title: "Auxiliar de Operaciones",
    company: "Banco Caja Social",
    period: "2008",
    location: "Bogotá",
    description:
      "Gestión operativa y administrativa en entidad bancaria del sector financiero colombiano.",
    achievements: [
      "Apoyo en operaciones bancarias y procesos administrativos del área",
      "Manejo de información financiera con alto sentido ético y confidencialidad",
      "Atención a clientes y soporte en procesos de tesorería y caja",
    ],
  },
  {
    id: "labinco",
    title: "Asistente de Tesorería",
    company: "Labinco SA",
    period: "2004 – 2006",
    location: "Bogotá",
    description:
      "Gestión de tesorería y administración financiera en empresa del sector industrial.",
    achievements: [
      "Apoyo en administración de flujos de caja y operaciones de tesorería",
      "Manejo de información contable y financiera con rigor y confidencialidad",
      "Soporte en elaboración de reportes financieros y conciliaciones bancarias",
    ],
  },
  {
    id: "challenger",
    title: "Auxiliar Líder Área Comercial",
    company: "CHALLENGER",
    period: "2001 – 2003",
    location: "Bogotá",
    description:
      "Liderazgo del equipo comercial en puntos de venta especializados del canal moderno colombiano.",
    achievements: [
      "Gestión comercial en puntos de venta Alkosto y Homecenter",
      "Liderazgo de equipo de ventas en PDV: cumplimiento de metas y visibilidad de marca",
      "Primer acercamiento al sector retail y canal moderno en Colombia",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 md:py-32 bg-gray-50">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Experiencia Profesional
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Más de 20 años de trayectoria en estrategia comercial, marketing, finanzas y liderazgo en organizaciones de alto impacto
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex gap-6">

              {/* Timeline indicator */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md mt-1.5 shrink-0" />
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 bg-blue-200 flex-1 mt-2" />
                )}
              </div>

              {/* Card */}
              <div className="bg-white rounded-lg p-6 card-shadow hover:shadow-lg transition-smooth w-full mb-2">

                {/* Header */}
                <div className="mb-3">
                  <h3
                    className="text-xl font-bold text-primary mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-base font-semibold text-gray-800 mb-2">{exp.company}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-primary" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div
              className="text-4xl font-bold text-primary mb-2"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              20+
            </div>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <div
              className="text-4xl font-bold text-primary mb-2"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              10
            </div>
            <p className="text-gray-600">Organizaciones de Alto Impacto</p>
          </div>
          <div className="text-center">
            <div
              className="text-4xl font-bold text-primary mb-2"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              COP $2B+
            </div>
            <p className="text-gray-600">Presupuestos Gestionados</p>
          </div>
        </div>

      </div>
    </section>
  );
}
