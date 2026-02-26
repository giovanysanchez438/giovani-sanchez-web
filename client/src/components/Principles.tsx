import { BarChart3, BookOpen, Users, Handshake, CheckCircle } from "lucide-react";

/**
 * Principles Section Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Grid de 3 columnas (responsive)
 * - Iconos lineales de Lucide
 * - Tarjetas con sombra sutil
 * - Hover effects elegantes
 */

interface Principle {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const principles: Principle[] = [
  {
    id: "analisis-riguroso",
    title: "Análisis Riguroso y Basado en Datos",
    description:
      "Utilizo metodologías avanzadas en modelación financiera, econometría y análisis de datos para fundamentar cada recomendación estratégica. Las decisiones se toman con información verificable y escenarios probables.",
    icon: <BarChart3 className="w-12 h-12 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "transmision-conocimiento",
    title: "Transmisión Efectiva de Conocimiento",
    description:
      "Creo en la importancia de que mis clientes comprendan profundamente los conceptos y estrategias presentados. Mi objetivo es empoderar a los equipos para que puedan aplicar y adaptar las soluciones de forma autónoma.",
    icon: <BookOpen className="w-12 h-12 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "enfoque-integral",
    title: "Enfoque Integral y Multidisciplinario",
    description:
      "Combino perspectivas de finanzas, marketing, operaciones y recursos humanos para ofrecer soluciones holísticas. He liderado equipos multidisciplinarios que generan sinergia y resultados superiores.",
    icon: <Users className="w-12 h-12 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "impacto-medible",
    title: "Impacto Medible y Sostenible",
    description:
      "Cada proyecto se alinea con objetivos claros y se monitorea mediante KPIs específicos. Busco generar valor a largo plazo que trascienda más allá de la consultoría inicial.",
    icon: <Handshake className="w-12 h-12 text-primary" strokeWidth={1.5} />,
  },
  {
    id: "excelencia-profesional",
    title: "Excelencia Profesional y Adaptabilidad",
    description:
      "Mantengo mis competencias actualizadas a través de certificaciones continuas y participación en congresos internacionales. Me adapto rápidamente a nuevos contextos, tecnologías y desafíos empresariales.",
    icon: <CheckCircle className="w-12 h-12 text-primary" strokeWidth={1.5} />,
  },
];

export default function Principles() {
  const principlesImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/I1g2OKY8Wx2Uola4rJYRpN/sandbox/lp4B5j2xAjFcvn06pm0C0a-img-2_1772125293000_na1fn_cHJpbmNpcGxlcy1zZWN0aW9uLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSTFnMk9LWThXeDJVb2xhNHJKWVJwTi9zYW5kYm94L2xwNEI1ajJ4QWpGY3ZuMDZwbTBDMGEtaW1nLTJfMTc3MjEyNTI5MzAwMF9uYTFmbl9jSEpwYm1OcGNHeGxjeTF6WldOMGFXOXVMV0puLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Val80KtcOKXYhLUHJGaphH1ezHPxuNpAKn5bS4dCPiWh2yFzu4MOtv-aJ-D3OUspi-ydb8g7bWLC1jxVfKCAhrZn16XiB5mbEGNCbmvbISReCPUgZ02UO1fji7FDh7ErUcoQojYKF4t-BOGg9qtZOuQfwWNyIsqSyO6ZVK4WVZqXsmRjUbm2b4S23H~OZdJhdPCJgodedv787AnJ3uKQgGezTq~yc~zKqgj2cOTYwbxm116Favvlbl1UYsccRt1W-BNI5leb8mEi8QOXg7j28ejIo9fjuxfKtrxhfdz8Vhubf1sb3Ua7QIJi2uyLKHnmvFBfXqszXEgDVSmge5QVhA__";

  return (
    <section
      id="principios"
      className="relative py-20 md:py-32 bg-cover bg-center"
      style={{
        backgroundImage: `url('${principlesImageUrl}')`,
      }}
    >
      {/* Overlay opcional para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white/95" />

      <div className="relative z-10 container">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Principios de Trabajo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Valores fundamentales que guían mi enfoque profesional y compromiso con la excelencia
          </p>
        </div>

        {/* Grid de Principios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className="bg-white rounded-lg p-8 card-shadow hover:shadow-lg transition-smooth hover:translate-y-[-4px] group"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="p-3 bg-gray-50 group-hover:bg-blue-50 transition-smooth">
                  {principle.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-center md:text-left" style={{fontFamily: 'Playfair Display, serif'}}>
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed text-center md:text-left">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
