import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-7xl font-light gradient-text">404</h1>
          <div className="h-0.5 w-16 bg-slate-700 mx-auto"></div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-medium text-white">Página não encontrada</h2>
          <p className="text-gray-400 leading-relaxed">
            A página <span className="font-medium text-gray-300">"{pageName}"</span> não existe neste site.
          </p>
        </div>

        <div className="pt-6">
          <Link to="/">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Home className="w-4 h-4 mr-2" />
              Voltar ao início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
