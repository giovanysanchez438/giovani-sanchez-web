import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";

/* Páginas existentes */
import Home          from "./pages/Home";
import Experiencia   from "./pages/Experiencia";
import Certificaciones from "./pages/Certificaciones";
import Contacto      from "./pages/Contacto";
import BlogPage      from "./pages/Blog";
import LibroONG      from "./pages/LibroONG";
import NotFound      from "@/pages/NotFound";

/* Páginas nuevas — las creamos a continuación */
import SobreMi       from "./pages/SobreMi";
import Trabajo       from "./pages/Trabajo";

function Router() {
  return (
    <Switch>
      <Route path="/"             component={Home}           />
      <Route path="/sobre-mi"     component={SobreMi}        />
      <Route path="/trabajo"      component={Trabajo}        />
      <Route path="/experiencia"  component={Experiencia}    />
      <Route path="/contacto"     component={Contacto}       />
      <Route path="/blog"         component={BlogPage}       />
      <Route path="/libro-ong"    component={LibroONG}       />
      <Route path="/certificaciones" component={Certificaciones} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <div className="flex flex-col min-h-screen bg-white">
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
