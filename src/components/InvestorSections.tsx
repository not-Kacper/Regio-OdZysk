import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Banknote,
  BarChart3,
  Building2,
  Droplets,
  Factory,
  Gauge,
  Handshake,
  MapPin,
  Recycle,
  ShieldCheck,
  Sprout,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const valueCards = [
  {
    icon: Factory,
    title: 'Dla FMCG',
    value: 'mniej CAPEX',
    text: 'outsourcing odbioru, oczyszczania i danych compliance',
    bars: [72, 54, 38],
  },
  {
    icon: Building2,
    title: 'Dla regionu',
    value: 'mniej presji na wodę',
    text: 'lokalna infrastruktura odciąża zasoby i oczyszczalnie',
    bars: [48, 68, 84],
  },
  {
    icon: TrendingUp,
    title: 'Dla inwestora',
    value: 'wiele strumieni',
    text: 'usługa bazowa + odzysk + raportowanie ESG',
    bars: [86, 64, 52],
  },
];

const scenarios = [
  { key: 'min', label: 'minimum', volume: '3,5', revenue: 56, opex: 50, margin: 6 },
  { key: 'target', label: 'target', volume: '4,5', revenue: 72, opex: 50, margin: 22 },
];

const roadmap = [
  { title: 'Weryfikacja', text: 'region, wolumeny, skład ścieków' },
  { title: 'Pierwszy hub', text: 'pilotaż, partnerzy, struktura finansowania' },
  { title: 'Kontrakty', text: 'odbiór, oczyszczanie, KPI ESG' },
  { title: 'Skalowanie', text: 'kolejne regiony i moduły odzysku' },
];

const impact = [
  { icon: Droplets, label: 'odzysk wody', score: 82 },
  { icon: Zap, label: 'energia z frakcji organicznej', score: 72 },
  { icon: Sprout, label: 'fosfor / struwit', score: 56 },
  { icon: BarChart3, label: 'KPI i raportowanie ESG', score: 68 },
];

const team = [
  { name: 'Katarzyna Sadowska', phone: '+48 691 179 270' },
  { name: 'Paulina Pawlak', phone: '+48 694 831 130' },
  { name: 'Joanna Michalska', phone: '+48 607 236 616' },
  { name: 'Magdalena Boratyńska-Soral', phone: '+48 601 368 359' },
  { name: 'Aldona Tulikowska-Chwalisz', phone: '+48 662 621 121' },
];

const SectionHeader = ({ kicker, title, copy }: { kicker: string; title: string; copy: string }) => (
  <motion.div {...reveal} transition={{ duration: 0.5 }} className="mx-auto max-w-3xl text-center">
    <p className="section-kicker justify-center">{kicker}</p>
    <h2 className="mt-3 text-3xl font-black leading-tight text-brand-dark sm:text-4xl">{title}</h2>
    <p className="mt-4 text-base leading-8 text-gray-600">{copy}</p>
  </motion.div>
);

