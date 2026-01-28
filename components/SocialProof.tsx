import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Roberto Almeida",
    role: "Diretor de Operações",
    company: "Indústria Metalúrgica Sul",
    text: "A implementação do Areco ERP foi um divisor de águas. Reduzimos nosso estoque parado em 25% e o fechamento contábil que levava 10 dias, hoje fazemos em 2."
  },
  {
    name: "Juliana Costa",
    role: "Gerente Financeira",
    company: "Distribuidora Nacional",
    text: "A conciliação bancária automática economizou horas da minha equipe. Agora temos tempo para analisar os dados em vez de apenas preencher planilhas."
  },
  {
    name: "Carlos Mendes",
    role: "CEO",
    company: "TechSolutions Corp",
    text: "A flexibilidade do sistema é impressionante. Conseguimos adaptar os módulos exatamente ao nosso fluxo de trabalho sem custos absurdos de customização."
  },
  {
    name: "Fernanda Santos",
    role: "Logística",
    company: "Transportes Rápidos",
    text: "A rastreabilidade dos lotes nos garantiu a certificação ISO 9001. O Areco ERP nos deu a segurança que faltava na operação."
  },
  {
    name: "Ricardo Oliveira",
    role: "Diretor de TI",
    company: "Grupo Inovação",
    text: "A estabilidade e a segurança da versão Cloud nos surpreenderam. O suporte técnico é ágil e realmente resolve os problemas."
  }
];

export const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
            Transformando resultados em diversos setores
          </p>
          <h2 className="text-3xl font-bold text-slate-900">O que nossos clientes dizem</h2>
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

        <div className="flex w-max animate-scroll group">
          <div className="flex gap-6 px-3">
            {testimonials.map((t, i) => (
              <div 
                key={`t1-${i}`} 
                className="w-[400px] bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic font-medium leading-relaxed mb-6 text-lg">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-areco-100 flex items-center justify-center text-areco-700 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-6 px-3">
            {testimonials.map((t, i) => (
              <div 
                key={`t2-${i}`} 
                className="w-[400px] bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic font-medium leading-relaxed mb-6 text-lg">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-areco-100 flex items-center justify-center text-areco-700 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};