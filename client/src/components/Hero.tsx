import { Download, ArrowRight } from "lucide-react";

const serif = { fontFamily: "Georgia,'Times New Roman',serif" };

export default function Hero() {
  return (
    <section className="bg-white border-b border-[#e8e6e1]">
      <div className="container mx-auto px-6 pt-16">

        {/* Eyebrow */}
        <p className="text-[10px] tracking-[0.14em] uppercase text-[#bbb] mb-8">
          Marketing · Fundraising · Sector Social · América Latina
        </p>

        {/* Grid: copy izquierda / foto derecha */}
        <div className="grid lg:grid-cols-2 gap-12 items-end">

          {/* Izquierda */}
          <div className="pb-12">
            <h1
              style={serif}
              className="text-[2.4rem] lg:text-[2.8rem] font-normal text-[#111] leading-[1.12] tracking-[-0.02em] mb-5"
            >
              He visto lo que funciona<br />
              en el fundraising de ONG.<br />
              <strong className="font-semibold">Y lo que no.</strong>
            </h1>

            <p className="text-[0.875rem] text-[#555] leading-[1.85] mb-6 max-w-[400px]">
              Con más de 15 años en el sector social de América Latina, he
              gestionado más de 83.500 donantes y visto los mismos errores
              repetirse una y otra vez. Aquí comparto lo que aprendí.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              <a
                href="/trabajo"
                className="inline-flex items-center gap-1.5 bg-[#111] text-white text-[11px] font-medium px-5 py-2.5 rounded-[2px] hover:bg-[#333] transition-colors"
              >
                Ver mi trabajo <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/giovani-sanchez-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white text-[#111] text-[11px] font-medium px-5 py-2.5 rounded-[2px] border border-[#ccc] hover:border-[#111] hover:bg-[#f5f4f1] transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Descargar CV
              </a>
              <a
                href="https://www.linkedin.com/in/giovanisanchezv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white text-[#111] text-[11px] font-medium px-5 py-2.5 rounded-[2px] border border-[#ccc] hover:border-[#111] hover:bg-[#f5f4f1] transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>

            <p className="text-[11px] text-[#aaa] italic">
              ¿Tienes 30 minutos? Hablemos sin costo ni compromiso.
            </p>
          </div>

          {/* Derecha — foto de perfil completa */}
          <div className="relative">
            <img
              src="/giovani.png"
              alt="Giovani Sánchez Vargas"
              className="w-full object-cover object-center rounded-t-[3px]"
              style={{ maxHeight: "400px", objectFit: "cover", objectPosition: "center top" }}
            />
            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-white px-3 py-2.5 shadow-md rounded-[2px]">
              <p style={serif} className="text-[1.1rem] text-[#111] leading-none">85%</p>
              <p className="text-[9px] text-[#aaa] uppercase tracking-wider mt-1">
                Retención donantes
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Franja métricas */}
      <div className="bg-[#f5f4f1] border-t border-[#e8e6e1]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#ddd] py-5">
            {[
              { num: "83.500+",  label: "Donantes gestionados"     },
              { num: "$5.200M", label: "COP recaudados"            },
              { num: "85%",      label: "Retención — 3× el sector" },
              { num: "+15 años", label: "Sector social LATAM"      },
            ].map(({ num, label }) => (
              <div key={num} className="text-center px-4 py-1">
                <p style={serif} className="text-[1.2rem] text-[#111] leading-none">{num}</p>
                <p className="text-[9.5px] text-[#aaa] mt-1.5 uppercase tracking-wider leading-snug">
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
