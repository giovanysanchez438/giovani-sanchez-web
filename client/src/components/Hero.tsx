import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white border-b border-[#e8e6e1]">

      {/* ── Eyebrow ── */}
      <div className="container mx-auto px-6 pt-16 pb-0">
        <p className="eyebrow mb-8">
          Marketing · Fundraising · Sector Social · América Latina
        </p>
      </div>

      {/* ── Título + Stats ── */}
      <div className="container mx-auto px-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-end">

          {/* Columna izquierda: titular */}
          <div>
            <h1 className="text-[2.6rem] lg:text-[3.4rem] font-normal leading-[1.1] tracking-[-0.03em] text-[#111111] mb-6">
              ¿Tu ONG opera con{" "}
              <span className="font-medium">rigor financiero real</span>{" "}
              en su fundraising?
            </h1>

            <p className="text-[#666666] text-[0.9375rem] leading-[1.8] mb-8 max-w-[440px]">
              Combino ingeniería financiera con estrategia de captación.
              Diseño planes con ROI medible, estructuro presupuestos y presento
              resultados con la misma rigurosidad de un analista financiero.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="/experiencia" className="btn-primary">
                Ver mi experiencia
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/giovani-sanchez-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Download className="w-3.5 h-3.5" />
                Descargar CV
              </a>
              <a
                href="https://www.linkedin.com/in/giovanisanchezv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Columna derecha: stats con línea vertical */}
          <div className="border-l border-[#e8e6e1] pl-10 lg:pl-12 flex flex-col gap-7">
            {[
              { num: "83.500+", label: "Donantes gestionados en LATAM" },
              { num: "85%",     label: "Retención — 3× el promedio del sector" },
              { num: "+15 años",label: "Liderando fundraising en América Latina" },
              { num: "$5.200M", label: "COP recaudados en el sector social" },
            ].map(({ num, label }) => (
              <div key={num}>
                <p className="text-[1.75rem] font-normal text-[#111111] leading-none tracking-[-0.02em]">
                  {num}
                </p>
                <p className="text-[0.6875rem] text-[#aaaaaa] mt-1.5 leading-snug uppercase tracking-wider">
                  {label}
                </p>
                <div className="w-8 h-px bg-[#e8e6e1] mt-3" />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Franja de métricas ── */}
      <div className="bg-[#f5f4f1] border-t border-b border-[#e8e6e1] py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#ddd]">
            {[
              { num: "83.500+",  label: "Donantes gestionados" },
              { num: "$5.200M", label: "COP recaudados" },
              { num: "85%",      label: "Tasa de retención" },
              { num: "+15 años", label: "En el sector social LATAM" },
            ].map(({ num, label }) => (
              <div key={num} className="text-center px-4 py-2">
                <p className="text-[1.4rem] font-normal text-[#111111] leading-none">
                  {num}
                </p>
                <p className="text-[0.625rem] text-[#999] mt-1.5 uppercase tracking-wider leading-snug">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
