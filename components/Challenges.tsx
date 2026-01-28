import React from 'react';
import { RefreshCcw, EyeOff, FileWarning } from 'lucide-react';

export const Challenges: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 lg:mb-6 leading-tight">
            Quando os dados não batem, <br className="hidden md:block"/>
            <span className="text-red-600">a empresa paga a conta</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Sem a integridade nativa do <strong>ERP da Areco</strong>, gestores perdem tempo precioso conciliando informações que deveriam estar prontas para a decisão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

          <div className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-red-100 transition-all duration-300 group">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-5 lg:mb-6 group-hover:scale-110 transition-transform border border-red-100">
              <RefreshCcw className="w-6 h-6" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">Operação e financeiro desalinhados</h3>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
              O estoque físico diz uma coisa, o sistema contábil diz outra. Sem uma <strong>plataforma única</strong> amarrando as pontas, sua equipe desperdiça horas auditando processos manuais, gerando compras duplicadas e perdas invisíveis.
            </p>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-red-100 transition-all duration-300 group">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-5 lg:mb-6 group-hover:scale-110 transition-transform border border-red-100">
              <EyeOff className="w-6 h-6" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">Decisões no escuro</h3>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
              Como confiar no DRE se os custos de produção não são apontados em tempo real? A gestão acaba decidindo olhando para o retrovisor, dependendo de planilhas paralelas e relatórios que já nascem desatualizados.
            </p>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-red-100 transition-all duration-300 group">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-5 lg:mb-6 group-hover:scale-110 transition-transform border border-red-100">
              <FileWarning className="w-6 h-6" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">Risco Fiscal Constante</h3>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
              Erros na classificação de materiais na entrada geram um passivo silencioso. O <strong>VSat 4.0</strong> elimina esse risco validando regras tributárias na origem, evitando multas e o retrabalho estressante em épocas de fechamento.
            </p>
          </div>
        </div>
        
        <div className="mt-12 lg:mt-16 text-center">
            <p className="text-lg md:text-2xl text-slate-900 font-bold border-b-4 border-areco-500 inline-block pb-2">
                O sistema transforma essa complexidade em rotina fluida.
            </p>
        </div>
      </div>
    </section>
  );
};