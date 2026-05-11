import { Download, ArrowRight } from "lucide-react";

const serif = { fontFamily: "Georgia,'Times New Roman',serif" };

export default function Hero() {
  return (
    <section className="bg-white border-b border-[#e8e6e1]">

      {/* ── FOTO GRANDE DE FONDO — estilo Mark Phillips ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "520px" }}>
        <img
          src="/save-the-children.jpg"
          alt="Giovani Sánchez Vargas — Save the Children Colombia"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay degradado — oscurece la izquierda para que el texto sea legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* Contenido sobre la foto */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <div className="max-w-[520px]">
              <p className="text-[10px] tracking-[0.14em] uppercase text-white/50 mb-5">
                Marketing · Fundraising · Sector Social · América Latina
              </p>
              <h1
                style={serif}
                className="text-[2.4rem] lg:text-[3rem] font-normal text-white leading-[1.1] tracking-[-0.02em] mb-5"
              >
                He visto lo que funciona<br />
                en el fundraising de ONG.<br />
                <strong className="font-semibold">Y lo que no.</strong>
              </h1>
              <p className="text-[0.875rem] text-white/70 leading-[1.8] mb-7 max-w-[420px]">
                Con más de 15 años en el sector social de América Latina, he
                gestionado más de 83.500 donantes y visto los mismos errores
                repetirse una y otra vez. Aquí comparto lo que aprendí.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="/trabajo"
                  className="inline-flex items-center gap-1.5 bg-white text-[#111] text-[11px] font-medium px-5 py-2.5 rounded-[2px] hover:bg-[#f0ede8] transition-colors"
                >
                  Ver mi trabajo <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/giovani-sanchez-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-transparent text-white text-[11px] font-medium px-5 py-2.5 rounded-[2px] border border-white/40 hover:border-white hover:bg-white/10 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Descargar CV
                </a>
                <a
                  href="https://www.linkedin.com/in/giovanisanchezv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-transparent text-white text-[11px] font-medium px-5 py-2.5 rounded-[2px] border border-white/40 hover:border-white hover:bg-white/10 transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
              <p className="text-[11px] text-white/40 italic">
                ¿Tienes 30 minutos? Hablemos sin costo ni compromiso.
              </p>
            </div>
          </div>
        </div>

        {/* Badge foto perfil — esquina inferior derecha */}
        <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[3px] px-4 py-3">
          <img
            src="/giovani.png"
            alt="Giovani Sánchez Vargas"
            className="w-10 h-10 rounded-full object-cover object-center border border-white/30"
          />
          <div>
            <p className="text-[12px] text-white font-medium leading-tight">Giovani Sánchez V.</p>
            <p className="text-[10px] text-white/50 mt-0.5">Fundraising · Sector Social LATAM</p>
          </div>
        </div>
      </div>

      {/* ── FRANJA DE MÉTRICAS ── */}
      <div className="bg-[#f5f4f1] border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#ddd] py-5">
            {[
              { num: "83.500+",  label: "Donantes gestionados"      },
              { num: "$5.200M", label: "COP recaudados"             },
              { num: "85%",      label: "Retención — 3× el sector"  },
              { num: "+15 años", label: "Sector social LATAM"       },
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
