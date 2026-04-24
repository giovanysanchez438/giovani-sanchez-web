const orgs = [
  { name: "Save the Children", type: "ONG Internacional" },
  { name: "Fundación PLAN", type: "ONG Internacional" },
  { name: "Habitat for Humanity", type: "ONG Internacional" },
  { name: "Aldeas Infantiles SOS", type: "ONG Internacional" },
  { name: "BID / Banco Mundial", type: "Cooperación Multilateral" },
];

export default function TrustBar() {
  return (
    <section className="py-10 bg-gray-50 border-y border-gray-200">
      <div className="container max-w-5xl mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-7">
          Experiencia en organizaciones de clase mundial
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {orgs.map((org) => (
            <div
              key={org.name}
              className="flex flex-col items-center px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm min-w-[150px]"
            >
              <span className="text-sm font-bold text-[#0F3A66] leading-tight text-center">
                {org.name}
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-wide mt-1">
                {org.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
