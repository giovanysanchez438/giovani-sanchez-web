import { Link } from "wouter";

/**
 * Página /servicios
 *
 * Estructura:
 *  1. Hero
 *  2. Por qué trabajar conmigo (3 diferenciadores breves)
 *  3. Tres pilares (Diagnóstico / Estrategia / Implementación)
 *  4. A quién acompaño (3 tipos de organización)
 *  5. Cómo trabajo (4 pasos)
 *  6. Caso real (placeholder editable)
 *  7. CTA final
 *
 * Tono: primera persona singular. Coherente con dossier ejecutivo.
 * Paleta: navy (#0a2540) + crema/blanco + acentos azul claro.
 */

export default function Servicios() {
  return (
    <div className="bg-white text-[#0a2540]">
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden bg-[#0a2540] text-white">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,.4) 0px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-28 lg:pt-32 lg:pb-36">
          <p className="text-xs lg:text-sm tracking-[0.3em] font-medium text-[#7eb6e6] mb-8 uppercase">
            Consultoría · Sector Social · Latinoamérica
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8 max-w-4xl">
            Acompaño a tu organización a captar fondos con visión financiera y
            estrategia medible.
          </h1>

          <p className="text-lg lg:text-xl text-[#c8dcef] leading-relaxed max-w-3xl mb-10">
            Combino 15+ años en marketing y fundraising con formación en ingeniería
            financiera para diseñar programas de captación que sí funcionan en
            cifras, no solo en presentación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a2540] font-semibold rounded-sm hover:bg-[#c8dcef] transition-colors"
            >
              Conversemos
            </a>
            <a
              href="#pilares"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors"
            >
              Ver cómo trabajo
            </a>
          </div>
        </div>
      </section>

      {/* ============== DIFERENCIADORES ============== */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <div className="text-5xl font-serif text-[#0a2540] mb-3">01</div>
            <h3 className="font-serif text-xl mb-3">Cifras antes que opiniones</h3>
            <p className="text-[#475569] leading-relaxed">
              Cada estrategia parte de un diagnóstico financiero del programa de
              captación. No diseño campañas sin saber primero el ROI esperado.
            </p>
          </div>
          <div>
            <div className="text-5xl font-serif text-[#0a2540] mb-3">02</div>
            <h3 className="font-serif text-xl mb-3">Trayectoria verificable</h3>
            <p className="text-[#475569] leading-relaxed">
              83.500 donantes gestionados y COP $5.200M captados en Save the
              Children, Fundación PLAN, Habitat for Humanity, Aldeas SOS y BID.
            </p>
          </div>
          <div>
            <div className="text-5xl font-serif text-[#0a2540] mb-3">03</div>
            <h3 className="font-serif text-xl mb-3">Cierre del círculo</h3>
            <p className="text-[#475569] leading-relaxed">
              No me retiro dejando un PDF. Te acompaño hasta que tu equipo opera la
              estrategia con autonomía y métricas claras.
            </p>
          </div>
        </div>
      </section>

      {/* ============== TRES PILARES ============== */}
      <section id="pilares" className="bg-[#f5f3ee] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="text-xs tracking-[0.3em] font-medium text-[#0a2540] mb-4 uppercase">
              Cómo trabajo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Tres pilares que se complementan, no servicios sueltos.
            </h2>
          </div>

          <div className="space-y-px bg-[#0a2540]/10">
            <Pilar
              numero="I"
              titulo="Diagnóstico con visión financiera"
              subtitulo="El punto de partida que casi nadie hace bien"
              descripcion="Antes de proponer estrategia, mido. Reviso tu base de donantes, costos de adquisición por canal, ratios de retención, eficiencia de inversión y rentabilidad por programa. Salimos del diagnóstico con un mapa claro de dónde está la fuga de valor y dónde la oportunidad real."
              utilCuando="Tu organización lleva años haciendo fundraising sin saber cuál canal genera ROI real."
              entregables={[
                "Auditoría financiera del programa de captación",
                "Análisis de canales por costo y rentabilidad",
                "Mapa de oportunidades priorizado",
              ]}
            />
            <Pilar
              numero="II"
              titulo="Estrategia y captación de donantes"
              subtitulo="Donde el diagnóstico se convierte en ingresos"
              descripcion="Diseño y ejecuto contigo programas de captación de donantes individuales y estrategia de fundraising integral: propuesta de valor, mix de canales (digital, presencial, telemarketing), segmentación, embudos de conversión y planes de fidelización. Apoyado siempre en cifras y proyecciones financieras concretas."
              utilCuando="Necesitas crecer base de donantes o reducir costo de adquisición sin sacrificar calidad."
              entregables={[
                "Plan estratégico de fundraising 12-24 meses",
                "Programa de captación individual con ROI proyectado",
                "Modelo de fidelización por segmento",
              ]}
            />
            <Pilar
              numero="III"
              titulo="Implementación y capacidades"
              subtitulo="Para que la estrategia no se quede en presentación"
              descripcion="Acompaño la puesta en marcha: configuración de CRM, automatizaciones, dashboards de seguimiento, y formación al equipo interno para que la operación sea sostenible cuando yo me retire del proyecto. Que tu equipo aprenda haciendo, no escuchando."
              utilCuando="Tienes estrategia pero no el know-how operativo para ejecutarla con disciplina."
              entregables={[
                "Implementación de CRM y automatizaciones",
                "Dashboards de seguimiento por KPI",
                "Capacitación on-the-job al equipo interno",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ============== A QUIÉN ACOMPAÑO ============== */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-[0.3em] font-medium text-[#0a2540] mb-4 uppercase">
            A quién acompaño
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
            Trabajo con organizaciones del sector social en distintos momentos de
            su madurez.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Sector
            titulo="ONGs medianas y grandes establecidas"
            descripcion="Organizaciones con base de donantes consolidada que necesitan optimizar ROI, reducir costo de adquisición o reactivar donantes inactivos."
            ejemplos="5.000+ donantes activos, presupuesto anual COP $1.000M+"
          />
          <Sector
            titulo="ONGs pequeñas o emergentes"
            descripcion="Fundaciones que están construyendo su programa de fundraising y necesitan estructura, propuesta de valor diferenciada y primeros canales de captación."
            ejemplos="Equipo pequeño, primeras campañas, búsqueda de sostenibilidad"
          />
          <Sector
            titulo="Fundaciones corporativas"
            descripcion="Áreas de inversión social de empresas que requieren rigor financiero, medición de impacto y estrategias de relacionamiento con donantes corporativos."
            ejemplos="Grupos empresariales, cooperación con casa matriz"
          />
        </div>
      </section>

      {/* ============== PROCESO ============== */}
      <section className="bg-[#0a2540] text-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="text-xs tracking-[0.3em] font-medium text-[#7eb6e6] mb-4 uppercase">
              Cómo arrancamos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Cuatro pasos. Sin sorpresas, sin contratos eternos.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <Paso
              numero="01"
              titulo="Conversación inicial"
              tiempo="30-60 minutos · Sin costo"
              descripcion="Entiendo tu organización, tu programa actual de captación y los retos que tienes hoy. Si veo que puedo aportar valor real, sigo. Si no, te lo digo."
            />
            <Paso
              numero="02"
              titulo="Propuesta concreta"
              tiempo="3-5 días después"
              descripcion="Te envío una propuesta con alcance, entregables, plazos y honorarios definidos según el caso. No hay sorpresas en la factura."
            />
            <Paso
              numero="03"
              titulo="Trabajo conjunto"
              tiempo="Según alcance: 4 semanas a 6 meses"
              descripcion="Trabajo con tu equipo, no aparte. Reuniones semanales o quincenales, avances visibles, y entregables tangibles en cada fase."
            />
            <Paso
              numero="04"
              titulo="Cierre y autonomía"
              tiempo="Última fase del proyecto"
              descripcion="Antes de retirarme, tu equipo debe poder operar la estrategia sin mí. Esa es mi medida de éxito, no la duración del contrato."
            />
          </div>
        </div>
      </section>

      {/* ============== CASO REAL (placeholder) ============== */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="border-l-4 border-[#0a2540] pl-8 lg:pl-12">
          <p className="text-xs tracking-[0.3em] font-medium text-[#0a2540] mb-4 uppercase">
            Un caso real
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-10 leading-tight">
            [Título del caso — pendiente que escribamos juntos]
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-[#334155]">
            <div>
              <h3 className="font-semibold text-[#0a2540] text-base uppercase tracking-wider mb-2">
                Situación
              </h3>
              <p>
                [Aquí va la situación de la organización al momento de empezar.
                Cifras concretas: tamaño base donantes, costo adquisición actual,
                tasa retención, ingresos.]
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0a2540] text-base uppercase tracking-wider mb-2">
                Acción
              </h3>
              <p>
                [Qué hiciste tú específicamente. Estrategia diseñada, canales
                activados, decisiones tomadas, equipo formado.]
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0a2540] text-base uppercase tracking-wider mb-2">
                Resultado
              </h3>
              <p>
                [Cifras de salida: nuevos donantes, ingresos generados, ROI, %
                de mejora vs línea base.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CTA FINAL ============== */}
      <section
        id="contacto"
        className="bg-[#f5f3ee] py-24 lg:py-32 px-6 lg:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            ¿Tu organización necesita captar mejor, no solo más?
          </h2>
          <p className="text-lg text-[#475569] mb-12 max-w-2xl mx-auto leading-relaxed">
            Conversemos 30 minutos sin compromiso. Te digo si puedo aportar y, si
            no, te oriento hacia quién sí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-[#0a2540] text-white font-semibold rounded-sm hover:bg-[#1a3a5c] transition-colors">
                Agendar conversación
              </a>
            </Link>
            <a
              href="https://co.linkedin.com/in/giovanisanchezv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#0a2540] text-[#0a2540] font-semibold rounded-sm hover:bg-[#0a2540] hover:text-white transition-colors"
            >
              Hablar por LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============== SUBCOMPONENTES ============== */

interface PilarProps {
  numero: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  utilCuando: string;
  entregables: string[];
}

function Pilar({
  numero,
  titulo,
  subtitulo,
  descripcion,
  utilCuando,
  entregables,
}: PilarProps) {
  return (
    <div className="bg-[#f5f3ee] p-8 lg:p-12">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-3">
          <div className="font-serif text-6xl lg:text-7xl text-[#0a2540] leading-none mb-4">
            {numero}
          </div>
          <p className="text-xs tracking-[0.2em] font-medium text-[#475569] uppercase">
            Pilar {numero}
          </p>
        </div>

        <div className="lg:col-span-9">
          <h3 className="font-serif text-2xl lg:text-3xl text-[#0a2540] mb-2 leading-tight">
            {titulo}
          </h3>
          <p className="italic text-[#475569] mb-6 text-base lg:text-lg">
            {subtitulo}
          </p>

          <p className="text-[#334155] leading-relaxed mb-6 text-base lg:text-lg">
            {descripcion}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-[#0a2540]/15">
            <div>
              <p className="text-xs tracking-wider font-semibold text-[#0a2540] uppercase mb-2">
                Útil cuando
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                {utilCuando}
              </p>
            </div>
            <div>
              <p className="text-xs tracking-wider font-semibold text-[#0a2540] uppercase mb-2">
                Entregables típicos
              </p>
              <ul className="space-y-1">
                {entregables.map((e, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#475569] leading-relaxed flex"
                  >
                    <span className="text-[#0a2540] mr-2">·</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SectorProps {
  titulo: string;
  descripcion: string;
  ejemplos: string;
}

function Sector({ titulo, descripcion, ejemplos }: SectorProps) {
  return (
    <div className="border-t-2 border-[#0a2540] pt-6">
      <h3 className="font-serif text-xl text-[#0a2540] mb-4 leading-snug">
        {titulo}
      </h3>
      <p className="text-[#475569] leading-relaxed mb-4 text-sm">
        {descripcion}
      </p>
      <p className="text-xs italic text-[#7c8a9c]">
        {ejemplos}
      </p>
    </div>
  );
}

interface PasoProps {
  numero: string;
  titulo: string;
  tiempo: string;
  descripcion: string;
}

function Paso({ numero, titulo, tiempo, descripcion }: PasoProps) {
  return (
    <div className="border-t border-white/15 pt-8">
      <div className="font-serif text-5xl text-[#7eb6e6] mb-4 leading-none">
        {numero}
      </div>
      <h3 className="font-serif text-2xl mb-2 leading-snug">{titulo}</h3>
      <p className="text-sm text-[#7eb6e6] mb-4 tracking-wide">{tiempo}</p>
      <p className="text-[#c8dcef] leading-relaxed">{descripcion}</p>
    </div>
  );
}
