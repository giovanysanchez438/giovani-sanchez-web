/**
 * About Section Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Fondo azul marino con texto blanco
 * - Layout asimétrico
 * - Contenido claro y conciso
 * - Información de LinkedIn integrada
 */

export default function About() {
  const aboutImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/I1g2OKY8Wx2Uola4rJYRpN/sandbox/lp4B5j2xAjFcvn06pm0C0a-img-3_1772125284000_na1fn_YWJvdXQtc2VjdGlvbi1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSTFnMk9LWThXeDJVb2xhNHJKWVJwTi9zYW5kYm94L2xwNEI1ajJ4QWpGY3ZuMDZwbTBDMGEtaW1nLTNfMTc3MjEyNTI4NDAwMF9uYTFmbl9ZV0p2ZFhRdGMyVmpkR2x2YmkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Abx01EJOUxnVKA5vZCiqE9JSSJHjWzght~BSbsY8nBPdtaA-Wn89SzbU41cY3R-QyVPRhGeRga2ppqDgU3C1Zo8QP8TsgcmDNMmye7VJUK15A40LfzeGs3--7jaSsFJHJxlSHrarX6HXa686f-8~SD7ZvHQBs6J64Cw3Pm3linNNGUesL58W0M-zwVp90F82z45JvXUIKKU15FtUrskYhcXrctpAjBR~N11XRinUSmzjMVdRsgNJ23k1Jvty~MxiMAeGPd0glFoE9YVWns8uZ8i4q3L1g53SgAg4Uc31BX2tHVzHrjKAkimOfr4JR4kbkAgD6DGxYl8eWQ8iaSXVdQ__";

  return (
    <section
      id="perfil"
      className="relative py-20 md:py-32 bg-cover bg-center"
      style={{
        backgroundImage: `url('${aboutImageUrl}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container">
        <div className="max-w-3xl">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Sobre mí
          </h2>

          {/* Description */}
          <div className="space-y-6 text-gray-100">
            <p className="text-lg leading-relaxed">
              <strong>Profesional senior en marketing estratégico y desarrollo de negocios</strong> con amplia experiencia en crecimiento organizacional, posicionamiento de marca y generación de ingresos. He liderado equipos multidisciplinarios, campañas multicanal y alianzas corporativas en entornos complejos.
            </p>

            <p className="text-lg leading-relaxed">
              Ingeniero Financiero (Universidad Piloto) con Maestría en Mercadeo (Universidad Externado de Colombia). Combino análisis riguroso de datos con visión estratégica de mercado para lograr resultados sostenibles.
            </p>

            <p className="text-lg leading-relaxed italic font-semibold text-yellow-200">
              Mi diferencial: "Muchos marketers no saben de números. Muchos financieros no saben de mercado. Yo domino ambos mundos."
            </p>

            <p className="text-lg leading-relaxed">
              Mi objetivo es aportar valor estratégico a través de análisis riguroso, decisiones basadas en datos y soluciones personalizadas que impulsen el crecimiento sostenible de tu negocio.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="#servicios"
              className="inline-block bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
            >
              Conoce mis servicios
            </a>
            <a
              href="https://www.linkedin.com/in/giovani-sanchez/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200"
            >
              Ver LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
