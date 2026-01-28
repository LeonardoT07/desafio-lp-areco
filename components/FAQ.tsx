import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    q: "O VSat 4.0 é um ERP web?",
    a: "Sim, o VSat 4.0 é 100% web, acessível diretamente pelo navegador sem necessidade de instalações complexas em cada máquina."
  },
  {
    q: "Como funciona a integração entre operação, financeiro e fiscal?",
    a: "A plataforma opera em base única. Quando uma movimentação física ocorre (ex: entrada de nota), ela alimenta instantaneamente o estoque, o contas a pagar e a escrituração fiscal."
  },
  {
    q: "Posso começar por módulos e evoluir depois?",
    a: "Sim, o sistema é modular. Você pode iniciar com módulos críticos para sua operação e expandir conforme a necessidade da empresa."
  },
  {
    q: "O sistema ajuda na preparação para IBS/CBS?",
    a: "Com certeza. O motor fiscal do VSat 4.0 é atualizado constantemente para garantir conformidade com as novas regras tributárias, automatizando cálculos complexos."
  },
  {
    q: "Existe mobilidade para operação (WMS/estoque)?",
    a: "Sim, possuímos aplicativos nativos para coletores de dados e smartphones, permitindo gestão de estoque e WMS na palma da mão."
  },
  {
    q: "Para quais setores o VSat 4.0 é indicado?",
    a: "Somos especialistas em Indústria, Atacado/Distribuição, Varejo e Serviços, com regras de negócio verticalizadas para cada segmento."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Perguntas frequentes</h2>
        
        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <details key={idx} className="group border border-slate-200 rounded-lg bg-slate-50 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-slate-900 font-bold transition-colors hover:bg-white focus:outline-none">
                <span className="text-sm md:text-base">{item.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-slate-500" />
              </summary>
              <div className="px-4 pb-4 pt-0 leading-relaxed text-slate-600 text-sm animate-accordion-down">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};