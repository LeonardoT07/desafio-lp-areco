import React from 'react';
import { Database, Smartphone, Zap, Network } from 'lucide-react';

export const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Como a plataforma entrega isso</h2>
          <p className="text-slate-600 text-lg">
            Esqueça as integrações via arquivo texto. O VSat 4.0 opera sobre uma arquitetura unificada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-areco-50 rounded-xl flex items-center justify-center text-areco-600 flex-shrink-0">
                    <Database size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Base Única em Tempo Real</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Não existem "módulos separados" sincronizando à noite. Um pedido de venda impacta o estoque, o financeiro e o fiscal no milésimo de segundo em que é aprovado.
                    </p>
                </div>
            </div>

            <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-areco-50 rounded-xl flex items-center justify-center text-areco-600 flex-shrink-0">
                    <Smartphone size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Web & Mobile Nativo</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        A gestão não acontece só no escritório. Aprovações, consultas de estoque e CRM acessíveis pelo navegador ou app, sem VPNs complexas ou instalações locais.
                    </p>
                </div>
            </div>

            <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-areco-50 rounded-xl flex items-center justify-center text-areco-600 flex-shrink-0">
                    <Zap size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Automação de Fluxos</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Processos amarrados digitalmente. O contas a pagar só libera se houver entrada física. O faturamento só emite se houver saldo e crédito aprovado.
                    </p>
                </div>
            </div>

            <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-areco-50 rounded-xl flex items-center justify-center text-areco-600 flex-shrink-0">
                    <Network size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Verticalização por Setor</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Regras de negócio específicas para Indústria (Chão de fábrica), Distribuição (WMS) e Varejo já incorporadas ao core do sistema.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};