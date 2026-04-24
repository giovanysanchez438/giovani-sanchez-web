import { TrendingUp, Users, Building2, Globe, PieChart, Sparkles } from "lucide-react";

const areas = [
  {
    id: "fundraising",
    icon: <TrendingUp className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    title: "Fundraising Estratégico y Captación Digital",
    description:
      "Diseño e implementación de estrategias de captación con ROI medible. Canales digitales, presencial y corporativo.",
  },
  {
    id: "crm",
    icon: <Users className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    title: "Gestión CRM, Retención y LTV de Donantes",
    description:
      "Administración de carteras de hasta 35.000 donantes con retención y valor de vida (LTV) sostenidos por encima del 85%.",
  },
  {
    id: "alianzas",
    icon: <Building2 className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    title: "Alianzas Corporativas y RSE",
    description:
      "Desarrollo de alianzas con empresas del sector privado para financiamiento y corresponsabilidad social.",
  },
  {
    id: "cooperacion",
    icon: <Globe className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    title: "Cooperación Internacional y Proyectos Multilaterales",
    description:
      "Experiencia directa con BID, Banco Mundial y USAID en proyectos ejecutados en 4 países de América Latina.",
  },
  {
    id: "finanzas",
    icon: <PieChart className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    title: "Planeación Financiera y Gestión Presupuestal",
    description:
      "Modelación financiera, presupuestación y control de ejecución con rigor de Ingeniería Financiera.",
  },
  {
    id: "ia",
    icon: <Sparkles className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    title: "IA Aplicada a Marketing",
    description:
      "Uso de Claude (Anthropic), Google Gemini y Google Analytics en campañas, analítica y toma de decisiones.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="container max-w-5xl mx-auto px-6">

        <div className="mb-14">
          <h2 className="mb-3">Áreas de expertise</h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Competencias desarrolladas en 15 años de gestión en el sector social y la cooperación internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.id}
              className="border border-gray-200 rounded-lg p-6 card-shadow hover:shadow-md transition-smooth hover:border-primary"
            >
              <div className="mb-4 p-2.5 bg-blue-50 rounded-lg w-fit">
                {area.icon}
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2 leading-snug">
                {area.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
