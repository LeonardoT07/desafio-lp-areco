import React from 'react';
import { Zap, Globe, Layers, ShieldCheck } from 'lucide-react';

export const Credentials: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-100 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-600 font-semibold text-xs md:text-sm uppercase tracking-wide text-center sm:text-left">
            <Zap size={20} className="text-areco-500 flex-shrink-0" />
            <span>Integração em tempo real</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-600 font-semibold text-xs md:text-sm uppercase tracking-wide text-center sm:text-left">
            <Globe size={20} className="text-areco-500 flex-shrink-0" />
            <span>ERP 100% web</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-600 font-semibold text-xs md:text-sm uppercase tracking-wide text-center sm:text-left">
            <Layers size={20} className="text-areco-500 flex-shrink-0" />
            <span>Modular e escalável</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-600 font-semibold text-xs md:text-sm uppercase tracking-wide text-center sm:text-left">
            <ShieldCheck size={20} className="text-areco-500 flex-shrink-0" />
            <span>Preparado para IBS/CBS</span>
          </div>

        </div>
      </div>
    </section>
  );
};