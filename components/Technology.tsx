import React from 'react';
import { Smartphone, Code2, Sparkles, Fingerprint } from 'lucide-react';

export const Technology: React.FC = () => {
  return (
    <section id="tech" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Tecnologia que digitaliza empresas</h2>
          <p className="text-slate-600 text-lg">
            O VSat 4.0 traz recursos da economia digital para dentro da operação tradicional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-areco-600 mb-6">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Uma única base de código</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Integrado em tempo real. Faça do seu jeito, acessando pelo navegador ou desktop, com a mesma regra de negócio.
            </p>
          </div>

          <div className="bg-gradient-to-br from-areco-50 to-white rounded-xl p-8 border border-areco-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Sparkles size={100} />
             </div>
            <div className="w-12 h-12 bg-areco-600 rounded-lg shadow-lg shadow-areco-200 flex items-center justify-center text-white mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Areco Insights (AI)</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Um copiloto operacional inteligente que auxilia seu time com análises e insights de dentro do VSat.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-areco-600 mb-6">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Mobilidade</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Aplicativos mobile nativos para força de vendas, aprovações, chão de fábrica e logística remota.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 text-slate-600 text-sm border border-slate-200">
                <Fingerprint className="w-4 h-4" />
                <span className="font-semibold">Areco ID:</span> Um identificador único e seguro para todas as aplicações.
            </div>
        </div>
      </div>
    </section>
  );
};