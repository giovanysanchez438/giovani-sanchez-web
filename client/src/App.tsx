import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Servicios from "./pages/Servicios";
import Experiencia from "./pages/Experiencia";
import Certificaciones from "./pages/Certificaciones";
import Principios from "./pages/Principios";
import Contacto from "./pages/Contacto";
import BlogPage from "./pages/Blog";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/perfil"} component={Perfil} />
      <Route path={"/servicios"} component={Servicios} />
      <Route path={"/experiencia"} component={Experiencia} />
      <Route path={"/certificaciones"} component={Certificaciones} />
      <Route path={"/principios"} component={Principios} />
      <Route path={"/contacto"} component={Contacto} />
      <Route path={"/blog"} component={BlogPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
