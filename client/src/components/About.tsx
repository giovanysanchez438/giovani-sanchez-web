export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container max-w-3xl mx-auto px-6">

        <h2 className="mb-8">Sobre mí</h2>

        <div className="space-y-6 text-gray-700">

          <p className="text-lg leading-relaxed">
            Soy Gerente de Marketing y Fundraising con más de 15 años liderando
            estrategias de captación, retención y crecimiento de ingresos en el sector
            social y la cooperación internacional. Mi formación combina
            <strong> Ingeniería Financiera</strong> y
            <strong> Maestría en Marketing de la Universidad Externado de Colombia</strong> —
            una combinación que me permite diseñar campañas con rigor comercial y
            sustentarlas con la misma disciplina cuantitativa de un analista financiero.
          </p>

          <p className="text-lg leading-relaxed">
            En organizaciones como Save the Children, Fundación PLAN, Habitat for Humanity
            y Aldeas Infantiles SOS, he gestionado carteras de hasta
            <strong> 35.000 donantes activos</strong> con recaudaciones anuales superiores a
            <strong> COP $1.800 millones</strong> y tasas de retención sostenidas por encima del
            <strong> 85%</strong>, el doble del promedio del sector nonprofit colombiano.
            En 2024 lideré como único responsable de marketing el Marketplace de Economía
            Circular del BID en Bogotá, Quito, Lima y Santiago de Chile.
          </p>

          <p className="text-lg leading-relaxed">
            Al concluir el proyecto con el BID tomé una decisión deliberada: antes de volver
            al mercado quería actualizar mi perfil con las competencias que el sector está
            exigiendo en 2026. En 18 meses obtuve
            <strong> 18 certificaciones</strong> en IA generativa (Anthropic, Google Gemini),
            analítica digital (Google Analytics), contratación pública (SECOP II en sus 6
            niveles), SAP ERP y gestión presupuestal (Universidad Nacional de Colombia).
            Hoy llego con un perfil más competitivo que cuando salí.
          </p>

        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/cv.pdf"
            download
            className="inline-block bg-primary hover:bg-blue-800 text-white font-semibold
                       py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
          >
            Descargar mi CV
          </a>
          <a
            href="https://www.linkedin.com/in/giovanisanchezv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary text-primary hover:bg-primary
                       hover:text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200"
          >
            Ver LinkedIn →
          </a>
        </div>

      </div>
    </section>
  );
}
