export default function Hero() {
  return (
    <section
      className="w-full flex items-center justify-center py-24 md:py-32"
      style={{ backgroundColor: "#0F3A66" }}
    >
      <div className="container px-6 max-w-4xl mx-auto text-center text-white">

        <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-blue-200 mb-6">
          Gerente de Marketing y Fundraising · Sector Social y Nonprofit
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
          Estrategia de captación, CRM y crecimiento de ingresos con ROI financiero.
        </h1>

        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          He gestionado 83.500 donantes activos y recaudado más de COP&nbsp;$5.200 millones para
          Save the Children, Fundación PLAN, Habitat for Humanity y Aldeas Infantiles SOS.
          Combino Ingeniería Financiera con Maestría en Marketing del Externado para diseñar
          fundraising con ROI medible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="/cv.pdf"
            download
            className="inline-block bg-white text-[#0F3A66] font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-smooth duration-200 shadow-md hover:shadow-lg"
          >
            Descargar mi CV
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-smooth duration-200"
          >
            Contactar
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/20 pt-10">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-white mb-1">+15</p>
            <p className="text-xs md:text-sm text-blue-200 uppercase tracking-wide leading-snug">
              años liderando marketing y fundraising en el sector social
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-white mb-1">83.500</p>
            <p className="text-xs md:text-sm text-blue-200 uppercase tracking-wide leading-snug">
              donantes activos gestionados en carrera
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-white mb-1">$5.200M</p>
            <p className="text-xs md:text-sm text-blue-200 uppercase tracking-wide leading-snug">
              COP recaudados acumulados
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
