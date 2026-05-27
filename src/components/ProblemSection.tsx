import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { AlertTriangle, ArrowRight, Droplets, Factory, Gauge, Recycle, ShieldCheck } from 'lucide-react';

const AnimatedNumber = ({ to }: { to: number }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-60px' });
  const spring = useSpring(0, { damping: 34, stiffness: 92 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString('pl-PL'));

  useEffect(() => {
    if (isInView) {
      spring.set(to);
    }
  }, [isInView, spring, to]);

  return <motion.span ref={nodeRef}>{display}</motion.span>;
};

const risks = [
  'koszt odbioru i oczyszczania',
  'presja regulacyjna i ESG',
  'ryzyko przestojów',
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-kicker">Problem</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
              Woda wchodzi do procesu, a większość wraca jako kosztowny ściek.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-gray-600">
              Sedno projektu: zebrać duży wolumen w regionie i odzyskać z niego wartość, której pojedynczy zakład zwykle nie monetyzuje.
            </p>

            <div className="mt-7 grid gap-3">
              {risks.map((risk) => (
                <div key={risk} className="flex items-center gap-3 rounded-md border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-brand-dark">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-red-500" />
                  {risk}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-lg border border-gray-200 bg-brand-paper p-4 shadow-sm sm:p-6"
          >
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <Factory className="h-6 w-6 text-brand-blue-dark" />
                <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-gray-500">FMCG</p>
                <p className="mt-2 text-3xl font-black text-brand-dark">250-300</p>
                <p className="text-sm font-bold text-brand-blue-dark">mln m³ wody / rok</p>
              </div>

              <ArrowRight className="mx-auto hidden h-6 w-6 text-brand-green lg:block" />

              <div className="rounded-lg bg-white p-5 shadow-sm">
                <Recycle className="h-6 w-6 text-brand-green" />
                <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-gray-500">Powrót jako ściek</p>
                <p className="mt-2 text-4xl font-black text-brand-green">
                  <AnimatedNumber to={80} />%
                </p>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    className="h-full rounded-full bg-brand-green"
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                  />
                </div>
              </div>

              <ArrowRight className="mx-auto hidden h-6 w-6 text-brand-green lg:block" />

              <div className="rounded-lg bg-white p-5 shadow-sm">
                <Droplets className="h-6 w-6 text-brand-blue-dark" />
                <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-gray-500">Skala problemu</p>
                <p className="mt-2 text-3xl font-black text-brand-dark">200-240</p>
                <p className="text-sm font-bold text-brand-blue-dark">mln m³ ścieków / rok</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-brand-blue/20 bg-white px-4 py-3">
                <Gauge className="h-4 w-4 text-brand-blue-dark" />
                <p className="mt-2 text-sm font-bold text-gray-700">Skala uzasadnia model infrastrukturalny, nie tylko punktowe rozwiązania.</p>
              </div>
              <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3">
                <ShieldCheck className="h-4 w-4 text-brand-green" />
                <p className="mt-2 text-sm font-bold text-gray-700">Hub rozkłada CAPEX, ryzyko i kompetencje na partnerstwo regionalne.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