export const InvestorSections: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(1);
  const scenario = scenarios[activeScenario];

  return (
    <>
      <section id="wartosc" className="bg-brand-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Wartość"
            title="Trzy grupy widzą inną korzyść, ale ta sama infrastruktura tworzy cały model."
            copy="Zamiast przenosić wszystkie slajdy, strona pokazuje mapę wartości: klient kupuje usługę, region zyskuje odporność, inwestor widzi skalowalny asset."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {valueCards.map(({ icon: Icon, title, value, text, bars }, index) => (
              <motion.div
                key={title}
                {...reveal}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-blue-soft text-brand-blue-dark">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-md bg-green-50 px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-brand-green-dark">{value}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-brand-dark">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>

                <div className="mt-6 space-y-2">
                  {bars.map((bar, barIndex) => (
                    <div key={`${title}-${barIndex}`} className="h-2 overflow-hidden rounded-full bg-brand-paper">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, delay: 0.1 + barIndex * 0.08 }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="model" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div {...reveal} transition={{ duration: 0.5 }}>
              <p className="section-kicker">Model</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-brand-dark sm:text-4xl">
                Startup nie musi budować wszystkiego sam. Uruchamia konsorcjum.
              </h2>
              <p className="mt-4 text-base leading-8 text-gray-600">
                To powinno być widoczne od razu: RegioODzysk jest inicjatorem modelu, a projekt staje się wiarygodny przez partnerów technologicznych, infrastrukturę, klientów i finansowanie.
              </p>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.55, delay: 0.08 }} className="rounded-lg border border-gray-200 bg-brand-paper p-4 shadow-sm sm:p-6">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Recycle, title: 'RegioODzysk', text: 'koncepcja, model, impact' },
                  { icon: Handshake, title: 'Partnerstwo', text: 'FMCG, technologia, gmina, inwestor' },
                  { icon: ShieldCheck, title: 'Realizacja', text: 'kapitał, infrastruktura, operacje' },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-md bg-white p-4 shadow-sm">
                    <Icon className="h-6 w-6 text-brand-green" />
                    <h3 className="mt-4 text-base font-black text-brand-dark">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="finanse" className="bg-brand-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Finanse"
            title="Najważniejsza zależność: wolumen robi różnicę."
            copy="Interaktywny scenariusz zostawia użytkownikowi jedną myśl: przy tym projekcie skala, kontrakty i CAPEX decydują o atrakcyjności."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <motion.div {...reveal} transition={{ duration: 0.5 }} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <div className="grid grid-cols-2 gap-2">
                {scenarios.map((item, index) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveScenario(index)}
                    className={`rounded-md px-4 py-3 text-left transition ${
                      activeScenario === index ? 'bg-brand-dark text-white' : 'bg-brand-paper text-brand-dark hover:bg-brand-blue-soft'
                    }`}
                  >
                    <span className="block text-xs font-black uppercase tracking-[0.12em]">{item.label}</span>
                    <span className="mt-1 block text-xl font-black">{item.volume} mln m³</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'przychód', value: scenario.revenue, unit: 'mln zł' },
                  { label: 'OPEX', value: scenario.opex, unit: 'mln zł' },
                  { label: 'nadwyżka', value: scenario.margin, unit: 'mln zł' },
                ].map((item) => (
                  <div key={item.label} className="rounded-md bg-brand-paper p-3">
                    <p className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">{item.label}</p>
                    <p className="mt-2 text-2xl font-black text-brand-dark">{item.value}</p>
                    <p className="text-xs font-bold text-brand-blue-dark">{item.unit}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.55, delay: 0.08 }} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-black text-brand-dark">Scenariusz {scenario.volume} mln m³/rok</h3>
                  <p className="mt-1 text-sm text-gray-600">porównanie przychodu, kosztu i wolnej przestrzeni</p>
                </div>
                <Banknote className="h-6 w-6 text-brand-green" />
              </div>

              <div className="mt-7 space-y-5">
                {[
                  { label: 'Przychód', value: scenario.revenue, color: 'from-brand-blue to-brand-green' },
                  { label: 'OPEX', value: scenario.opex, color: 'from-gray-400 to-gray-500' },
                  { label: 'Nadwyżka operacyjna', value: scenario.margin, color: 'from-brand-green to-lime-500' },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-sm font-bold text-brand-dark">
                      <span>{bar.label}</span>
                      <span>{bar.value} mln zł</span>
                    </div>
                    <div className="mt-2 h-4 overflow-hidden rounded-full bg-brand-paper">
                      <motion.div
                        key={`${scenario.key}-${bar.label}`}
                        className={`h-full rounded-full bg-gradient-to-r ${bar.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.max(8, (bar.value / 72) * 100)}%` }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Gauge, text: 'średnia cena 16 zł/m³' },
                  { icon: Factory, text: 'CAPEX ok. 300 mln zł' },
                  { icon: ShieldCheck, text: 'dotacje obniżają ryzyko' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 rounded-md bg-brand-paper px-3 py-3 text-xs font-bold text-gray-700">
                    <Icon className="h-4 w-4 shrink-0 text-brand-blue-dark" />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="impact" className="bg-brand-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <motion.div {...reveal} transition={{ duration: 0.5 }}>
              <p className="section-kicker section-kicker-dark">Skalowanie i impact</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Jeden hub ma udowodnić model. Kolejne regiony mają go replikować.
              </h2>
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-white/10 bg-white/10 p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <p className="text-sm leading-7 text-blue-50/85">
                  Pierwszy kierunek: Śląsk, Tychy-Bieruń. Kolejne: Wielkopolska i zachodnie Mazowsze.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-4">
              <div className="grid gap-3 sm:grid-cols-4">
                {roadmap.map((item, index) => (
                  <motion.div
                    key={item.title}
                    {...reveal}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="rounded-lg border border-white/10 bg-white/10 p-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-green text-sm font-black text-white">{index + 1}</span>
                    <h3 className="mt-4 text-sm font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-blue-50/75">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {impact.map(({ icon: Icon, label, score }, index) => (
                  <motion.div
                    key={label}
                    {...reveal}
                    transition={{ duration: 0.45, delay: 0.12 + index * 0.05 }}
                    className="rounded-lg border border-white/10 bg-white/10 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-brand-green" />
                        <span className="text-sm font-bold text-white">{label}</span>
                      </div>
                      <Target className="h-4 w-4 text-brand-blue" />
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="zespol" className="bg-brand-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <motion.div {...reveal} transition={{ duration: 0.5 }}>
              <p className="section-kicker">Zespół</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-brand-dark sm:text-4xl">Inicjatorki projektu</h2>
              <p className="mt-4 text-base leading-8 text-gray-600">
                Projekt przygotowany w ramach Akademii Leona Koźmińskiego, z naciskiem na model biznesowy, finansowanie i mierzalny wpływ.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {team.map(({ name, phone }, index) => (
                <motion.a
                  key={name}
                  href={`tel:${phone.replaceAll(' ', '')}`}
                  {...reveal}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-brand-blue/40 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-blue-soft text-xs font-black text-brand-blue-dark">
                    {name
                      .split(' ')
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <h3 className="mt-4 text-sm font-black leading-tight text-brand-dark">{name}</h3>
                  <p className="mt-2 text-sm font-semibold text-gray-500 group-hover:text-brand-blue-dark">{phone}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
