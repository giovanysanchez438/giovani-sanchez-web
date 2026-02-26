import { Briefcase, MapPin } from "lucide-react";

/**
 * Experience Section Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Timeline vertical de experiencia
 * - Tarjetas con información clara
 * - Logros destacados con iconos
 * - Responsive design
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
    period: "Enero 2024 - Septiembre 2024",
    location: "Bogotá",
    description:
      "Lideré el desarrollo y lanzamiento de la Plataforma Regional de Economía Circular (ecmarketplaceltam.com), un marketplace 100% digital financiado por el BID.",
    achievements: [
      "98 usuarios registrados y 58 empresas activas en primera fase",
      "Estrategia de marketing y posicionamiento de plataforma",
      "Articulación con Secretaría Distrital de Ambiente de Bogotá",
      "Coordinación interdisciplinaria con equipos técnicos y operacionales",
    ],
  },
  {
    id: "plan",
    title: "Gerente de Mercadeo",
    company: "Fundación PLAN",
    period: "Octubre 2022 - Enero 2024",
    location: "Bogotá",
    description:
      "Dirección ejecutiva del área de mercadeo con enfoque en estrategia comercial y fundraising corporativo.",
    achievements: [
      "Liderazgo de estrategia de fundraising corporativo con empresas del sector privado",
      "Diseño e implementación de campañas omnicanal basadas en insights de mercado",
      "Coordinación con áreas de operaciones, finanzas y stakeholders internacionales",
      "Gestión de relaciones con cooperantes, aliados institucionales y medios",
    ],
  },
  {
    id: "stc",
    title: "Gerente Nacional de Mercadeo y Fundraising",
    company: "Save the Children International",
    period: "Julio 2016 - Agosto 2021",
    location: "Bogotá",
    description:
      "Dirección de la estrategia de mercadeo y fundraising a nivel nacional con alcance internacional.",
    achievements: [
      "Liderazgo de equipos de hasta 15 personas (coordinadores regionales, ejecutivos comerciales)",
      "Gestión de presupuesto anual superior a COP $2.000M",
      "Coordinación en entornos matriciales internacionales (Panamá, Reino Unido, India, Argentina)",
      "Participación en Congresos Internacionales de Fundraising (Colombia 2016, Argentina 2016, India 2017)",
      "Elaboración de informes ejecutivos de resultados y propuestas estratégicas",
    ],
  },
  {
    id: "habitat",
    title: "Coordinador CRM Customer Relationship Management",
    company: "Habitat for Humanity International",
    period: "Mayo 2014 - Julio 2016",
    location: "Bogotá",
    description:
      "Administración de plataforma CRM y bases de datos de donantes corporativos.",
    achievements: [
      "Administración de plataforma CRM y garantía de calidad de datos",
      "Diseño e implementación de estrategias de retención y up-selling",
      "Elaboración de informes de gestión comercial con KPIs de desempeño",
      "Coordinación con equipos de programas para alineación de estrategias",
    ],
  },
  {
    id: "aval",
    title: "Analista Senior de Planeación Financiera",
    company: "Grupo Aval",
    period: "Octubre 2013 - Marzo 2014",
    location: "Bogotá",
    description:
      "Análisis y modelación financiera para la dirección ejecutiva del grupo.",
    achievements: [
      "Elaboración de modelos de planeación financiera y presupuestos corporativos",
      "Consolidación de indicadores financieros y comerciales para reportes ejecutivos",
      "Manejo de sistemas transaccionales para verificación y ajuste de datos",
      "Análisis de variaciones y escenarios financieros",
    ],
  },
  {
    id: "aldeas",
    title: "Asesor Financiero",
    company: "Aldeas Infantiles SOS Colombia",
    period: "Marzo 2010 - Marzo 2013",
    location: "Bogotá",
    description:
      "Asesoría financiera y comercial a clientes institucionales y corporativos.",
    achievements: [
      "Asesoría financiera y comercial a clientes institucionales y corporativos",
      "Gestión de relaciones y desarrollo de cartera de donantes",
      "Apoyo en estrategias de fundraising y captación de fondos",
      "Elaboración de análisis financieros y reportes de gestión",
    ],
  },
  {
    id: "profesional-finanzas",
    title: "Profesional en Finanzas",
    company: "Diversas Organizaciones",
    period: "2009 - 2010",
    location: "Bogotá",
    description:
      "Experiencia inicial en análisis financiero y gestión de recursos en organizaciones del sector.",
    achievements: [
      "Análisis de datos financieros y económicos",
      "Apoyo en procesos de auditoría interna",
      "Elaboración de reportes financieros",
      "Desarrollo de habilidades en sistemas contables",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Experiencia Profesional
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Más de 14 años de trayectoria en estrategia comercial, marketing, finanzas y liderazgo empresarial
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-12 relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 md:left-1/2 top-24 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-200 transform md:-translate-x-1/2" />
              )}

              {/* Timeline Item */}
              <div className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="hidden md:flex items-start justify-center w-1/2 relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div className="bg-white rounded-lg p-6 md:p-8 card-shadow hover:shadow-lg transition-smooth">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-primary mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-800 mb-3">{exp.company}</p>

                      {/* Meta Info */}
                      <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-primary" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
              14+
            </div>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
              7+
            </div>
            <p className="text-gray-600">Empresas Líderes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
              COP $2B+
            </div>
            <p className="text-gray-600">Presupuestos Gestionados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
