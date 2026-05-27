import React from 'react';
import { motion } from 'framer-motion';

export const InteractiveHub: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="rozwiazanie" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Interaktywny Hub RegioODzysk
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Przejście od kosztu ściekowego do odzysku wartości. Zobacz, jak przetwarzamy ścieki na cenne zasoby.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Wejście - Zakład FMCG */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow-lg border-t-4 border-brand-blue flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-brand-blue">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Zakład FMCG</h3>
            <p className="text-sm text-gray-500">Ścieki poprodukcyjne bogate w nawozy i składniki energetyczne</p>
          </motion.div>

          {/* Strzałka */}
          <motion.div variants={itemVariants} className="hidden lg:flex text-brand-blue">
            <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.div>

          {/* Centrum - Hub */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/3 flex justify-center py-10 relative">
            <div className="relative w-64 h-64 flex items-center justify-center rounded-full bg-brand-dark text-white shadow-2xl z-10 hover:shadow-brand-green/20 hover:shadow-3xl transition-shadow duration-500">
              {/* Spinning borders for circular effect */}
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-dashed border-brand-green opacity-70"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-[-12px] rounded-full border-2 border-brand-blue opacity-40"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner core */}
              <div className="absolute inset-2 rounded-full bg-gray-900 border border-gray-700" />
              
              <div className="relative z-20 flex flex-col items-center text-center p-6">
                <svg className="w-12 h-12 text-brand-green mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                <h3 className="text-xl font-bold leading-tight mb-2">Regionalny Hub<br/>RegioODzysk</h3>
              </div>
            </div>
          </motion.div>

          {/* Strzałka */}
          <motion.div variants={itemVariants} className="hidden lg:flex text-brand-green">
            <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.div>

          {/* Wyjścia - Produkty */}
          <div className="w-full lg:w-1/4 flex flex-col gap-4">
            <motion.div variants={itemVariants} className="bg-white p-4 rounded-xl shadow border-l-4 border-brand-blue flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-brand-blue shrink-0">💧</div>
              <div className="text-left">
                <h4 className="font-bold text-sm">Woda technologiczna</h4>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white p-4 rounded-xl shadow border-l-4 border-yellow-400 flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 shrink-0">⚡</div>
              <div className="text-left">
                <h4 className="font-bold text-sm">Biogaz / Biodiesel</h4>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white p-4 rounded-xl shadow border-l-4 border-brand-green flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-brand-green shrink-0">🌱</div>
              <div className="text-left">
                <h4 className="font-bold text-sm">Struwit / Fosfor</h4>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white p-4 rounded-xl shadow border-l-4 border-purple-500 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shrink-0">📊</div>
              <div className="text-left">
                <h4 className="font-bold text-sm">Raportowanie ESG</h4>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
