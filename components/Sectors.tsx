import React from 'react';
import { ArrowRight } from 'lucide-react';

const sectors = [
  {
    title: "Indústria",
    desc: "MRP, rastreabilidade e chão de fábrica conectado.",
    image: "https://arcfiles.areco.com.br/areco/Site/Areco-Erp/public/industria.png"
  },
  {
    title: "Atacado",
    desc: "WMS, alto volume e mobilidade no picking.",
    image: "https://arcfiles.areco.com.br/areco/Site/Areco-Erp/public/atacado.png"
  },
  {
    title: "Varejo",
    desc: "PDV, marketplaces e operação omnichannel.",
    image: "https://arcfiles.areco.com.br/areco/Site/Areco-Erp/public/varejo.png"
  },
  {
    title: "Serviços",
    desc: "Contratos, projetos e faturamento recorrente.",
    image: "https://arcfiles.areco.com.br/areco/Site/Areco-Erp/public/servicos.png"
  }
];

export const Sectors: React.FC = () => {
  return (
    <section id="sectors" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
             O VSat 4.0 fala a língua do seu setor
          </h2>
          <p className="text-slate-600 text-base lg:text-lg">
             Regras de negócio nativas e especializadas para o seu segmento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {sectors.map((sector, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden h-64 lg:h-80 bg-slate-900 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0">
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 p-5 lg:p-6 w-full">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">{sector.title}</h3>
                <p className="text-slate-300 text-sm lg:text-base leading-relaxed mb-4 lg:mb-6 border-l-2 border-areco-500 pl-3">
                  {sector.desc}
                </p>
                <div className="flex items-center text-white text-xs font-bold uppercase tracking-wider group-hover:text-areco-400 transition-colors">
                  Ver cenário <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};