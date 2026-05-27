import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Droplets, Factory, ShieldCheck } from 'lucide-react';

const metrics = [
  {
    value: '250-300',
    label: 'mln m³',
    detail: 'wody rocznie w FMCG',
  },
  {
    value: '80%',
    label: 'pobranej wody',
    detail: 'wraca jako ściek',
  },
  {
    value: '5',
    label: 'strumieni',
    detail: 'wartości z odzysku',
  },
];

const trustPoints = [
  { icon: Factory, text: 'outsourcing ścieków FMCG' },
  { icon: Droplets, text: 'odzysk wody technologicznej' },
  { icon: BarChart3, text: 'dane do raportowania ESG' },
  { icon: ShieldCheck, text: 'mniejsze ryzyko operacyjne' },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark pt-20 text-white">
      <img
        src="/regio-hub-visual.jpg"
        alt="Wizualizacja regionalnego huba odzysku zasobów dla zakładów FMCG"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,15,44,0.96)_0%,rgba(3,15,44,0.82)_48%,rgba(3,15,44,0.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />

      <div className="relative mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-blue-100 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-brand-green" />
            Startup pozytywnego wpływu + model infrastrukturalny
          </span>
          <h1 className="mt-6 text-6xl font-black tracking-normal text-white sm:text-7xl lg:text-8xl">
            Regio<span className="text-brand-green">ODzysk</span>
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Regionalny hub odzysku zasobów dla ścieków przemysłu FMCG.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50/90 sm:text-lg">
            Projekt przesuwa ścieki z pozycji kosztu i ryzyka regulacyjnego do modelu odzysku wody, energii, surowców oraz danych ESG dla zakładów i regionów.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#rozwiazanie"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-950/20 transition-colors hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-white/80"
            >
              Zobacz model huba
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#finanse"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/80"
            >
              Logika inwestycyjna
              <BarChart3 className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                <dt className="text-3xl font-black leading-none text-white">{metric.value}</dt>
                <dd className="mt-2 text-sm font-bold text-blue-100">{metric.label}</dd>
                <dd className="mt-1 text-xs leading-5 text-blue-100/80">{metric.detail}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      <div className="relative z-10 border-y border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustPoints.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 px-2 py-2 text-sm font-semibold text-brand-dark">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-blue-soft text-brand-blue-dark">
                <Icon className="h-4 w-4" />
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
