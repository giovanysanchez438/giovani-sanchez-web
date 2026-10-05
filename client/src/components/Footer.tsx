import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";

const serif = { fontFamily: "Georgia,'Times New Roman',serif" };

const navItems = [
  { name: "Inicio",          href: "/"                },
  { name: "Perfil",          href: "/sobre-mi"        },
  { name: "Servicios",       href: "/trabajo"         },
  { name: "Trayectoria",     href: "/experiencia"     },
  { name: "Libro",           href: "/libro-ong"       },
  { name: "Artículos",       href: "/blog"            },
  { name: "Certificaciones", href: "/certificaciones" },
  { name: "Contacto",        href: "/contacto"        },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">

          {/* Marca */}
          <div>
            <p style={serif} className="text-[1.15rem] leading-snug mb-2">Giovani Sánchez Vargas</p>
            <p className="text-[12px] text-white/60 leading-relaxed max-w-[320px] mb-5">
              Marketing, fundraising e ingeniería financiera para el sector social en América Latina.
            </p>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-1.5 text-[11px] font-medium border border-white/30 px-4 py-2 rounded-[2px] hover:bg-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Descargar CV
            </a>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-[10px] tracking-[0.12em] uppercase text-white/40 mb-4">Navegación</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a className="text-[12px] text-white/70 hover:text-white transition-colors">{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-[10px] tracking-[0.12em] uppercase text-white/40 mb-4">Contacto</p>
            <ul className="space-y-2.5 text-[12px] text-white/70">
              <li>
                <a href="mailto:giovanysanchez438@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors break-all">
                  <Mail className="w-3.5 h-3.5 shrink-0" /> giovanysanchez438@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+573123344130" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 shrink-0" /> +57 312 334 4130
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/giovanisanchezv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 shrink-0" /> linkedin.com/in/giovanisanchezv
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0" /> Bogotá, Colombia
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/40">© {new Date().getFullYear()} Giovani Sánchez Vargas. Todos los derechos reservados.</p>
          <p className="text-[11px] text-white/40">Bogotá · América Latina</p>
        </div>
      </div>
    </footer>
  );
}
