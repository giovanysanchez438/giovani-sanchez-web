import { LucideLinkedin, LucideCalendar, LucideCheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#003366] py-16 lg:py-24">
      {/* Fondo con sutil textura profesional */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* TEXTO: Posicionamiento Estratégico */}
          <div className="lg:col-span-7">
            <p className="text-[#7eb6e6] text-sm tracking-[0.3em] font-bold uppercase mb-6">
              Fundraising con Rigor Financiero · América Latina
            </p>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold !text-white leading-[1.1] mb-8">
              Impulso el fundraising de las <span className="text-[#7eb6e6]">ONG</span> hacia la <br />
              sostenibilidad financiera <span className="italic font-serif">real.</span>
            </h1>

            <p className="text-xl text-blue-50/90 leading-relaxed mb-8 max-w-2xl font-light">
              Aplico **ingeniería financiera** al sector social: diagnóstico, 
              estrategia de captación recurrente y métricas para decidir con datos, no con intuición.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="/contacto" className="flex items-center gap-2 px-8 py-4 bg-white !text-[#003366] font-bold rounded hover:bg-blue-50 transition-all">
                <LucideCalendar className="w-5 h-5" />
                Conversemos 20 minutos
              </a>
              <a href="https://www.linkedin.com/in/giovanisanchezv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 border border-white/40 !text-white font-semibold rounded hover:bg-white/10 transition-all">
                <LucideLinkedin className="w-5 h-5" />
                Perfil en LinkedIn
              </a>
            </div>

            {/* Credenciales rápidas (SEO & Trust) */}
            <div className="flex flex-wrap gap-6 text-sm text-blue-200/80 border-t border-white/10 pt-8">
              <span className="flex items-center gap-2"><LucideCheckCircle className="w-4 h-4 text-[#7eb6e6]" /> +15 años de experiencia</span>
              <span className="flex items-center gap-2"><LucideCheckCircle className="w-4 h-4 text-[#7eb6e6]" /> Estrategia basada en datos</span>
              <span className="flex items-center gap-2"><LucideCheckCircle className="w-4 h-4 text-[#7eb6e6]" /> Especialista en LATAM</span>
            </div>
          </div>

          {/* IMAGEN: Tu fotografía profesional */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decoración detrás de la foto */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#7eb6e6] rounded-2xl z-0" />
              
              {/* Aquí debes asegurarte de que el archivo 'giovani.jpg' esté en tu carpeta /public */}
              <img 
                src="/giovani.jpg" 
                alt="Giovani Sánchez Vargas - Especialista en Fundraising Financiero" 
                className="relative z-10 w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Etiqueta de confianza */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl rounded-lg z-20 hidden sm:block">
                <p className="text-[#003366] font-bold text-sm">Ingeniería Financiera</p>
                <p className="text-gray-500 text-xs text-center">Aplicada al Sector Social</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
