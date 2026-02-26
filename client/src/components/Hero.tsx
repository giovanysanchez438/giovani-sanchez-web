/**
 * Hero Section Component
 * 
 * Diseño: Minimalismo Corporativo Elegante
 * - Imagen de fondo profesional con overlay
 * - Título y subtítulo claros
 * - Call-to-action prominente
 * - Texto blanco sobre fondo oscuro
 */

export default function Hero() {
  const heroImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/I1g2OKY8Wx2Uola4rJYRpN/sandbox/lp4B5j2xAjFcvn06pm0C0a-img-1_1772125290000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSTFnMk9LWThXeDJVb2xhNHJKWVJwTi9zYW5kYm94L2xwNEI1ajJ4QWpGY3ZuMDZwbTBDMGEtaW1nLTFfMTc3MjEyNTI5MDAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V~ykazX2s6CylSnonQzZuYRqPNh2cz0EIh~LgoNZE8UFE4SvZ9A0WDR92XEqwcDMgv3qtOFCzNRk3Hp6iGuNBF289BJPg-M4ukMCZ8U-TFMF7OjSJBV3Twgr2sBbnqtorzr0eRAQoliJpZSIpzbZvV5kE3ZYHsJ32eyGMebhOi-O~yb5s1B9kh0Dto7BkilR6i8uvC3v6d4FJ4166coflaR4tI8jhAYZtXGasvhNZZ7cHnVDREJjul9zkpmO2mnUU3hckUIlRVqjjfm1wlGhoLUSh8QLt2ZrtfdWtR2DFdQeiC9Ywln6AeNXoBAa~SEQCzazIo12K7C5PtuC8JtmAA__";

  return (
    <section className="relative w-full h-screen md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImageUrl}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4">
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight text-white" style={{fontFamily: 'Great Vibes, cursive', fontWeight: '400', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '2px'}}>
          Giovani Sánchez V.
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Consultoría profesional en finanzas, fundraising, estrategia y desarrollo empresarial
        </p>
        <a
          href="/contacto"
          className="inline-block bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-smooth duration-200 hover:shadow-lg"
        >
          Contáctame
        </a>
      </div>
    </section>
  );
}
