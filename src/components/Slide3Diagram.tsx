import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Droplets, Factory, FlaskConical, Recycle, Sprout, Zap } from 'lucide-react';

const outputs = [
  {
    key: 'water',
    icon: Droplets,
    title: 'Woda',
    label: 'technologiczna',
    color: 'text-brand-blue-dark',
    bg: 'bg-brand-blue-soft',
    summary: 'Powrót do obiegu technicznego i niższa presja na lokalne zasoby wodne.',
    metric: 'odzysk zamiast zrzutu',
  },
  {
    key: 'energy',
    icon: Zap,
    title: 'Energia',
    label: 'biogaz / biodiesel',
    color: 'text-emerald-700',
    bg: 'bg-green-50',
    summary: 'Frakcje organiczne pracują jako lokalny strumień energii i dodatkowej marży.',
    metric: 'wartość z frakcji organicznej',
  },
  {
    key: 'materials',
    icon: Sprout,
    title: 'Surowce',
    label: 'struwit / fosfor',
    color: 'text-lime-700',
    bg: 'bg-lime-50',
    summary: 'Odzysk składników, które w modelu liniowym pozostają kosztem lub odpadem.',
    metric: 'fosfor wraca jako zasób',
  },
  {
    key: 'data',
    icon: BarChart3,
    title: 'Dane ESG',
    label: 'compliance / KPI',
    color: 'text-sky-700',
    bg: 'bg-sky-50',
    summary: 'Klient dostaje mierzalne dane do raportowania i ogranicza ryzyko impact washingu.',
    metric: 'KPI zamiast deklaracji',
  },
];

export const Slide3Diagram: React.FC = () => {
  const [activeKey, setActiveKey] = useState(outputs[0].key);
  const active = outputs.find((item) => item.key === activeKey) ?? outputs[0];
  const ActiveIcon = active.icon;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-lg border border-gray-200 bg-brand-paper p-4 shadow-sm sm:p-6"
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <Factory className="h-7 w-7 text-brand-blue-dark" />
            <p className="mt-5 text-sm font-black text-brand-dark">Zakład FMCG</p>
            <p className="mt-1 text-xs leading-5 text-gray-600">ściek / osad / ryzyko compliance</p>
          </div>

          <div className="relative flex h-full min-h-40 items-center justify-center">
            <motion.div
              className="absolute h-full w-px bg-gradient-to-b from-brand-blue via-brand-green to-brand-blue lg:h-px lg:w-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <Recycle className="relative z-10 h-8 w-8 rounded-full bg-white p-1.5 text-brand-green shadow-sm" />
          </div>

          <div className="rounded-lg bg-brand-dark p-4 text-white shadow-sm">
            <FlaskConical className="h-7 w-7 text-brand-green" />
            <p className="mt-5 text-sm font-black">Regionalny hub</p>
            <p className="mt-1 text-xs leading-5 text-blue-50/80">technologia + infrastruktura + partnerstwo</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {outputs.map(({ key, icon: Icon, title, bg, color }) => {
            const selected = key === activeKey;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveKey(key)}
                className={`rounded-md border px-3 py-3 text-left transition ${
                  selected ? 'border-brand-green bg-white shadow-md' : 'border-gray-200 bg-white/70 hover:bg-white'
                }`}
              >
                <span className={`flex h-9 w-9 items-center justify-center rounded-md ${bg} ${color}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className="mt-3 block text-sm font-black text-brand-dark">{title}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        key={active.key}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32 }}
        className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
      >
        <div className="flex items-start gap-4">
          <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-md ${active.bg} ${active.color}`}>
            <ActiveIcon className="h-7 w-7" />
          </span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-gray-500">aktywny strumień</p>
            <h3 className="mt-2 text-2xl font-black text-brand-dark">{active.title}</h3>
            <p className="mt-1 text-sm font-bold text-brand-blue-dark">{active.label}</p>
          </div>
        </div>

        <p className="mt-6 text-base leading-8 text-gray-600">{active.summary}</p>

        <div className="mt-7 rounded-lg bg-brand-paper p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-black text-brand-dark">{active.metric}</span>
            <span className="text-xs font-black uppercase tracking-[0.12em] text-brand-green">wartość</span>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green"
              initial={{ width: 0 }}
              animate={{ width: active.key === 'data' ? '68%' : active.key === 'materials' ? '56%' : active.key === 'energy' ? '72%' : '82%' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
