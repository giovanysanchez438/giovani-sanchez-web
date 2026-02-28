import { TrendingUp, PieChart, Briefcase, Target } from "lucide-react";

/**
 * Services Section Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Grid de servicios
 * - Iconos claros
 * - Descripción concisa
 * - Servicios de LinkedIn integrados
 */

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "consultoría-financiera",
    title: "Consultoría Financiera",
    description:
      "Modelación financiera avanzada, planeación presupuestal, análisis de riesgos, valoración de empresas, asesoría en mercado de capitales y gestión de inversiones. Especialidad en estructuración de operaciones complejas.",
    icon: <PieChart className="w-10 h-10 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "planificación-financiera",
    title: "Planificación Financiera",
    description:
      "Diseño de estrategias financieras personalizadas, presupuestación integral, análisis de flujos de caja, gestión de riesgos financieros y optimización de recursos. Enfoque en sostenibilidad financiera.",
    icon: <TrendingUp className="w-10 h-10 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "asesoría-financiera",
    title: "Asesoría Financiera",
    description:
      "Asesoramiento ejecutivo en decisiones financieras estratégicas, análisis de oportunidades de inversión, evaluación de proyectos y recomendaciones basadas en análisis riguroso de datos.",
    icon: <Briefcase className="w-10 h-10 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "consultoría-sin-ánimo",
    title: "Consultoría Fundraising ONGs",
    description:
      "Especialidad en organizaciones del sector social. Estrategia de recaudación de fondos (fundraising), gestión de presupuestos, análisis de impacto social, desarrollo de modelos de sostenibilidad financiera.",
    icon: <Target className="w-10 h-10 text-primary" strokeWidth={1.5} />,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones profesionales basadas en más de 14 años de experiencia en finanzas, marketing estratégico y liderazgo empresarial
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-lg p-8 card-shadow hover:shadow-lg transition-smooth hover:border-primary"
            >
              {/* Icon */}
              <div className="mb-6 p-3 bg-blue-50 rounded-lg w-fit">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services Info */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-foreground mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Disponibilidad y Modalidad
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-primary mb-2">Modalidades de Trabajo</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ En remoto</li>
                <li>✓ En persona (Colombia)</li>
                <li>✓ Híbrido</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Áreas de Especialidad</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Sector Privado</li>
                <li>✓ Sector Público</li>
                <li>✓ Organizaciones Sin Ánimo de Lucro</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
