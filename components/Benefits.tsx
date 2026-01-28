import React from 'react';
import { TrendingUp, Users, Lock, Globe } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Eficiência Operacional",
    text: "Elimine gargalos e aumente a produtividade da equipe em até 30%."
  },
  {
    icon: Users,
    title: "Integração Total",
    text: "Conecte vendas, compras, estoque e financeiro em uma única plataforma."
  },
  {
    icon: Lock,
    title: "Segurança de Dados",
    text: "Backups automáticos e controle rigoroso de acesso e permissões."
  },
  {
    icon: Globe,
    title: "Acesso de Qualquer Lugar",
    text: "Plataforma web responsiva para gerenciar seu negócio remotamente."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-areco-600 font-semibold tracking-wider uppercase text-sm">Por que Areco?</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">Benefícios Reais para o seu Negócio</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-areco-50 rounded-xl flex items-center justify-center text-areco-600 mb-6">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};