import { Award, Calendar, Building2, CheckCircle } from "lucide-react";

/**
 * Certifications Section Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Tarjetas de certificaciones sin imágenes
 * - Información clara y profesional
 * - Grid responsivo
 * - Iconos y badges
 */

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "certification" | "diploma" | "specialization";
}

const mainCertifications: Certification[] = [
  {
    id: "maestria",
    title: "Maestría en Mercadeo",
    issuer: "Universidad Externado de Colombia",
    date: "2018 - 2020",
    category: "diploma",
  },
  {
    id: "ingenieria-financiera",
    title: "Ingeniero Financiero",
    issuer: "Universidad Piloto de Colombia",
    date: "2003 - 2009",
    category: "diploma",
  },
  {
    id: "diplomado-presupuestal",
    title: "Diplomado Control y Gestión Presupuestal",
    issuer: "Universidad Nacional de Colombia",
    date: "2025",
    category: "diploma",
  },
  {
    id: "diplomado-contabilidad",
    title: "Diplomado Normas Internacionales de Contabilidad y Financieras",
    issuer: "Universidad Piloto de Colombia",
    date: "2011 - 2012",
    category: "diploma",
  },
];

const additionalCertifications: Certification[] = [
  {
    id: "diplomado-mercado-capitales",
    title: "Diplomado Mercado de Capitales",
    issuer: "Universidad Piloto de Colombia",
    date: "2009",
    category: "diploma",
  },
  {
    id: "secop-ii",
    title: "Especialista SECOP II - Niveles 1 al 6",
    issuer: "Colombia Compra Eficiente",
    date: "Febrero 2026",
    category: "specialization",
  },
  {
    id: "google-analytics",
    title: "Google Analytics Certification",
    issuer: "Google Skillshop",
    date: "2026",
    category: "certification",
  },
  {
    id: "sap-erp",
    title: "SAP ERP Certification",
    issuer: "Cafam",
    date: "2026",
    category: "certification",
  },
  {
    id: "marketing-ia",
    title: "Marketing Digital con énfasis en IA",
    issuer: "CUN",
    date: "2023",
    category: "certification",
  },
  {
    id: "gemini-ia",
    title: "Domina la IA con Gemini",
    issuer: "Google",
    date: "2025",
    category: "certification",
  },
  {
    id: "data-analyst",
    title: "Data Analyst: Técnicas y Herramientas de Informes",
    issuer: "LinkedIn Learning",
    date: "2021",
    category: "certification",
  },
  {
    id: "gerencia-riesgos",
    title: "Gerencia de Presupuesto y Manejo de Riesgos",
    issuer: "Save the Children International",
    date: "2017",
    category: "certification",
  },
  {
    id: "congresos-fundraising",
    title: "Congresos Internacionales de Fundraising",
    issuer: "Colombia, Argentina, India",
    date: "2016 - 2017",
    category: "specialization",
  },
];

const getCategoryBadge = (category: string) => {
  switch (category) {
    case "diploma":
      return { label: "Diploma", color: "bg-blue-100 text-blue-700" };
    case "specialization":
      return { label: "Especialización", color: "bg-purple-100 text-purple-700" };
    case "certification":
      return { label: "Certificación", color: "bg-green-100 text-green-700" };
    default:
      return { label: "Certificación", color: "bg-gray-100 text-gray-700" };
  }
};

export default function Certifications() {
  return (
    <section id="certificaciones" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Certificaciones y Formación
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Credenciales profesionales y formación continua que respaldan mi expertise en finanzas, marketing y gestión empresarial
          </p>
        </div>

        {/* Main Certifications Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8" style={{fontFamily: 'Playfair Display, serif'}}>
            Certificaciones Principales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainCertifications.map((cert) => {
              const badge = getCategoryBadge(cert.category);
              return (
                <div
                  key={cert.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 card-shadow hover:shadow-lg hover:border-primary transition-smooth duration-300"
                >
                  {/* Header with Icon and Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Award size={24} className="text-primary" />
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-foreground mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
                    {cert.title}
                  </h4>

                  {/* Issuer and Date */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building2 size={16} className="text-primary flex-shrink-0" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} className="text-primary flex-shrink-0" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Certifications */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3" style={{fontFamily: 'Playfair Display, serif'}}>
            <Award size={28} className="text-primary" />
            Otras Certificaciones y Formación
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalCertifications.map((cert) => {
              const badge = getCategoryBadge(cert.category);
              return (
                <div key={cert.id} className="flex gap-4">
                  {/* Checkmark */}
                  <div className="flex-shrink-0 pt-1">
                    <CheckCircle size={20} className="text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
              10+
            </div>
            <p className="text-gray-600">Certificaciones</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
              1
            </div>
            <p className="text-gray-600">Maestría</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
              Continua
            </div>
            <p className="text-gray-600">Formación</p>
          </div>
        </div>
      </div>
    </section>
  );
}
