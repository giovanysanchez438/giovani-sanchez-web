import { LucideLinkedin, LucideCalendar, LucideCheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-28">
      {/* Acento sutil en el fondo (Solo un toque de color) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 hidden lg:block z-0" />
      
      <div className="container relative mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* TEXTO: Máxima Claridad y Lectura */}
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 bg-blue-50 text-[#003366] text-xs tracking-[0.2em] font-bold uppercase rounded-full mb-6">
              Fundraising con Rigor Financiero
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Impulso el fundraising <br />
              hacia la <span className="text-[#0052a3]">sostenibilidad</span> <br />
              financiera <span className="italic font-serif">real.</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Dejo atrás la improvisación. Aplico **ingeniería financiera** para que las ONG 
              tomen decisiones basadas en datos y métricas de retención.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="/contacto" className="flex items-center gap-2 px-8 py-4 bg-[#003366] text-white font-bold rounded shadow-xl hover:bg-[#004a94] transition-all">
                <LucideCalendar className="w-5 h-5" />
                Agendar Consultoría
              </a>
              <a href="https://www.linkedin.com/in/giovanisanchezv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded hover:bg-slate-50 transition-all">
                <LucideLinkedin className="w-5 h-5 text-[#0077b5]" />
                LinkedIn
              </a>
            </div>

            {/* Credenciales con iconos de color */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <LucideCheckCircle className="w-5 h-5 text-[#0052a3]" />
                </div>
                <span className="text-sm font-semibold text-slate-700">+15 años en LATAM</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <LucideCheckCircle className="w-5 h-5 text-[#0052a3]" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Decisiones basadas en Datos</span>
              </div>
            </div>
          </div>

          {/* IMAGEN: Tu perfil destacando sobre el blanco */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Círculo decorativo de fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50 z-0" />
              
              <img 
                src="/giovani.png" 
                alt="Giovani Sánchez Vargas" 
                className="relative z-10 w-full max-w-[380px] h-auto rounded-3xl shadow-2xl transition-transform hover:scale-[1.01] duration-500"
              />
              
              {/* Badge Profesional Blanco */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 shadow-2xl rounded-2xl z-20 border border-slate-100">
                <p className="text-[#003366] font-extrabold text-lg">83.500+</p>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-tighter">Donantes Gestionados</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
