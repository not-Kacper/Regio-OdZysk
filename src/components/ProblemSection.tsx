import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import {
  AlertTriangle,
  BarChart3,
  ClipboardCheck,
  Droplets,
  Gauge,
  Recycle,
  ShieldCheck,
  TrendingUp,
  Truck,
} from 'lucide-react';

const AnimatedNumber = ({ to }: { to: number }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-60px' });
  const spring = useSpring(0, { damping: 36, stiffness: 95 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString('pl-PL'));

  useEffect(() => {
    if (isInView) {
      spring.set(to);
    }
  }, [isInView, spring, to]);

  return <motion.span ref={nodeRef}>{display}</motion.span>;
};

const facts = [
  {
    icon: Droplets,
    value: '250-300',
    unit: 'mln m³',
    label: 'wody rocznie',
    note: 'zużycie w przemyśle FMCG',
  },
  {
    icon: Recycle,
    value: '80',
    unit: '%',
    label: 'pobranej wody',
    note: 'wraca do systemu jako ściek',
    animated: true,
  },
  {
    icon: Gauge,
    value: '200-240',
    unit: 'mln m³',
    label: 'ścieków rocznie',
    note: 'wolumen uzasadnia model hubowy',
  },
];

const riskMap = [
  {
    risk: 'rosnące koszty compliance',
    answer: 'stabilny odbiór i oczyszczanie ścieków',
    icon: TrendingUp,
  },
  {
    risk: 'zaostrzające się regulacje',
    answer: 'wsparcie raportowania i danych ESG',
    icon: ClipboardCheck,
  },
  {
    risk: 'ryzyko awarii, zatorów i przestojów',
    answer: 'większa odporność operacyjna zakładu',
    icon: AlertTriangle,
  },
  {
    risk: 'wysoki CAPEX lokalnych modernizacji',
    answer: 'ograniczenie nakładów po stronie klienta',
    icon: Truck,
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-kicker">Problem rynkowy</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
              Ścieki w FMCG są jednocześnie kosztem, ryzykiem i niewykorzystanym zasobem.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-2xl text-base leading-8 text-gray-600 lg:ml-auto"
          >
            Branża potrzebuje rozwiązania, które agreguje wolumeny, stabilizuje odbiór ścieków i zamienia presję regulacyjną w mierzalny odzysk wartości dla zakładów oraz regionów.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {facts.map(({ icon: Icon, value, unit, label, note, animated }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-lg border border-gray-200 bg-brand-paper p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-brand-blue-dark shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-6 flex items-end gap-2">
                <div className="text-4xl font-black leading-none text-brand-dark">
                  {animated ? <AnimatedNumber to={Number(value)} /> : value}
                </div>
                <div className="pb-1 text-lg font-black text-brand-green">{unit}</div>
              </div>
              <p className="mt-3 font-bold text-brand-dark">{label}</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">{note}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
        >
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div>
              <h3 className="text-lg font-black text-brand-dark">Kluczowe ryzyka dla firm FMCG</h3>
              <div className="mt-4 grid gap-3">
                {riskMap.map(({ risk, icon: Icon }) => (
                  <div key={risk} className="flex items-center gap-3 rounded-md bg-red-50/70 px-4 py-3 text-sm font-bold text-brand-dark">
                    <Icon className="h-4 w-4 shrink-0 text-red-500" />
                    {risk}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden h-full w-px bg-gray-200 lg:block" />

            <div>
              <h3 className="text-lg font-black text-brand-dark">RegioODzysk jako odpowiedź</h3>
              <div className="mt-4 grid gap-3">
                {riskMap.map(({ answer }) => (
                  <div key={answer} className="flex items-center gap-3 rounded-md bg-green-50 px-4 py-3 text-sm font-bold text-brand-dark">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-brand-green" />
                    {answer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
