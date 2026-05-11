import { ArrowRight, Download } from "lucide-react";

const serif = { fontFamily: "Georgia,'Times New Roman',serif" };

export default function SobreMi() {
  return (
    <div className="bg-white">

      {/* Hero de página */}
      <section className="border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#bbb] mb-6">Sobre mí</p>
          <h1 style={serif} className="text-[2.2rem] font-normal text-[#111] leading-[1.15] tracking-[-0.02em] max-w-[560px]">
            Fundraising con rigor financiero.<br />
            <span className="text-[#555]">El perfil que el sector social necesita.</span>
          </h1>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[240px_1fr] gap-14 items-start">

            {/* Foto */}
            <div>
              <img
                src="/giovani.png"
                alt="Giovani Sánchez Vargas"
                className="w-full rounded-[3px] object-cover object-center"
                style={{ maxHeight: "300px" }}
              />
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="/giovani-sanchez-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#111] text-white text-[11px] font-medium px-4 py-2.5 rounded-[2px] hover:bg-[#333] transition-colors w-full"
                >
                  <Download className="w-3.5 h-3.5" /> Descargar CV
                </a>
                <a
                  href="https://www.linkedin.com/in/giovanisanchezv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-white text-[#111] text-[11px] font-medium px-4 py-2.5 rounded-[2px] border border-[#ccc] hover:border-[#111] transition-colors w-full"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p style={serif} className="text-[1.1rem] text-[#111] leading-[1.55] mb-5 border-l-2 border-[#111] pl-4">
                "Empecé a aplicar ingeniería financiera al fundraising porque vi que las ONG tomaban decisiones de millones de pesos basadas en intuición — no en datos."
              </p>

              <p className="text-[0.875rem] text-[#555] leading-[1.9] mb-4">
                Soy Giovani Sánchez Vargas, profesional en Marketing y Fundraising con Maestría en Marketing
                (Universidad Externado de Colombia) e Ingeniería Financiera (Universidad Piloto de Colombia).
                Durante más de 15 años he liderado estrategias de captación de fondos, posicionamiento de marca
                y crecimiento de ingresos en el sector social y nonprofit de América Latina.
              </p>

              <p className="text-[0.875rem] text-[#555] leading-[1.9] mb-4">
                He trabajado con <strong className="text-[#111] font-medium">Save the Children, Fundación PLAN,
                Habitat for Humanity, Aldeas Infantiles SOS y el BID</strong> — organizaciones que operan bajo
                los estándares más exigentes de la cooperación internacional. En cada una aprendí algo que la
                siguiente no sabía.
              </p>

              <p className="text-[0.875rem] text-[#555] leading-[1.9] mb-4">
                Lo que me distingue no es haber trabajado con grandes nombres — es haber cruzado dos mundos que
                casi nunca se tocan: <strong className="text-[#111] font-medium">marketing de captación e
                ingeniería financiera</strong>, aplicados al sector social latinoamericano. Diseño estrategias
                con ROI medible, estructuro presupuestos y presento resultados ante juntas directivas con la
                misma rigurosidad de un analista financiero.
              </p>

              <p className="text-[0.875rem] text-[#555] leading-[1.9] mb-8">
                En ese camino he gestionado más de <strong className="text-[#111] font-medium">83.500 donantes</strong>,
                recaudado más de <strong className="text-[#111] font-medium">$5.200 millones de pesos</strong>, y
                mantenido tasas de retención superiores al{" "}
                <strong className="text-[#111] font-medium">85% durante 5 años consecutivos</strong> en Save the
                Children Colombia — triplicando el promedio del sector (43%).
              </p>

              {/* Métricas */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  { num: "83.500+",  label: "Donantes gestionados" },
                  { num: "$5.200M", label: "COP recaudados" },
                  { num: "85%",      label: "Retención sostenida" },
                  { num: "+15 años", label: "Sector social LATAM" },
                ].map(({ num, label }) => (
                  <div key={num} className="bg-[#f5f4f1] rounded-[3px] px-3 py-3 text-center">
                    <p style={serif} className="text-[1.1rem] text-[#111] leading-none">{num}</p>
                    <p className="text-[9px] text-[#aaa] uppercase tracking-wider mt-1.5 leading-snug">{label}</p>
                  </div>
                ))}
              </div>

              <a
                href="/contacto"
                className="inline-flex items-center gap-1.5 text-[12px] text-[#111] border-b border-[#111] pb-px hover:text-[#555] hover:border-[#555] transition-colors"
              >
                Hablemos para ver cómo trabajar juntos <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formación */}
      <section className="bg-[#f5f4f1] border-b border-[#e8e6e1]">
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between border-b border-[#111] pb-4 mb-8">
            <h2 style={serif} className="text-[1.1rem] font-normal text-[#111]">Formación académica</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { titulo: "Maestría en Marketing", inst: "Universidad Externado de Colombia", año: "2018–2020" },
              { titulo: "Ingeniería Financiera",  inst: "Universidad Piloto de Colombia",    año: "2003–2009" },
              { titulo: "Diplomado Control y Gestión Presupuestal", inst: "Universidad Nacional de Colombia", año: "2025" },
              { titulo: "Diplomado en Mercado de Capitales", inst: "Universidad Piloto de Colombia", año: "2009" },
            ].map((f) => (
              <div key={f.titulo} className="border-t border-[#ddd] pt-4">
                <p className="text-[12.5px] font-medium text-[#111] mb-1">{f.titulo}</p>
                <p className="text-[11.5px] text-[#888]">{f.inst}</p>
                <p className="text-[10px] text-[#bbb] mt-1 uppercase tracking-wider">{f.año}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
