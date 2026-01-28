import React from 'react';
import { Database, Smartphone, ShieldCheck, Blocks, Check } from 'lucide-react';

export const PracticalBenefits: React.FC = () => {
  const benefitsList = [
    {
        title: "Confiança total nos números",
        desc: "Sem redigitação. O pedido de venda já gera a previsão financeira e a reserva de estoque automaticamente, eliminando inconsistências."
    },
    {
        title: "Adeus às planilhas paralelas",
        desc: "Sua equipe foca na execução dentro do sistema, com processos centralizados, auditáveis e rastreáveis."
    },
    {
        title: "Visão de caixa em tempo real",
        desc: "Projeções financeiras baseadas na operação física diária, permitindo antecipar cenários antes do fechamento."
    },
    {
        title: "Segurança fiscal automática",
        desc: "O motor tributário valida regras a cada emissão, reduzindo riscos e garantindo compliance contínuo."
    }
  ];

  const cards = [
    {
        icon: Database,
        title: <>Base única e<br/>tempo real</>,
        desc: "Sincronia nativa entre setores"
    },
    {
        icon: Smartphone,
        title: "Acesso web e mobilidade",
        desc: "Gestão completa de qualquer lugar"
    },
    {
        icon: ShieldCheck,
        title: "Automação fiscal",
        desc: "Compliance e validação na origem"
    },
    {
        icon: Blocks,
        title: "Ecossistema modular",
        desc: "Escalabilidade para o seu negócio"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 lg:w-96 lg:h-96 bg-areco-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            
            <div className="mb-12 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 lg:mb-10 leading-tight">
                    O que sua empresa ganha <br/>
                    <span className="text-areco-600 bg-areco-50 px-2 rounded-lg decoration-clone box-decoration-clone">com o VSat 4.0</span>
                </h2>
                <div className="space-y-6 lg:space-y-8">
                    {benefitsList.map((item, index) => (
                        <div key={index} className="flex gap-4 lg:gap-5 group">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 mt-1 shadow-sm border border-green-100 group-hover:bg-green-100 transition-colors">
                                <Check size={16} className="lg:w-[20px]" strokeWidth={3} />
                            </div>
                            <div>
                                <h4 className="text-slate-900 text-base lg:text-lg font-bold mb-1 lg:mb-2 group-hover:text-areco-700 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-slate-600 text-sm lg:text-base leading-relaxed pr-0 lg:pr-4">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                {cards.map((card, idx) => (
                    <div key={idx} className="bg-slate-50 p-5 lg:p-6 rounded-2xl border border-slate-200 hover:bg-white hover:shadow-xl hover:border-areco-200 hover:-translate-y-1 transition-all duration-300 group relative">
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity hidden sm:block">
                            <card.icon size={64} className="text-areco-600 transform rotate-12" />
                        </div>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 mb-3 lg:mb-4 border border-slate-200 group-hover:bg-areco-600 group-hover:text-white group-hover:border-areco-500 transition-colors">
                            <card.icon size={20} className="lg:w-[24px]" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base lg:text-lg mb-1 lg:mb-2 leading-tight">{card.title}</h3>
                        <p className="text-slate-500 text-sm font-medium">{card.desc}</p>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};