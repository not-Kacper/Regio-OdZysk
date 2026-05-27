import React from 'react';
import { motion } from 'framer-motion';

export const Slide3Diagram: React.FC = () => {
  const viewportSettings = { once: true, margin: "-50px" };
  
  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden p-4">
      <svg viewBox="0 0 1000 500" className="w-full h-auto drop-shadow-sm font-sans">
        <defs>
          <linearGradient id="circleGrad" x1="0" y1="1" x2="1" y2="0">
            <stop stopColor="#0284c7">
              <animate attributeName="offset" values="0.1; 0.9; 0.1" dur="20s" repeatCount="indefinite" />
              <animate attributeName="stop-color" values="#0284c7; #3b82f6; #0284c7" dur="20s" repeatCount="indefinite" />
            </stop>
            <stop stopColor="#16a34a">
              <animate attributeName="offset" values="0.9; 0.1; 0.9" dur="20s" repeatCount="indefinite" />
              <animate attributeName="stop-color" values="#16a34a; #22c55e; #16a34a" dur="20s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <marker id="arrowDark" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" className="fill-blue-950" />
          </marker>
          
          <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="20" result="blur" />
          </filter>
          
          <filter id="centerBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="30" result="blur" />
          </filter>
          
          <clipPath id="factoryClip">
            <rect x="50" y="110" width="180" height="280" rx="30" />
          </clipPath>
        </defs>

        {/* PRIMARY CONNECTOR */}
        <motion.path
          d="M 230 250 L 330 250"
          className="stroke-blue-950 stroke-[3px] fill-none"
          markerEnd="url(#arrowDark)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
          viewport={viewportSettings}
        />
        
        <motion.path
          d="M 230 250 L 330 250"
          className="stroke-blue-400 stroke-[4px] fill-none"
          strokeDasharray="8 20"
          initial={{ opacity: 0, strokeDashoffset: 100 }}
          whileInView={{ opacity: 0.6, strokeDashoffset: 0 }}
          transition={{
            opacity: { delay: 1.4, duration: 0.5 },
            strokeDashoffset: { repeat: Infinity, duration: 1.5, ease: "linear" }
          }}
          viewport={viewportSettings}
        />

        {/* BRANCHING CONNECTORS (RIGHT) */}
        {/* Top Branch (Blue) */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          viewport={viewportSettings}
        >
          <motion.path 
            d="M 645 180 L 670 180 L 730 100 L 740 100" 
            className="stroke-blue-300 stroke-[3px] fill-none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
            viewport={viewportSettings}
          />
          <motion.path 
            d="M 645 180 L 670 180 L 730 100 L 740 100" 
            className="stroke-blue-500 stroke-[3px] fill-none"
            strokeDasharray="8 20"
            initial={{ opacity: 0, strokeDashoffset: 100 }}
            whileInView={{ opacity: 0.6, strokeDashoffset: 0 }}
            transition={{ opacity: { delay: 2.2, duration: 0.5 }, strokeDashoffset: { repeat: Infinity, duration: 2, ease: "linear" } }}
            viewport={viewportSettings}
          />
          <motion.circle cx="645" cy="180" r="4" className="fill-white stroke-blue-400 stroke-2" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
          <motion.circle cx="670" cy="180" r="4" className="fill-white stroke-blue-400 stroke-2" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} />
          <motion.circle cx="730" cy="100" r="4" className="fill-white stroke-blue-400 stroke-2" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} />
        </motion.g>

        {/* Mid Branch (Green) */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          viewport={viewportSettings}
        >
          <motion.path 
            d="M 660 250 L 740 250" 
            className="stroke-green-400 stroke-[3px] fill-none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
            viewport={viewportSettings}
          />
          <motion.path 
            d="M 660 250 L 740 250" 
            className="stroke-green-600 stroke-[3px] fill-none"
            strokeDasharray="8 20"
            initial={{ opacity: 0, strokeDashoffset: 100 }}
            whileInView={{ opacity: 0.6, strokeDashoffset: 0 }}
            transition={{ opacity: { delay: 2.2, duration: 0.5 }, strokeDashoffset: { repeat: Infinity, duration: 2, ease: "linear" } }}
            viewport={viewportSettings}
          />
          <motion.circle cx="660" cy="250" r="4" className="fill-white stroke-green-500 stroke-2" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.1 }} />
          <motion.circle cx="690" cy="250" r="4" className="fill-white stroke-green-500 stroke-2" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }} />
          <motion.circle cx="730" cy="250" r="4" className="fill-white stroke-green-500 stroke-2" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
        </motion.g>

        {/* Bottom Branch (Green) */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          viewport={viewportSettings}
        >
          <motion.path 
            d="M 645 320 L 670 320 L 730 400 L 740 400" 
            className="stroke-green-400 stroke-[3px] fill-none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
            viewport={viewportSettings}
          />
           <motion.path 
            d="M 645 320 L 670 320 L 730 400 L 740 400" 
            className="stroke-green-600 stroke-[3px] fill-none"
            strokeDasharray="8 20"
            initial={{ opacity: 0, strokeDashoffset: 100 }}
            whileInView={{ opacity: 0.6, strokeDashoffset: 0 }}
            transition={{ opacity: { delay: 2.2, duration: 0.5 }, strokeDashoffset: { repeat: Infinity, duration: 2, ease: "linear" } }}
            viewport={viewportSettings}
          />
          <motion.circle cx="645" cy="320" r="4" className="fill-white stroke-green-500 stroke-2" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} />
          <motion.circle cx="670" cy="320" r="4" className="fill-white stroke-green-500 stroke-2" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} />
          <motion.circle cx="730" cy="400" r="4" className="fill-white stroke-green-500 stroke-2" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }} />
        </motion.g>

        {/* LEFT NODE (Zakład FMCG) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ opacity: { delay: 0.1, duration: 0.5 }, scale: { delay: 0.1, duration: 0.5 }, y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
          viewport={viewportSettings}
        >
          {/* Main Box */}
          <motion.rect 
            whileHover={{ scale: 1.02 }}
            x="50" y="110" width="180" height="280" rx="30" 
            className="fill-white stroke-gray-200 stroke-2 cursor-pointer shadow-lg" 
          />
          
          {/* Factory Vector */}
          <g transform="translate(60, 140) scale(1.1)" stroke="#1e3a8a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 20 70 L 20 30 L 40 20 L 40 70" />
            <path d="M 40 70 L 40 25 L 60 15 L 60 70" />
            <path d="M 60 70 L 60 20 L 80 10 L 80 70" />
            <path d="M 25 30 L 25 10 L 35 10 L 35 22" />
            <path d="M 45 25 L 45 5 L 55 5 L 55 17" />
            <path d="M 30 0 Q 40 -10 30 -20" className="stroke-gray-300" />
            <path d="M 65 70 Q 55 60 65 50 Q 75 60 65 70" fill="#22c55e" stroke="none" />
            <path d="M 65 70 Q 75 55 85 65" className="stroke-green-500" />
            <path d="M 15 70 L 90 70" className="stroke-blue-900 stroke-[3px]" />
          </g>

          <g className="stroke-blue-400 stroke-[2.5px]" fill="none" clipPath="url(#factoryClip)">
            <motion.path 
              d="M 30 240 Q 45 230 60 240 T 90 240 T 120 240 T 150 240 T 180 240 T 210 240 T 240 240 T 270 240" 
              animate={{ x: [0, -30, 0] }} 
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} 
            />
            <motion.path 
              d="M 30 255 Q 45 245 60 255 T 90 255 T 120 255 T 150 255 T 180 255 T 210 255 T 240 255 T 270 255" 
              animate={{ x: [-30, 0, -30] }} 
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} 
            />
            <motion.path 
              d="M 30 270 Q 45 260 60 270 T 90 270 T 120 270 T 150 270 T 180 270 T 210 270 T 240 270 T 270 270" 
              animate={{ x: [0, -30, 0] }} 
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }} 
            />
          </g>

          <text x="140" y="320" textAnchor="middle" className="text-xl font-bold fill-blue-950">Zakład FMCG</text>
          <text x="140" y="345" textAnchor="middle" className="text-sm font-semibold fill-blue-800">ścieki</text>
          <text x="140" y="365" textAnchor="middle" className="text-sm font-semibold fill-blue-800">przemysłowe</text>
        </motion.g>

        {/* CENTER NODE (RegioODzysk) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [-15, 15, -15] }}
          transition={{ opacity: { delay: 1.1, duration: 0.6 }, scale: { delay: 1.1, duration: 0.6, type: "spring", bounce: 0.4 }, y: { repeat: Infinity, duration: 10, ease: "easeInOut" } }}
          viewport={viewportSettings}
        >
          <motion.circle 
            whileHover={{ scale: 1.05 }}
            cx="500" cy="250" r="160" 
            className="fill-white cursor-pointer shadow-2xl" 
          />
          {/* Strong Gaussian blur at the center */}
          <motion.circle
            cx="500" cy="250" r="120"
            fill="#e0f2fe"
            opacity="0.7"
            filter="url(#centerBlur)"
          />
          {/* Gaussian blurred aura for the frame */}
          <motion.circle 
            cx="500" cy="250" r="160" 
            fill="none" 
            stroke="url(#circleGrad)" 
            strokeWidth="20"
            filter="url(#glowBlur)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
            viewport={viewportSettings}
          />
          <motion.circle 
            cx="500" cy="250" r="160" 
            fill="none" 
            stroke="url(#circleGrad)" 
            strokeWidth="10"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
            viewport={viewportSettings}
          />

          <g transform="translate(500, 160) scale(1.6)">
             <motion.path 
               d="M 0 -20 C 15 0 20 15 0 25 C -20 15 -15 0 0 -20 Z" 
               className="fill-blue-500"
               animate={{ y: [0, -2, 0] }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             />
             <path d="M -2 22 C 30 22 40 -10 15 -25 C 10 0 20 15 -2 22 Z" className="fill-green-400" opacity="0.8" />
             <path d="M 2 22 C -30 22 -40 -10 -15 -25 C -10 0 -20 15 2 22 Z" className="fill-green-600" />
             <path d="M 0 -10 C 5 0 8 10 0 15" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
          </g>

          <text x="500" y="245" textAnchor="middle" className="text-[32px] font-extrabold tracking-tight">
            <tspan className="fill-blue-950">Regio</tspan>
            <tspan className="fill-green-600">ODzysk</tspan>
          </text>
          <text x="500" y="280" textAnchor="middle" className="text-lg font-medium fill-gray-600">Regionalny hub</text>
          <text x="500" y="305" textAnchor="middle" className="text-lg font-medium fill-gray-600">odzysku zasobów</text>
        </motion.g>

        {/* RIGHT NODES (Pills) */}
        {/* Wody */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          animate={{ y: [-3, 3, -3] }}
          transition={{ opacity: { delay: 2.0, duration: 0.4 }, scale: { delay: 2.0, duration: 0.4 }, x: { delay: 2.0, duration: 0.4 }, y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" } }}
          viewport={viewportSettings}
        >
          <motion.rect whileHover={{ scale: 1.05 }} x="740" y="60" width="230" height="80" rx="40" className="fill-white stroke-gray-200 stroke-[1.5px] cursor-pointer" />
          <motion.circle cx="790" cy="100" r="24" className="fill-blue-50" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
          <path d="M 790 85 C 800 100 805 110 790 115 C 775 110 780 100 790 85 Z" fill="none" className="stroke-blue-500 stroke-[2.5px]" strokeLinecap="round" strokeLinejoin="round" />
          <text x="835" y="95" className="fill-blue-900 font-semibold text-xl">odzysk</text>
          <text x="835" y="118" className="fill-blue-900 font-medium text-lg">wody</text>
        </motion.g>

        {/* Energii */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          animate={{ y: [-3, 3, -3] }}
          transition={{ opacity: { delay: 2.2, duration: 0.4 }, scale: { delay: 2.2, duration: 0.4 }, x: { delay: 2.2, duration: 0.4 }, y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
          viewport={viewportSettings}
        >
          <motion.rect whileHover={{ scale: 1.05 }} x="740" y="210" width="230" height="80" rx="40" className="fill-white stroke-gray-200 stroke-[1.5px] cursor-pointer" />
          <motion.circle cx="790" cy="250" r="24" className="fill-green-50" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2.5 }} />
          <motion.polygon points="795,235 780,250 790,250 785,265 800,245 790,245" fill="none" className="stroke-green-500 stroke-[2.5px]" strokeLinejoin="round" animate={{ opacity: [1, 0.6, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} />
          <text x="835" y="245" className="fill-green-600 font-semibold text-xl">odzysk</text>
          <text x="835" y="268" className="fill-green-600 font-medium text-lg">energii</text>
        </motion.g>

        {/* Surowców */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          animate={{ y: [-3, 3, -3] }}
          transition={{ opacity: { delay: 2.4, duration: 0.4 }, scale: { delay: 2.4, duration: 0.4 }, x: { delay: 2.4, duration: 0.4 }, y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" } }}
          viewport={viewportSettings}
        >
          <motion.rect whileHover={{ scale: 1.05 }} x="740" y="360" width="230" height="80" rx="40" className="fill-white stroke-gray-200 stroke-[1.5px] cursor-pointer" />
          <motion.circle cx="790" cy="400" r="24" className="fill-green-50" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }} />
          <path d="M 785 385 L 795 385 L 805 405 L 790 420 L 775 405 Z" fill="none" className="stroke-green-600 stroke-[2.5px]" strokeLinejoin="round" />
          <path d="M 795 385 L 795 420 M 775 405 L 805 405" className="stroke-green-600 stroke-[2px]" strokeLinejoin="round" />
          <text x="835" y="395" className="fill-green-600 font-semibold text-xl">odzysk</text>
          <text x="835" y="418" className="fill-green-600 font-medium text-lg">surowców</text>
        </motion.g>

      </svg>
    </div>
  );
};
