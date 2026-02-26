import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

/**
 * Contact Section Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Información de contacto clara
 * - Enlaces a redes sociales
 * - Footer con información legal
 */

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Contacto
          </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ¿Tienes una pregunta o necesitas asesoría? Me encantaría hablar contigo.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {/* Email */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white rounded-lg">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Email</h3>
              <a
                href="mailto:giovanysanchez438@gmail.com"
                className="text-gray-600 hover:text-primary transition-smooth"
              >
                giovanysanchez438@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white rounded-lg">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Teléfono</h3>
              <a
                href="tel:+573123344130"
                className="text-gray-600 hover:text-primary transition-smooth"
              >
                +57 (312) 334-4130
              </a>
            </div>

            {/* LinkedIn */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white rounded-lg">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-2" style={{fontFamily: 'Playfair Display, serif'}}>LinkedIn</h3>
              <a
                href="https://linkedin.com/in/giovani-sanchez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-smooth"
              >
                Conecta conmigo
              </a>
            </div>
          </div>

          {/* Contact Form CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              O déjame un mensaje y me pondré en contacto pronto
            </p>
            <a
              href="mailto:giovanysanchez438@gmail.com?subject=Solicitud de Consultoría"
              className="inline-block bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
            >
              Enviar Mensaje
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left */}
            <div className="text-center md:text-left">
              <p className="font-bold mb-1" style={{fontFamily: 'Playfair Display, serif'}}>Giovani Sánchez V.</p>
              <p className="text-sm text-blue-100">
                Ingeniero Financiero | Máster en Mercadeo | Estrategia, Finanzas y Liderazgo
              </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6 text-sm text-blue-100">
              <a href="#" className="hover:text-white transition-smooth">
                Privacidad
              </a>
              <a href="#" className="hover:text-white transition-smooth">
                Términos
              </a>
              <p>© 2026 Giovani Sanchez V. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
