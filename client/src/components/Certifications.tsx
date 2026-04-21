import { useState } from "react";
import { Sparkles, FileText, Users } from "lucide-react";

const tabs = [
  { id: "ia", label: "IA y Analítica", icon: <Sparkles size={15} /> },
  { id: "contratacion", label: "Contratación y Finanzas", icon: <FileText size={15} /> },
  { id: "liderazgo", label: "Liderazgo", icon: <Users size={15} /> },
];

const certifications: Record<string, { title: string; issuer: string; date: string; featured?: boolean }[]> = {
  ia: [
    { title: "Introduction to Agent Skills", issuer: "Anthropic", date: "Abr. 2026", featured: true },
    { title: "Claude Code 101", issuer: "Anthropic", date: "Abr. 2026", featured: true },
    { title: "Claude 101", issuer: "Anthropic", date: "Abr. 2026", featured: true },
    { title: "Domina la IA con Gemini", issuer: "Google", date: "Jul. 2025" },
    { title: "Google Analytics Certification", issuer: "Google Skillshop", date: "Feb. 2026" },
    { title: "Aumentar Ventas Offline", issuer: "Google Skillshop", date: "Feb. 2026" },
    { title: "SAP ERP", issuer: "Cafam", date: "Ene. 2026" },
  ],
  contratacion: [
    { title: "Especialista SECOP II — Nivel 1", issuer: "Colombia Compra Eficiente", date: "Ene. 2026" },
    { title: "Especialista SECOP II — Nivel 2", issuer: "Colombia Compra Eficiente", date: "Ene. 2026" },
    { title: "Especialista SECOP II — Nivel 3", issuer: "Colombia Compra Eficiente", date: "Ene. 2026" },
    { title: "Especialista SECOP II — Nivel 4", issuer: "Colombia Compra Eficiente", date: "Feb. 2026" },
    { title: "Especialista SECOP II — Nivel 5", issuer: "Colombia Compra Eficiente", date: "Feb. 2026" },
    { title: "Especialista SECOP II — Nivel 6", issuer: "Colombia Compra Eficiente", date: "Feb. 2026" },
    { title: "Planeación y Gestión de Finanzas Personales", issuer: "Universidad Piloto de Colombia", date: "Feb. 2026" },
  ],
  liderazgo: [
    { title: "Alto Impacto en Procesos de Selección Alta Gerencia", issuer: "Colsubsidio / Xposible", date: "Sept. 2025" },
    { title: "Comunicación Asertiva para Líderes", issuer: "Colsubsidio / Xposible", date: "Sept. 2025" },
    { title: "Inglés Práctico Conversacional", issuer: "Colsubsidio / Xposible", date: "Ago. 2025" },
  ],
};

const academicFormation = [
  { title: "Maestría en Marketing", issuer: "Universidad Externado de Colombia", date: "2018 – 2020" },
  { title: "Ingeniería Financiera", issuer: "Universidad Piloto de Colombia", date: "2003 – 2009" },
  { title: "Diplomado Control y Gestión Presupuestal", issuer: "Universidad Nacional de Colombia", date: "2025" },
  { title: "Diplomado en Mercado de Capitales", issuer: "Universidad Piloto de Colombia", date: "2009" },
  { title: "Diplomado en NIIF", issuer: "Universidad Piloto de Colombia", date: "2011 – 2012" },
];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState("ia");

  return (
    <section id="certificaciones" className="py-20 md:py-28 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-6">

        <div className="mb-10">
          <h2 className="mb-3">Actualización 2026</h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            18 certificaciones obtenidas entre enero 2025 y abril 2026, en las áreas que el sector
            exige hoy: IA generativa, analítica digital, contratación pública y liderazgo directivo.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-smooth duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-500 hover:border-primary hover:text-primary"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cert list */}
        <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
          {certifications[activeTab].map((cert) => (
            <div
              key={cert.title}
              className={`flex items-center justify-between px-6 py-4 ${cert.featured ? "bg-blue-50/60" : ""}`}
            >
              <div className="flex items-center gap-3">
                {cert.featured && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary text-white shrink-0">
                    IA
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold text-gray-800">{cert.title}</p>
                  <p className="text-xs text-gray-400">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 shrink-0 ml-4">{cert.date}</p>
            </div>
          ))}
        </div>

        {/* Formación académica */}
        <div className="mt-14">
          <h3 className="text-lg font-bold text-gray-700 mb-6">Formación académica</h3>
          <div className="space-y-3">
            {academicFormation.map((item) => (
              <div key={item.title} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-semibold text-gray-700">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.issuer}</p>
                </div>
                <p className="text-xs text-gray-400 mt-1 sm:mt-0 shrink-0">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
