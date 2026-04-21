import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl mx-auto px-6">

          <div className="mb-12">
            <h2 className="mb-4">Contacto</h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Estoy abierto a oportunidades de tiempo completo como Gerente de Marketing y
              Fundraising en ONGs internacionales, fundaciones corporativas y organismos de
              cooperación. También atiendo consultorías puntuales alineadas a mi experiencia sectorial.
            </p>
          </div>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-800
                         text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
            >
              <Download size={16} />
              Descargar mi CV
            </a>
            <a
              href="mailto:giovanysanchez438@gmail.com?subject=Oportunidad laboral"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary
                         hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200"
            >
              Escribirme
            </a>
          </div>

          {/* Datos de contacto */}
          <div className="space-y-5 border-t border-gray-100 pt-10">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-blue-50 rounded-lg shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <a href="mailto:giovanysanchez438@gmail.com"
                 className="text-gray-700 hover:text-primary transition-smooth">
                giovanysanchez438@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-blue-50 rounded-lg shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <a href="tel:+573123344130"
                 className="text-gray-700 hover:text-primary transition-smooth">
                +57 312 334 4130
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-blue-50 rounded-lg shrink-0">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <a href="https://www.linkedin.com/in/giovanisanchezv"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-700 hover:text-primary transition-smooth">
                linkedin.com/in/giovanisanchezv
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-blue-50 rounded-lg shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-gray-700">Bogotá, Colombia</span>
            </div>
          </div>

        </div>
      </section>

      <footer className="bg-[#0F3A66] text-white py-8">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-bold mb-1">Giovani Sánchez Vargas</p>
              <p className="text-sm text-blue-200">
                Gerente de Marketing y Fundraising | Sector Social y Nonprofit
              </p>
            </div>
            <p className="text-sm text-blue-200">© 2026 Giovani Sánchez Vargas</p>
          </div>
        </div>
      </footer>
    </>
  );
}
