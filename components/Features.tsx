import React from 'react';
import { DollarSign, Package, ShoppingCart, Users, PieChart, Truck } from 'lucide-react';

const modules = [
  {
    icon: DollarSign,
    name: "Gestão Financeira",
    desc: "Contas a pagar/receber, fluxo de caixa, DRE gerencial e conciliação bancária automática."
  },
  {
    icon: Package,
    name: "Gestão de Estoque",
    desc: "Controle de lote, validade, inventário rotativo e rastreabilidade total de produtos."
  },
  {
    icon: ShoppingCart,
    name: "Vendas e Faturamento",
    desc: "Emissão de NF-e, NFS-e, gestão de pedidos, orçamentos e tabelas de preço dinâmicas."
  },
  {
    icon: Truck,
    name: "Suprimentos e Compras",
    desc: "Cotações automatizadas, gestão de fornecedores e aprovação de ordens de compra."
  },
  {
    icon: Users,
    name: "CRM Integrado",
    desc: "Histórico de interações com clientes, funil de vendas e gestão de oportunidades."
  },
  {
    icon: PieChart,
    name: "BI e Relatórios",
    desc: "Business Intelligence nativo para análise de dados e criação de dashboards personalizados."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Um ERP completo e modular</h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            O Areco ERP se adapta ao tamanho e necessidade da sua empresa. Ative os módulos conforme sua operação cresce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {modules.map((mod, idx) => (
            <div key={idx} className="flex gap-5 group">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 text-areco-600 border border-blue-100 group-hover:bg-areco-600 group-hover:text-white transition-colors duration-300">
                  <mod.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-areco-600 transition-colors">
                  {mod.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};