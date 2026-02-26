import { CheckCircle, ArrowRight } from "lucide-react";

/**
 * Service Detail Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Descripción detallada del servicio
 * - Proceso paso a paso
 * - Beneficios clave
 * - Call-to-action
 */

interface ServiceDetailProps {
  title: string;
  description: string;
  icon: string;
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
  results: string[];
  cta: string;
}

export default function ServiceDetail({
  title,
  description,
  process,
  benefits,
  results,
  cta,
}: ServiceDetailProps) {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            {title}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12" style={{fontFamily: 'Playfair Display, serif'}}>
            Nuestro Proceso
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative">
                {/* Step Number */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  {item.step < process.length && (
                    <div className="hidden lg:block absolute left-12 top-6 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
                  )}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8" style={{fontFamily: 'Playfair Display, serif'}}>
                Beneficios Clave
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Results */}
            <div className="bg-primary text-white p-8 md:p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">
                Resultados Esperados
              </h3>
              
              <ul className="space-y-4">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            ¿Listo para comenzar?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {cta}
          </p>
          <a
            href="/contacto"
            className="inline-block bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
          >
            Solicitar Consultoría
          </a>
        </div>
      </section>
    </div>
  );
}
