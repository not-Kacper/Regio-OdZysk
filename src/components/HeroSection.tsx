import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Droplets, Factory, Recycle, ShieldCheck, Zap } from 'lucide-react';

const quickMetrics = [
  { value: '80%', label: 'wody wraca jako ściek' },
  { value: '4,5 mln m³', label: 'pożądany wolumen hubu' },
  { value: '72 mln zł', label: 'potencjalny przychód roczny' },
];

const flow = [
  { icon: Factory, title: 'Zakład FMCG', text: 'ściek / osad' },
  { icon: Recycle, title: 'RegioODzysk', text: 'hub odzysku' },
  { icon: Droplets, title: 'Woda', text: 'powrót do obiegu' },
  { icon: Zap, title: 'Energia', text: 'biogaz / biodiesel' },
  { icon: BarChart3, title: 'ESG', text: 'dane i KPI' },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark pt-28 text-white lg:pt-20">
      <img
        src="/regio-hub-visual.jpg"
        alt="Wizualizacja regionalnego huba odzysku zasobów dla zakładów FMCG"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,15,44,0.98)_0%,rgba(3,15,44,0.86)_48%,rgba(3,15,44,0.36)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/75 to-transparent" />

      <div className="relative mx-auto grid min-h-[78svh] max-w-7xl gap-8 px-4 pb-8 pt-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:px-8 lg:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-blue-100 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-brand-green" />
            hub odzysku dla FMCG
          </span>
          <h1 className="mt-5 text-5xl font-black leading-none tracking-normal text-white sm:text-6xl lg:text-7xl">
            Regio<span className="text-brand-green">ODzysk</span>
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-bold leading-tight text-white sm:text-2xl">
            Ścieki z kosztu operacyjnego stają się lokalnym źródłem wody, energii, surowców i danych ESG.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-blue-50/85 sm:text-base">
            Jeden regionalny hub agreguje strumienie kilku zakładów FMCG, stabilizuje odbiór i odzyskuje wartość tam, gdzie pojedyncza instalacja często się nie opłaca.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#rozwiazanie"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-5 py-3 text-sm font-black text-white shadow-lg shadow-green-950/20 transition-colors hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-white/80"
            >
              Zrozum projekt w 20 sekund
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#finanse"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/80"
            >
              Zobacz liczby
              <BarChart3 className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          className="rounded-lg border border-white/20 bg-white/10 p-3 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-4"
        >
          <div className="no-scrollbar flex gap-2 overflow-x-auto sm:grid sm:grid-cols-5 sm:overflow-visible">
            {flow.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="relative min-w-36 rounded-md bg-white/10 p-3 sm:min-h-32 sm:min-w-0">
                {index < flow.length - 1 && (
                  <span className="absolute -right-2 top-1/2 z-10 hidden h-px w-4 bg-brand-green sm:block" />
                )}
                <Icon className="h-5 w-5 text-brand-green" />
                <p className="mt-4 text-sm font-black text-white">{title}</p>
                <p className="mt-1 text-xs leading-5 text-blue-50/75">{text}</p>
              </div>
            ))}
          </div>

          <dl className="mt-3 grid grid-cols-3 gap-2">
            {quickMetrics.map((metric) => (
              <div key={metric.label} className="rounded-md bg-white px-3 py-3 text-brand-dark sm:px-4">
                <dt className="text-base font-black leading-none sm:text-xl">{metric.value}</dt>
                <dd className="mt-1 text-xs font-bold leading-5 text-gray-600">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
};
