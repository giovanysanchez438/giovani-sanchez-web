import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

/**
 * Contact Form Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Formulario limpio y profesional
 * - Validación de datos
 * - Envío por email
 * - Información de contacto destacada
 */

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Consultoría Financiera",
    "Planificación Financiera",
    "Asesoría Financiera",
    "Consultoría en entidades sin ánimo de lucro",
    "Otro",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar email usando mailto (alternativa simple)
      const mailtoLink = `mailto:giovanysanchez438@gmail.com?subject=Solicitud de Servicio: ${formData.service}&body=Nombre: ${formData.name}%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0AServicio: ${formData.service}%0A%0AMensaje:%0A${formData.message}`;
      
      window.location.href = mailtoLink;

      // Limpiar formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      toast.success("¡Solicitud enviada! Te contactaremos pronto.");
    } catch (error) {
      toast.error("Error al enviar la solicitud. Intenta de nuevo.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Contáctame
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Necesitas consultoría profesional? Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:giovanysanchez438@gmail.com" className="text-gray-600 hover:text-primary transition-smooth">
                  giovanysanchez438@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Teléfono</h3>
                <a href="tel:+573123344130" className="text-gray-600 hover:text-primary transition-smooth">
                  +57 (312) 334-4130
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Ubicación</h3>
                <p className="text-gray-600">
                  Bogotá, Colombia<br />
                  Disponible en remoto
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="pt-4 border-t border-gray-200">
              <a
                href="https://www.linkedin.com/in/giovani-sanchez/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-blue-800 font-semibold transition-smooth"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                Ver mi perfil en LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-smooth"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-smooth"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+57 (XXX) XXX-XXXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-smooth"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio Solicitado *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-smooth"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto o necesidad..."
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-smooth resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-smooth duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Te responderé dentro de 24-48 horas hábiles.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
