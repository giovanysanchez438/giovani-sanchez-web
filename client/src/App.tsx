import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Servicios from "./pages/Servicios";
import Experiencia from "./pages/Experiencia";
import Certificaciones from "./pages/Certificaciones";
import Principios from "./pages/Principios";
import Contacto from "./pages/Contacto";
import BlogPage from "./pages/Blog";
import LibroONG from "./pages/LibroONG";
import NotFound from "@/pages/NotFound";

/**
 * Sistema de enrutamiento profesional enfocado en SEO.
 * Centraliza todas las secciones clave de tu trayectoria.
 */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/perfil" component={Perfil} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/experiencia" component={Experiencia} />
      <Route path="/certificaciones" component={Certificaciones} />
      <Route path="/principios" component={Principios} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/libro-ong" component={LibroONG} />
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Componente raíz del proyecto.
 * Incluye el Header de forma global para evitar el error de doble menú en móviles.
 */
export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <div className="flex flex-col min-h-screen bg-white">
            {/* El Header se coloca aquí para que sea único en todo el sitio */}
            <Header />
            
            <main className="flex-grow">
              <Router />
            </main>

            <Toaster />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
