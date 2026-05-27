import React from 'react';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Banknote,
  BarChart3,
  Building2,
  ClipboardCheck,
  Droplets,
  Factory,
  Gauge,
  Handshake,
  Leaf,
  Lightbulb,
  MapPin,
  Recycle,
  ShieldCheck,
  Sprout,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const outcomes = [
  { icon: Droplets, title: 'Woda technologiczna', text: 'odzysk i powrót do obiegu technicznego' },
  { icon: Zap, title: 'Biogaz i biodiesel', text: 'waloryzacja frakcji energetycznych' },
  { icon: Sprout, title: 'Struwit / fosfor', text: 'odzysk surowców nawozowych' },
  { icon: ClipboardCheck, title: 'Raportowanie ESG', text: 'dane środowiskowe dla klientów' },
];

const organization = [
  {
    icon: Lightbulb,
    title: 'Startup RegioODzysk',
    items: ['autorska idea', 'koncepcja biznesowa', 'logika ESG i impactu'],
  },
  {
    icon: Handshake,
    title: 'Konsorcjum / partnerstwo',
    items: ['zakłady FMCG', 'partner technologiczny', 'inwestor lub gmina'],
  },
  {
    icon: Building2,
    title: 'Realizacja',
    items: ['kapitał', 'technologia', 'infrastruktura', 'dostęp do klientów'],
  },
];

const roadmap = [
  {
    step: '1',
    title: 'Weryfikacja',
    details: ['screening regionu', 'identyfikacja zakładów FMCG', 'analiza wolumenu i składu ścieków'],
  },
  {
    step: '2',
    title: 'Pierwszy hub / pilotaż',
    details: ['spółka celowa', 'wybór technologii', 'struktura finansowania'],
  },
  {
    step: '3',
    title: 'Komercjalizacja',
    details: ['długoterminowe kontrakty', 'odbiór i oczyszczanie', 'raportowanie ESG'],
  },
  {
    step: '4',
    title: 'Skalowanie',
    details: ['kolejne regiony', 'standardyzacja modelu', 'moduły odzysku dla innych branż'],
  },
];

const financeMetrics = [
  { icon: Gauge, label: 'minimalny wolumen', value: '3,5', unit: 'mln m³/rok' },
  { icon: TrendingUp, label: 'pożądany wolumen', value: '4,5', unit: 'mln m³/rok' },
  { icon: Banknote, label: 'średnia cena usługi', value: '16', unit: 'zł/m³' },
  { icon: BarChart3, label: 'przychód przy 4,5 mln m³', value: '72', unit: 'mln zł/rok' },
  { icon: Factory, label: 'CAPEX jednej instalacji', value: '300', unit: 'mln zł' },
  { icon: Recycle, label: 'OPEX', value: 'ok. 50', unit: 'mln zł/rok' },
];

const financing = [
  {
    title: 'Dotacje i granty B+R',
    value: 'ok. 150 mln zł',
    items: ['walidacja technologii', 'budowa pierwszych kompetencji', 'przygotowanie do skalowania'],
  },
  {
    title: 'Finansowanie dłużne / SL na CAPEX',
    value: 'ok. 50 mln zł',
    items: ['finansowanie aktywów', 'dłuższy okres spłaty', 'modernizacja lub adaptacja instalacji'],
  },
  {
    title: 'Kapitał inwestora / kontrakty FMCG',
    value: 'ok. 100 mln zł',
    items: ['wiarygodność projektu', 'zabezpieczenie przychodów', 'komercjalizacja pierwszego hubu'],
  },
];

const impactPillars = [
  {
    icon: Leaf,
    title: 'Środowiskowy',
    items: ['odzysk wody', 'ograniczenie zrzutów', 'redukcja presji na odbiorniki'],
  },
  {
    icon: Users,
    title: 'Społeczny',
    items: ['bezpieczeństwo wodne regionu', 'lokalne kompetencje', 'nowe miejsca pracy'],
  },
  {
    icon: Building2,
    title: 'Gospodarczy',
    items: ['nowa kategoria usług', 'odciążenie oczyszczalni', 'odporność przemysłu'],
  },
  {
    icon: Recycle,
    title: 'Surowcowy i energetyczny',
    items: ['odzysk fosforu', 'biogaz i biodiesel', 'lokalne źródła zasobów'],
  },
];

const kpis = [
  'ilość oczyszczonych ścieków',
  'ilość odzyskanej wody',
  '% wody zawróconej do obiegu',
  'ilość odzyskanego struwitu / fosforu',
  'redukcja śladu wodnego',
  'koszt oczyszczenia 1 m³',
];

const team = [
  { name: 'Katarzyna Sadowska', phone: '+48 691 179 270' },
  { name: 'Paulina Pawlak', phone: '+48 694 831 130' },
  { name: 'Joanna Michalska', phone: '+48 607 236 616' },
  { name: 'Magdalena Boratyńska-Soral', phone: '+48 601 368 359' },
  { name: 'Aldona Tulikowska-Chwalisz', phone: '+48 662 621 121' },
];

