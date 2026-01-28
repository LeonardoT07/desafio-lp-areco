import React from 'react';
import { Button } from './Button';
import { Check, ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-900 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-areco-600/20 rounded-full blur-[80px] lg:blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-blue-600/20 rounded-full blur-[60px] lg:blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-6 mb-12 lg:mb-0">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                    Vamos analisar o <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-areco-400 to-blue-300">seu cenário?</span>
                </h2>
                <p className="text-lg lg:text-xl text-slate-300 mb-8 lg:mb-10 leading-relaxed font-light">
                    Uma conversa consultiva para entender integração, gargalos operacionais e impacto financeiro da sua empresa.
                </p>

                <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-center gap-4 group">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-areco-400 group-hover:bg-areco-500 group-hover:text-white transition-colors">
                            <Check size={16} className="lg:w-[18px]" strokeWidth={3} />
                        </div>
                        <span className="text-white text-base lg:text-lg font-medium">Avaliação do fluxo operacional</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-areco-400 group-hover:bg-areco-500 group-hover:text-white transition-colors">
                            <Check size={16} className="lg:w-[18px]" strokeWidth={3} />
                        </div>
                        <span className="text-white text-base lg:text-lg font-medium">Integração entre áreas</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                         <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-areco-400 group-hover:bg-areco-500 group-hover:text-white transition-colors">
                            <Check size={16} className="lg:w-[18px]" strokeWidth={3} />
                        </div>
                        <span className="text-white text-base lg:text-lg font-medium">Impactos fiscais e regulatórios</span>
                    </div>
                </div>
            </div>
            
            <div className="lg:col-span-6">
                <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-2xl relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-areco-500 to-blue-600 rounded-t-2xl"></div>
                    <form className="space-y-4 lg:space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nome</label>
                            <input type="text" id="name" className="w-full h-11 lg:h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-areco-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium" placeholder="Seu nome completo" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">E-mail corporativo</label>
                            <input type="email" id="email" className="w-full h-11 lg:h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-areco-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium" placeholder="voce@empresa.com.br" />
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:gap-4">
                            <div>
                                <label htmlFor="company" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Empresa</label>
                                <input type="text" id="company" className="w-full h-11 lg:h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-areco-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium" placeholder="Empresa" />
                            </div>
                            <div>
                                <label htmlFor="segment" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Segmento</label>
                                <select id="segment" className="w-full h-11 lg:h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-areco-500 focus:border-transparent outline-none transition-all text-slate-900 font-medium">
                                    <option>Selecione</option>
                                    <option>Indústria</option>
                                    <option>Atacado</option>
                                    <option>Varejo</option>
                                    <option>Serviços</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="pt-2 lg:pt-4">
                            <Button size="lg" fullWidth className="h-12 lg:h-14 text-base lg:text-lg font-bold shadow-xl shadow-areco-600/20 hover:scale-[1.02] transition-transform">
                                Agendar conversa <ArrowRight size={20} className="ml-2"/>
                            </Button>
                        </div>
                    </form>
                    <p className="text-xs text-slate-400 mt-4 lg:mt-6 text-center font-medium">
                        Atendimento consultivo especializado. Sem compromisso.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};