/**
 * HomeIntro — Versión 3 (alineada con nuevo "Acerca de" LinkedIn, mayo 2026)
 */
export default function HomeIntro() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="container max-w-3xl mx-auto px-6 text-center">

        <p className="text-2xl md:text-3xl font-semibold text-[#0F3A66] leading-snug mb-4">
          "El fundraising de muchas ONG no falla por falta de esfuerzo.
          <br className="hidden sm:block" /> Falla por falta de rigor financiero."
        </p>

        <p className="text-base md:text-lg text-gray-500 leading-relaxed">
          Diagnóstico financiero · Captación recurrente · Retención y métricas.
          <span className="block mt-1 font-medium text-gray-600">
            Para fundaciones y ONG que quieren sostenibilidad real, no supervivencia.
          </span>
        </p>

      </div>
    </section>
  );
}
