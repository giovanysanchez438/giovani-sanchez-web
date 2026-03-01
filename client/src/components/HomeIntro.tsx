/**
 * Home Intro Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Conserva el estilo original de texto centrado
 * - Texto más conciso y directo
 * - Call-to-action
 */
export default function HomeIntro() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center space-y-6">

          {/* Propuesta de valor — corta y directa */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Soy <span className="font-semibold text-primary">Giovani Sánchez V.</span>, consultor con{" "}
            <span className="font-semibold">14 años de experiencia</span> ayudando a empresas y organizaciones
            a crecer con <span className="font-semibold">estrategia financiera</span> y{" "}
            <span className="font-semibold">visión de mercado</span>.
          </p>

          {/* Frase diferenciadora */}
          <p className="text-base md:text-lg text-gray-500 leading-relaxed italic">
            "Muchos marketers no saben de números. Muchos financieros no saben de mercado."
          </p>

          {/* Sectores */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            He trabajado en los sectores{" "}
            <span className="font-semibold">privado, público y sin ánimo de lucro</span>,
            combinando análisis riguroso con estrategia comercial para generar{" "}
            <span className="font-semibold">crecimiento sostenible</span>.
          </p>

          {/* Servicios como pills sutiles */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {["Finanzas Corporativas", "Fundraising & ONG", "Estrategia Empresarial", "Desarrollo Comercial"].map((s) => (
              <span
                key={s}
                className="text-sm font-medium px-4 py-1.5 rounded-full"
                style={{
                  background: '#f4f7fd',
                  color: '#0d1b3e',
                  border: '1px solid rgba(74,127,212,0.2)'
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-block bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
            >
              Solicitar Consultoría
            </a>
            <a
              href="/servicios"
              className="inline-block border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200"
            >
              Ver servicios →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
