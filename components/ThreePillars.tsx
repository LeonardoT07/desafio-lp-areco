import React from 'react';
import { Package, LineChart, Scale } from 'lucide-react';

export const ThreePillars: React.FC = () => {
  return (
    <section id="pillars" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-areco-900 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Os 3 pilares da gestão trabalhando juntos
          </h2>
          <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto">
             No <strong>ERP da Areco</strong>, gestão operacional e controladoria compartilham uma visão única da verdade.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col hover:bg-white/10 transition-colors">
            <div className="mb-5 lg:mb-6 text-areco-400">
                <Package size={40} className="lg:w-12 lg:h-12" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">Operação</h3>
            <p className="text-slate-400 text-xs lg:text-sm uppercase tracking-wider font-semibold mb-5 lg:mb-6">O que acontece</p>
            
            <ul className="space-y-3 mb-6 lg:mb-8 flex-1">
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-areco-500 rounded-full mt-1.5"></span>
                    Estoque, produção e logística
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-areco-500 rounded-full mt-1.5"></span>
                    Apontamentos em tempo real
                </li>
            </ul>
            
            <div className="pt-6 border-t border-white/10">
                <p className="text-white font-bold text-sm">Base para todas as decisões</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-areco-900/50 to-slate-900 border border-areco-500/30 rounded-2xl p-6 lg:p-8 flex flex-col relative shadow-lg lg:-translate-y-4">
            <div className="mb-5 lg:mb-6 text-areco-400">
                <LineChart size={40} className="lg:w-12 lg:h-12" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">Financeiro</h3>
            <p className="text-slate-400 text-xs lg:text-sm uppercase tracking-wider font-semibold mb-5 lg:mb-6">O impacto</p>
            
            <ul className="space-y-3 mb-6 lg:mb-8 flex-1">
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-areco-500 rounded-full mt-1.5"></span>
                    Caixa e contas a pagar/receber
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-areco-500 rounded-full mt-1.5"></span>
                    Fluxo projetado e conciliação
                </li>
            </ul>
            
            <div className="pt-6 border-t border-white/10">
                <p className="text-white font-bold text-sm">Impacto direto no resultado</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col hover:bg-white/10 transition-colors">
            <div className="mb-5 lg:mb-6 text-areco-400">
                <Scale size={40} className="lg:w-12 lg:h-12" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">Fiscal</h3>
            <p className="text-slate-400 text-xs lg:text-sm uppercase tracking-wider font-semibold mb-5 lg:mb-6">O registro correto</p>
            
            <ul className="space-y-3 mb-6 lg:mb-8 flex-1">
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-areco-500 rounded-full mt-1.5"></span>
                    Escrituração automatizada
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-areco-500 rounded-full mt-1.5"></span>
                    Conformidade desde a origem
                </li>
            </ul>
            
            <div className="pt-6 border-t border-white/10">
                <p className="text-white font-bold text-sm">Segurança e previsibilidade</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};