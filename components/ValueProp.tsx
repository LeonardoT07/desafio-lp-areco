import React from 'react';
import { ShieldCheck, Zap, BarChart3 } from 'lucide-react';

export const ValueProp: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-areco-600 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl translate-y-1/4 translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A inteligência que faltava para unir sua empresa
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              O Areco ERP elimina silos de informação. Nossa plataforma conecta todos os departamentos em um fluxo único de verdade, transformando complexidade em controle.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-areco-600/20 flex items-center justify-center flex-shrink-0 text-areco-400 border border-areco-600/30">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Processos Automatizados</h4>
                  <p className="text-slate-400 text-sm">Reduza o erro humano e acelere fluxos de aprovação, faturamento e logística.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-areco-600/20 flex items-center justify-center flex-shrink-0 text-areco-400 border border-areco-600/30">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visão 360º em Tempo Real</h4>
                  <p className="text-slate-400 text-sm">Dashboards personalizáveis para monitorar KPIs financeiros e operacionais instantaneamente.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-areco-600/20 flex items-center justify-center flex-shrink-0 text-areco-400 border border-areco-600/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Segurança e Compliance</h4>
                  <p className="text-slate-400 text-sm">Dados criptografados e adequação total à LGPD e legislações fiscais vigentes.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2">
             <div className="relative rounded-xl bg-white/5 border border-white/10 p-2 backdrop-blur-sm">
                <img 
                  src="https://picsum.photos/600/400?blur=2" 
                  alt="Integração de dados" 
                  className="rounded-lg w-full h-auto shadow-2xl"
                />
                <div className="absolute bottom-8 right-8 bg-white text-slate-900 p-6 rounded-lg shadow-xl max-w-xs">
                   <p className="text-sm font-semibold text-slate-500 mb-2">Status da Integração</p>
                   <div className="w-full bg-slate-200 h-2 rounded-full mb-2">
                     <div className="bg-green-500 h-2 rounded-full w-full"></div>
                   </div>
                   <div className="flex justify-between text-xs font-bold">
                     <span>Financeiro</span>
                     <span className="text-green-600">Conectado</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold mt-1">
                     <span>Estoque</span>
                     <span className="text-green-600">Conectado</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};