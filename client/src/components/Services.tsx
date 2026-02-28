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
    id: "Fundraising y Sostenibilidad para ONGs",
    title: "Fundraising y Sostenibilidad para ONGs",
    description:
      "Estrategia de recaudación de fondos, gestión de cooperantes internacionales, contratación pública (SECOP II) y modelos de sostenibilidad financiera. Experiencia directa en BID, Save the Children, Habitat for Humanity y Fundación PLAN.",
    icon: <PieChart className="w-10 h-10 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "Estrategia Comercial y Marketing",
    title: "Estrategia Comercial y Marketing",
    description:
      "Planes de mercadeo, posicionamiento de marca, gestión de canales, campañas omnicanal y estrategias de fidelización. Decisiones de marketing respaldadas por análisis financiero real.",
    icon: <TrendingUp className="w-10 h-10 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "Consultoría Financiera Empresarial",
    title: "Consultoría Financiera Empresarial",
    description:
      "Modelación financiera, presupuestación, análisis de viabilidad de proyectos, valoración de empresas y diagnóstico financiero. Números complejos convertidos en decisiones estratégicas claras.",
    icon: <Briefcase className="w-10 h-10 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "Mentoría Directiva",
    title: "Mentoría Directiva",
    description:
      "Acompañamiento estratégico a directivos y emprendedores que necesitan integrar visión financiera con estrategia comercial. Sesiones estructuradas enfocadas en resolver retos reales de negocio.",
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
