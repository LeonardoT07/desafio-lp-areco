import React from 'react';
import { BarChart3, TrendingUp, AlertTriangle, Package, DollarSign } from 'lucide-react';
import { Button } from './Button';

export const DashboardValue: React.FC = () => {
  return (
    <section id="visibility" className="py-16 lg:py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      
      <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-areco-600/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-blue-600/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold text-white mb-4 lg:mb-6 leading-tight">
              Visibilidade para agir, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-areco-400 to-blue-300">não só para registrar.</span>
            </h2>
            
            <p className="text-slate-300 text-base lg:text-lg mb-4 lg:mb-6 leading-relaxed">
              O <strong>VSat 4.0</strong> não é apenas um repositório de dados passados. Ele é uma ferramenta ativa que monitora sua operação e avisa onde você precisa atuar.
            </p>
            
            <p className="text-slate-400 text-base lg:text-lg mb-8 lg:mb-10 leading-relaxed">
              Identifique gargalos na produção, priorize ações de compra e acompanhe o impacto financeiro de cada decisão em tempo real. Tenha o controle total na palma da mão.
            </p>

            <Button size="lg" className="w-full sm:w-auto bg-areco-600 hover:bg-areco-500 text-white shadow-xl shadow-areco-600/20 px-8 lg:px-10 h-12 lg:h-14 font-bold border-t border-white/20" onClick={() => window.location.href='#contact'}>
                Agendar demonstração
            </Button>
          </div>

          <div className="order-2 lg:order-1 relative group w-full">
             <div className="absolute -inset-1 bg-gradient-to-r from-areco-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

             <div className="bg-slate-950 rounded-xl shadow-2xl border border-slate-800 p-4 lg:p-6 relative z-10">
                <div className="flex items-center justify-between mb-6 lg:mb-8 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-areco-500/10 rounded-lg flex items-center justify-center text-areco-400 border border-areco-500/20 flex-shrink-0">
                            <BarChart3 size={20} />
                        </div>
                        <div>
                            <span className="block font-bold text-white text-sm lg:text-base">Painel de Controle VSat</span>
                            <span className="block text-[10px] lg:text-xs text-slate-400">Dados consolidados em tempo real</span>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                </div>

                <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-center justify-between group/item hover:bg-slate-900/50 p-2 rounded-lg transition-colors">
                        <div className="flex items-center gap-3 lg:gap-4">
                            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20"><Package size={18} className="lg:w-[20px]"/></div>
                            <div>
                                <p className="text-[10px] lg:text-xs text-slate-400 font-medium uppercase tracking-wide">Giro de Estoque</p>
                                <p className="text-lg lg:text-xl font-bold text-white">32 dias</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] lg:text-xs font-bold text-green-400 flex items-center justify-end bg-green-500/10 px-2 lg:px-3 py-1 rounded-full border border-green-500/20">
                                <TrendingUp size={12} className="mr-1" /> Otimizado
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between group/item hover:bg-slate-900/50 p-2 rounded-lg transition-colors">
                        <div className="flex items-center gap-3 lg:gap-4">
                            <div className="p-2 bg-green-500/10 text-green-400 rounded-md border border-green-500/20"><DollarSign size={18} className="lg:w-[20px]"/></div>
                            <div>
                                <p className="text-[10px] lg:text-xs text-slate-400 font-medium uppercase tracking-wide">Nível de Serviço</p>
                                <p className="text-lg lg:text-xl font-bold text-white">98.5%</p>
                            </div>
                        </div>
                        <div className="w-28 lg:w-32">
                             <div className="w-full bg-slate-800 rounded-full h-1.5 mb-1 overflow-hidden">
                                <div className="bg-green-500 h-1.5 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" style={{width: '98%'}}></div>
                            </div>
                            <p className="text-[10px] text-slate-500 text-right">Meta atingida</p>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-8 bg-slate-900/50 rounded-xl p-4 lg:p-5 border border-slate-800">
                        <div className="flex items-center gap-2 mb-3 lg:mb-4">
                            <AlertTriangle size={16} className="text-amber-500" />
                            <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">Alertas de Ruptura (IA)</p>
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <div className="flex items-center justify-between text-xs bg-slate-950 p-3 rounded border border-slate-800 shadow-sm hover:border-slate-700 transition-colors cursor-default">
                                <span className="font-medium text-slate-300 truncate mr-2">MP Aço Inox (Alta Prioridade)</span>
                                <span className="text-red-400 font-bold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 whitespace-nowrap">3 dias</span>
                            </div>
                            <div className="flex items-center justify-between text-xs bg-slate-950 p-3 rounded border border-slate-800 shadow-sm hover:border-slate-700 transition-colors cursor-default">
                                <span className="font-medium text-slate-300 truncate mr-2">Embalagem CX20</span>
                                <span className="text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 whitespace-nowrap">7 dias</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};