import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <span className="font-bold text-xl tracking-tight">VSat 4.0</span>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Tecnologia e inteligência para gestão empresarial. Conectando pessoas e processos há mais de 20 anos com a expertise da Areco.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#ecosystem" className="hover:text-areco-400 transition-colors">Ecossistema</a></li>
              <li><a href="#pillars" className="hover:text-areco-400 transition-colors">Físico, Financeiro, Fiscal</a></li>
              <li><a href="#sectors" className="hover:text-areco-400 transition-colors">Setores</a></li>
              <li><a href="#tech" className="hover:text-areco-400 transition-colors">Tecnologia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://agent.areco.com.br" target="_blank" className="hover:text-areco-400 transition-colors">Portal de Tickets</a></li>
              <li><a href="#" className="hover:text-areco-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-areco-400 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-areco-500" /> 
                (19) 3849-4355
              </li>
              <li className="flex items-center gap-2">
                <span className="text-areco-500 font-bold text-xs">WA</span>
                (19) 98243-0079
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-areco-500" />
                contato@areco.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2026 Areco Sistemas Empresariais. CNPJ: 58.403.080/0001-06. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};