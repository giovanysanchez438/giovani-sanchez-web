/**
 * Home Intro Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Resumen del objetivo de la página
 * - Propuesta de valor clara
 * - Call-to-action
 */

export default function HomeIntro() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center space-y-6">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Bienvenido a mi espacio profesional. Soy <span className="font-semibold text-primary">Giovani Sánchez V.</span>, 
            especialista en <span className="font-semibold">finanzas, fundraising, estrategia comercial y desarrollo empresarial</span>.
          </p>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed italic">
            "Muchos marketers no saben de números. Muchos financieros no saben de mercado."
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Con más de <span className="font-semibold">14 años de experiencia</span>, he trabajado con empresas líderes 
            en sectores privado, público y sin ánimo de lucro, gestionando presupuestos superiores a <span className="font-semibold">COP $2 mil millones</span>.
          </p>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            En este sitio encontrarás información sobre mi <span className="font-semibold">perfil profesional, servicios, 
            experiencia, certificaciones y principios</span> que guían mi trabajo. Mi objetivo es ayudarte a alcanzar 
            <span className="font-semibold"> crecimiento sostenible</span> combinando análisis riguroso con visión estratégica.
          </p>
          
          <div className="pt-6">
            <a
              href="/contacto"
              className="inline-block bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
            >
              Solicitar Consultoría
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
