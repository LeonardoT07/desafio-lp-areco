import React from 'react';
import { CheckCircle2, Bell, TrendingUp, ShieldAlert, Wallet } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute -top-20 right-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-areco-100/50 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="col-span-12 lg:col-span-6 mb-12 lg:mb-0 text-center lg:text-left">
            
            <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold text-slate-900 leading-[1.2] mb-6">
              O ERP web integrado para <span className="text-slate-900 border-b-4 border-areco-500">operação</span>, <span className="text-areco-600">financeiro</span> e <span className="text-areco-600">fiscal</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              Unifique dados, reduza retrabalho e tenha visibilidade para decidir com segurança. A plataforma definitiva da Areco, acessível pelo navegador.
            </p>

            <div className="space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-areco-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-base lg:text-lg font-medium">Uma base única para operação, caixa e fiscal</span>
                </div>
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-areco-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-base lg:text-lg font-medium">Visão diária do que exige ação imediata</span>
                </div>
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-areco-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-base lg:text-lg font-medium">Motor fiscal nativo preparado para IBS/CBS</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <Button size="lg" fullWidth className="sm:w-auto shadow-xl shadow-areco-600/20 h-14 lg:h-16 lg:px-10 text-lg lg:text-xl font-bold transition-transform active:scale-95 lg:hover:-translate-y-1" onClick={() => window.location.href='#contact'}>
                Agendar demonstração
              </Button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 relative perspective-1000">
            <div className="relative rounded-xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden ring-1 ring-white/10 lg:transform lg:rotate-y-[-5deg] lg:rotate-x-[5deg] lg:transition-transform lg:hover:rotate-0 lg:duration-700 mx-auto max-w-[500px] lg:max-w-none">
               
               <div className="h-12 lg:h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 lg:px-6">
                 <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 lg:gap-2">
                        <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-500"></div>
                        <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500"></div>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 lg:gap-4">
                    <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400" />
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-areco-600 rounded-lg flex items-center justify-center text-[10px] lg:text-xs font-bold text-white">VS</div>
                 </div>
               </div>

               <div className="bg-slate-900 p-4 lg:p-8 min-h-[380px] lg:min-h-[450px]">
                    <div className="flex justify-between items-end mb-6 lg:mb-8">
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white">Visão Executiva</h3>
                            <p className="text-xs lg:text-sm text-slate-400">Atualizado em tempo real</p>
                        </div>
                        <span className="hidden sm:block px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold uppercase tracking-wider">
                            VSat Integrado
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
                        <div className="bg-slate-800/50 p-4 lg:p-5 rounded-xl border border-slate-700 hover:border-areco-500 transition-colors group">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-areco-500/20 rounded-lg text-areco-400 group-hover:text-areco-300">
                                    <Wallet size={20} className="lg:w-6 lg:h-6" />
                                </div>
                                <span className="text-slate-300 font-semibold text-sm lg:text-base">Fluxo de Caixa</span>
                            </div>
                            <div className="text-xl lg:text-2xl font-bold text-white mb-1">R$ 1.2M <span className="text-xs lg:text-sm text-slate-500 font-normal">Proj.</span></div>
                            <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2">
                                <div className="bg-areco-500 h-1.5 rounded-full w-[75%] shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-4 lg:p-5 rounded-xl border border-slate-700 hover:border-amber-500 transition-colors group">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400 group-hover:text-amber-300">
                                    <ShieldAlert size={20} className="lg:w-6 lg:h-6" />
                                </div>
                                <span className="text-slate-300 font-semibold text-sm lg:text-base">Fiscal & Compliance</span>
                            </div>
                            <div className="text-xl lg:text-2xl font-bold text-white mb-1">100% <span className="text-xs lg:text-sm text-slate-500 font-normal">Validado</span></div>
                            <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2">
                                <div className="bg-amber-500 h-1.5 rounded-full w-[100%] shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/30 rounded-xl border border-slate-700 p-4 lg:p-6 relative overflow-hidden">
                        <div className="flex justify-between mb-4">
                             <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm lg:text-base">
                                <TrendingUp size={16} className="lg:w-[18px]" /> Giro de Estoque
                             </div>
                        </div>
                        <div className="flex items-end gap-1.5 lg:gap-2 h-24 lg:h-32 opacity-80">
                             {[40, 65, 50, 80, 55, 90, 70, 85].map((h, i) => (
                                <div key={i} className="flex-1 bg-slate-700 rounded-t-sm relative h-full overflow-hidden">
                                    <div className="absolute bottom-0 w-full bg-areco-600 transition-all duration-1000" style={{height: `${h}%`}}></div>
                                </div>
                             ))}
                        </div>
                    </div>
               </div>
            </div>
            
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 lg:w-96 lg:h-96 bg-areco-500/30 rounded-full blur-[80px] lg:blur-[100px]"></div>
            <div className="absolute -z-10 bottom-0 left-10 w-48 h-48 lg:w-72 lg:h-72 bg-blue-600/20 rounded-full blur-[60px] lg:blur-[80px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};