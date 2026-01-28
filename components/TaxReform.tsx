import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import { Button } from './Button';

export const TaxReform: React.FC = () => {
  return (
    <section id="reform" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
                <div className="mb-12 lg:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                        Preparação para IBS/CBS sem parar a operação
                    </h2>
                    
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        Com o fiscal automatizado e a base integrada do <strong>ERP da Areco</strong>, sua empresa reduz riscos e se prepara para as novas regras com previsibilidade, sem surpresas no fluxo de caixa.
                    </p>

                    <Button variant="white" className="h-12 px-8 font-bold">
                        Entender o impacto no meu cenário
                    </Button>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={14} strokeWidth={3} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base">Dados fiscais consistentes</h4>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                             <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={14} strokeWidth={3} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base">Integração nativa com financeiro</h4>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                             <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={14} strokeWidth={3} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base">Rastreabilidade de entradas e saídas</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};