const SectionHeader = ({ kicker, title, copy }: { kicker: string; title: string; copy: string }) => (
  <motion.div {...reveal} transition={{ duration: 0.55 }} className="mx-auto max-w-3xl text-center">
    <p className="section-kicker justify-center">{kicker}</p>
    <h2 className="mt-3 text-3xl font-black leading-tight text-brand-dark sm:text-4xl">{title}</h2>
    <p className="mt-4 text-base leading-8 text-gray-600">{copy}</p>
  </motion.div>
);

export const InvestorSections: React.FC = () => {
  return (
    <>
      <section id="wartosc" className="bg-brand-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Odzysk wartości"
            title="Model wielostrumieniowy: usługa bazowa plus produkty odzyskane."
            copy="Strona prowadzi użytkownika tak jak prezentacja: od ścieku jako kosztu do huba, który tworzy wartość dla zakładów FMCG, regionu i inwestorów."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-blue-soft text-brand-blue-dark">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-black text-brand-dark">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="model" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Model organizacyjny"
            title="Startup inicjuje model, a konsorcjum domyka wykonanie i wiarygodność."
            copy="Dla projektu infrastrukturalnego kluczowe jest rozdzielenie roli koncepcyjnej, technologicznej, finansowej i operacyjnej."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {organization.map(({ icon: Icon, title, items }, index) => (
              <motion.div
                key={title}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-green-50 text-brand-green-dark">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-brand-dark">{title}</h3>
                    <ul className="mt-4 space-y-3">
                      {items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm font-semibold text-gray-700">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="strategia" className="bg-brand-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Strategia wdrożenia"
            title="Najpierw pierwszy hub, potem replikowalny model dla kolejnych regionów."
            copy="Roadmapa została ustawiona pod decyzje inwestorskie: walidacja wolumenu, pilotaż, kontrakty i skalowanie."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {roadmap.map(({ step, title, details }, index) => (
              <motion.div
                key={title}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-blue text-base font-black text-white">{step}</span>
                  <h3 className="text-lg font-black text-brand-dark">{title}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-6 text-gray-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-8 flex flex-col gap-4 rounded-lg border border-brand-blue/25 bg-white p-6 shadow-sm sm:flex-row sm:items-center"
          >
            <MapPin className="h-8 w-8 shrink-0 text-brand-blue-dark" />
            <p className="text-sm leading-7 text-gray-700">
              <strong className="text-brand-dark">Pierwszy kierunek:</strong> Śląsk, obszar Tychy-Bieruń. <strong className="text-brand-dark">Kolejne:</strong> Wielkopolska i zachodnie Mazowsze.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="finanse" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Logika finansowa"
            title="Atrakcyjność zależy od wolumenu, ograniczenia CAPEX i wykorzystania istniejącej infrastruktury."
            copy="Sekcja finansowa eksponuje liczby z prezentacji bez nadmiernego obiecywania: przychód bazowy, koszt działania i skala nakładów."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {financeMetrics.map(({ icon: Icon, label, value, unit }, index) => (
              <motion.div
                key={label}
                {...reveal}
                transition={{ duration: 0.48, delay: index * 0.04 }}
                className="rounded-lg border border-gray-200 bg-brand-paper p-6 shadow-sm"
              >
                <Icon className="h-5 w-5 text-brand-blue-dark" />
                <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-gray-500">{label}</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-4xl font-black leading-none text-brand-dark">{value}</span>
                  <span className="pb-1 text-sm font-black text-brand-green">{unit}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {financing.map(({ title, value, items }, index) => (
              <motion.div
                key={title}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black uppercase tracking-[0.12em] text-brand-blue-dark">Etap {index + 1}</p>
                <h3 className="mt-3 text-xl font-black text-brand-dark">{title}</h3>
                <p className="mt-2 text-2xl font-black text-brand-green">{value}</p>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-gray-600">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-brand-dark py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} transition={{ duration: 0.55 }} className="max-w-3xl">
            <p className="section-kicker section-kicker-dark">Impact ESG i KPI</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
              Wiarygodność projektu pozytywnego wpływu wymaga mierzalnych KPI, a nie samych deklaracji.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {impactPillars.map(({ icon: Icon, title, items }, index) => (
              <motion.div
                key={title}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <Icon className="h-6 w-6 text-brand-green" />
                <h3 className="mt-5 text-lg font-black text-white">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-blue-50/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi}
                {...reveal}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="flex items-center gap-3 rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white"
              >
                <Target className="h-4 w-4 shrink-0 text-brand-green" />
                {kpi}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="zespol" className="bg-brand-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Zespół"
            title="Inicjatorki projektu RegioODzysk"
            copy="Projekt przygotowany w ramach Akademii Leona Koźmińskiego, z naciskiem na model biznesowy, finansowanie i mierzalny wpływ."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {team.map(({ name, phone }, index) => (
              <motion.a
                key={name}
                href={`tel:${phone.replaceAll(' ', '')}`}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-brand-blue/40 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue-soft text-sm font-black text-brand-blue-dark">
                  {name
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')}
                </span>
                <h3 className="mt-5 text-base font-black leading-tight text-brand-dark">{name}</h3>
                <p className="mt-3 text-sm font-semibold text-gray-500 group-hover:text-brand-blue-dark">{phone}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
