import React, { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const AnimatedCounter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  const spring = useSpring(from, { damping: 40, stiffness: 100 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      spring.set(to);
    }
  }, [isInView, spring, to]);

  return <motion.span ref={nodeRef}>{display}</motion.span>;
};

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-dark mb-4"
          >
            Niewykorzystany potencjał polskiego przemysłu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Obecne podejście do ścieków przemysłowych generuje ogromne koszty oraz utratę kluczowych zasobów, stanowiąc jednocześnie wyzwanie w obliczu rosnących regulacji środowiskowych.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-50 rounded-2xl text-center border border-gray-100 shadow-sm"
          >
            <div className="text-5xl font-extrabold text-brand-blue mb-2">
              <AnimatedCounter from={0} to={300} /> mln m³
            </div>
            <p className="text-gray-700 font-medium">zużycia wody rocznie</p>
            <p className="text-sm text-gray-500 mt-2">Przez przemysł spożywczy w Polsce</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-red-50 rounded-2xl text-center border border-red-100 shadow-sm"
          >
            <div className="text-5xl font-extrabold text-red-500 mb-2">
              <AnimatedCounter from={0} to={80} />%
            </div>
            <p className="text-gray-700 font-medium">stanowi utracony zasób</p>
            <p className="text-sm text-gray-500 mt-2">Woda trafia z powrotem jako ściek</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-gray-50 rounded-2xl text-center border border-gray-100 shadow-sm"
          >
            <div className="text-xl font-bold text-brand-dark mb-4 mt-2">Rosnące koszty i ryzyka ESG</div>
            <ul className="text-left text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2"><span>⚠️</span> Wzrost opłat za zrzut ścieków</li>
              <li className="flex items-center gap-2"><span>⚠️</span> Surowe regulacje środowiskowe</li>
              <li className="flex items-center gap-2"><span>⚠️</span> Brak cyrkularności w modelach</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
