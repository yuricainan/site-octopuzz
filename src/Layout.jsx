import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { title: "Início", url: createPageUrl("Home") },
  { title: "Sobre", url: createPageUrl("About") },
  { title: "Serviços", url: createPageUrl("Services") },
  { title: "Cases", url: createPageUrl("Cases") },
  { title: "Blog", url: createPageUrl("Blog") },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Scroll para o topo quando a página muda
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <style>
        {`
          :root {
            --primary: 217 91% 60%;
            --primary-foreground: 222.2 84% 4.9%;
            --secondary: 217 32% 17%;
            --secondary-foreground: 210 40% 98%;
            --muted: 217 32% 17%;
            --muted-foreground: 215 20.2% 65.1%;
            --accent: 217 32% 17%;
            --accent-foreground: 210 40% 98%;
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 210 40% 98%;
            --border: 217 32% 17%;
            --input: 217 32% 17%;
            --ring: 217 91% 60%;
            --background: 224 71% 4%;
            --foreground: 210 40% 98%;
          }

          body {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
            color: #f8fafc;
          }

          .gradient-text {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .glass-effect {
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(99, 102, 241, 0.2);
          }

          .service-card {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
            border: 1px solid rgba(99, 102, 241, 0.2);
            backdrop-filter: blur(16px);
          }

          /* Aurora: os blobs de fundo desfocados ganham um movimento lento */
          .aurora-blob {
            animation-duration: 12s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
          .aurora-blob-1 { animation-name: aurora-drift-a; }
          .aurora-blob-2 { animation-name: aurora-drift-b; animation-duration: 14s; }
          .aurora-blob-3 { animation-name: aurora-drift-c; animation-duration: 10s; }
          @keyframes aurora-drift-a {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(40px, -30px) scale(1.08); }
          }
          @keyframes aurora-drift-b {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-35px, 25px) scale(0.94); }
          }
          @keyframes aurora-drift-c {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20px, 30px) scale(1.05); }
          }
          @media (prefers-reduced-motion: reduce) {
            .aurora-blob { animation: none; }
          }

          /* Card com brilho seguindo o mouse (use junto com um onMouseMove
             que atualiza --mx/--my em px relativos ao card) */
          .spotlight-card {
            position: relative;
            overflow: hidden;
          }
          .spotlight-card::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            opacity: 0;
            transition: opacity 0.25s;
            background: radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(139, 92, 246, 0.28), transparent 70%);
          }
          .spotlight-card:hover::before {
            opacity: 1;
          }
          .spotlight-card > * {
            position: relative;
            z-index: 1;
          }

          /* Card com leve inclinação 3D ao passar o mouse (use com um
             onMouseMove que seta transform: rotateX/rotateY inline) */
          .tilt-card {
            transition: transform 0.1s ease-out;
            will-change: transform;
            transform-style: preserve-3d;
          }

          /* Grão sutil por cima de tudo, pra tirar a cara de gradiente liso */
          .noise-overlay {
            position: fixed;
            inset: 0;
            z-index: 1;
            pointer-events: none;
            opacity: 0.045;
            mix-blend-mode: overlay;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          }
        `}
      </style>

      <div className="noise-overlay"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3397027a9_LOGOPOSITIVO.png"
                alt="Octopuzz"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.url
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex items-center gap-4">
                <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                   <Link to={createPageUrl("Contact")}>Fale Conosco</Link>
                </Button>
                <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <a href="https://erp.octopuzz.com.br" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    ERP
                  </a>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-effect"
            >
              <div className="px-4 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      location.pathname === item.url
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="pt-4 mt-2 space-y-2 border-t border-slate-700/50">
                   <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                      <Link to={createPageUrl("Contact")} onClick={() => setMobileMenuOpen(false)}>Fale Conosco</Link>
                   </Button>
                   <Button asChild variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                      <a href="https://erp.octopuzz.com.br" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        ERP
                      </a>
                   </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3397027a9_LOGOPOSITIVO.png"
                alt="Octopuzz"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 max-w-md">
                Soluções tecnológicas inteligentes para transformar seu negócio.
                Automação, IA, consultoria e desenvolvimento personalizado.
              </p>
              <div className="mt-6">
                <p className="text-sm text-gray-400">📍 Fortaleza - CE</p>
                <p className="text-sm text-gray-400">📞 (85) 9 8501-1755</p>
                <p className="text-sm text-gray-400">✉️ contato@octopuzz.com.br</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Equipamentos e Manutenção</li>
                <li>Análise de Dados</li>
                <li>ERP/CRM/PDV</li>
                <li>Desenvolvimento</li>
                <li>Consultoria</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl("About")} className="hover:text-white">Sobre</Link></li>
                <li><Link to={createPageUrl("Cases")} className="hover:text-white">Cases</Link></li>
                <li><Link to={createPageUrl("Blog")} className="hover:text-white">Blog</Link></li>
                <li><Link to={createPageUrl("Contact")} className="hover:text-white">Contato</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Octopuzz. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
