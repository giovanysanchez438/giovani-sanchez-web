import { TrendingUp, PieChart, Briefcase, Target, MapPin, Award, ArrowRight } from "lucide-react";

/**
 * Services Section Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Grid de servicios con bullet points por servicio
 * - Caso de éxito BID destacado
 * - CTA final para agendar sesión
 */

interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  ideal: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "fundraising-ongs",
    title: "Fundraising y Sostenibilidad para ONGs",
    description:
      "Experiencia directa en BID, Save the Children, Habitat for Humanity y Fundación PLAN.",
    bullets: [
      "Estrategia de fundraising corporativo e institucional",
      "Estructuración de proyectos para cooperantes internacionales",
      "Gestión de convocatorias públicas (SECOP II)",
      "Modelos de sostenibilidad financiera para ONGs",
      "Medición de impacto social y reportes a cooperantes",
    ],
    ideal: "Fundaciones y ONGs que buscan diversificar fuentes de financiación.",
    icon: <Briefcase className="w-10 h-10 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "estrategia-comercial",
    title: "Estrategia Comercial y Marketing",
    description:
      "Decisiones de marketing respaldadas por análisis financiero real — no por intuición.",
    bullets: [
      "Plan de mercadeo alineado con objetivos comerciales",
      "Posicionamiento y diferenciación de marca",
      "Gestión de canales y Trade Marketing",
      "Campañas omnicanal y estrategias de fidelización",
      "KPIs, CRM y segmentación de clientes",
    ],
    ideal: "Empresas medianas y startups que quieren profesionalizar su área de marketing.",
    icon: <TrendingUp className="w-10 h-10 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "consultoria-financiera",
    title: "Consultoría Financiera Empresarial",
    description:
      "Números complejos convertidos en decisiones estratégicas claras y accionables.",
    bullets: [
      "Modelación financiera y proyecciones",
      "Presupuestación integral y control de ejecución",
      "Análisis de viabilidad y casos de negocio",
      "Diagnóstico financiero organizacional",
      "Asesoría en mercado de capitales e inversiones",
    ],
    ideal: "Empresas que necesitan estructurar su área financiera o evaluar proyectos de inversión.",
    icon: <PieChart className="w-10 h-10 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "mentoria-directiva",
    title: "Mentoría Directiva",
    description:
      "Acompañamiento estratégico para líderes que necesitan visión integrada de finanzas y marketing.",
    bullets: [
      "Sesiones de mentoría individual o grupal",
      "Diagnóstico de estrategia comercial y financiera",
      "Acompañamiento en toma de decisiones estratégicas",
      "Revisión y fortalecimiento del modelo de negocio",
      "Plan de acción con métricas de seguimiento",
    ],
    ideal: "Gerentes, directores y emprendedores que quieren un aliado estratégico 360°.",
    icon: <Target className="w-10 h-10 text-primary" strokeWidth={1.5} />,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-white">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Donde las finanzas y el marketing trabajan juntos para hacer crecer tu organización.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-lg p-8 card-shadow hover:shadow-lg transition-smooth hover:border-primary flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6 p-3 bg-blue-50 rounded-lg w-fit">
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-foreground mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm italic mb-4">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-6 flex-1">
                {service.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Ideal para */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  <span className="font-semibold text-gray-500">Ideal para: </span>
                  {service.ideal}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Caso de Éxito */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Award className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-1">
                Proyecto Destacado
              </p>
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Plataforma Regional de Economía Circular
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                BID + Alcaldía de Bogotá + Secretaría Distrital de Ambiente — Convenio ATN/OC-19080-RG
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold text-white">4</p>
                  <p className="text-blue-200 text-sm">países de América Latina</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">98</p>
                  <p className="text-blue-200 text-sm">usuarios registrados</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">58</p>
                  <p className="text-blue-200 text-sm">empresas activas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disponibilidad y Modalidad */}
        <div className="mt-8 bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h3
            className="text-2xl font-bold text-foreground mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Disponibilidad y Modalidad
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-primary mb-3">Modalidades de Trabajo</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> En remoto</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> En persona (Colombia)</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Híbrido</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">Áreas de Especialidad</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Sector Privado</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Sector Público</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Organizaciones Sin Ánimo de Lucro</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-8 text-center py-12 border-t border-gray-100">
          <h3
            className="text-2xl font-bold text-foreground mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            ¿Listo para dar el siguiente paso?
          </h3>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">
            Agenda una sesión exploratoria gratuita de 30 minutos. Sin compromisos — solo una conversación honesta sobre cómo puedo aportar a tu organización.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-smooth"
          >
            Agendar sesión gratuita
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
