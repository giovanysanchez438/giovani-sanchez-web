import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header"; // Importación única
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import BlogPage from "./pages/Blog";
import LibroONG from "./pages/LibroONG";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/perfil" component={Perfil} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/libro-ong" component={LibroONG} />
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
            <Header /> {/* Solo aquí debe existir el Header */}
            <Router />
            <Toaster />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
