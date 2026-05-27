import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-white overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-green rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-brand-blue-dark rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-brand-blue-dark font-medium text-sm mb-6">
            Startup pozytywnego wpływu
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark tracking-tight mb-8">
            Ścieki przemysłu FMCG <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
              w centrum cyrkularności
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            Przejście od zaledwie kosztu ściekowego do maksymalizacji odzysku wartości. Oferujemy innowacyjne podejście do recyklingu przemysłowego zgodnie ze standardami ESG.
          </p>
          
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <a 
              href="#rozwiazanie" 
              className="px-8 py-4 text-lg font-medium rounded-lg text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors shadow-lg shadow-blue-500/30"
            >
              Poznaj model działania
            </a>
            <a 
              href="#kontakt" 
              className="px-8 py-4 text-lg font-medium rounded-lg text-brand-dark bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
            >
              Kontakt dla inwestorów
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};