"use client";

import { motion } from "framer-motion";

interface CreditCardDashboardIconProps {
  width?: number;
  height?: number;
}

export default function CreditCardDashboardIcon({ width = 800, height = 450 }: CreditCardDashboardIconProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const lineDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5 } },
  };

  const glowPulse = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  const cardSlide = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } },
  };

  const textReveal = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.8 } },
  };
  
  const barGrow = {
    hidden: { scaleY: 0, transformOrigin: "bottom" },
    visible: { scaleY: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <defs>
        <pattern id="ccSmallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="#2C2C3A" strokeWidth="0.5" />
        </pattern>
        <pattern id="ccGrid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#ccSmallGrid)" />
          <path d="M 100 0 L 0 0 L 0 100" fill="none" stroke="#3A3A4C" strokeWidth="1" />
        </pattern>
        <linearGradient id="ccFrameGradient" x1="50" y1="30" x2="750" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1A2A" />
          <stop offset="1" stopColor="#0A0A1A" />
        </linearGradient>
        <linearGradient id="ccCardHoloGradient" x1="100" y1="80" x2="350" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7B68EE" stopOpacity="0.3" />
          <stop offset="1" stopColor="#4169E1" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <rect width="800" height="450" fill="#0A0A0E" /> {/* Deep dark background */}

      {/* Futuristic Grid Overlay */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} transition={{ duration: 2 }}>
        <rect width="100%" height="100%" fill="url(#ccGrid)" />
      </motion.g>

      {/* Main Screen Frame */}
      <motion.rect
        x="50" y="30" width="700" height="390" rx="15"
        fill="url(#ccFrameGradient)"
        stroke="#4A4A6A"
        strokeWidth="2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
      />

      {/* Animated Glowing Circuit Lines */}
      <motion.path
        d="M 50 100 Q 150 50 250 100 L 350 150 Q 450 200 550 150 L 650 100 Q 750 50 750 150"
        stroke="#8AFF8A" strokeWidth="2" fill="none"
        variants={lineDraw}
      />
      <motion.circle cx="750" cy="150" r="4" fill="#8AFF8A" variants={glowPulse} />

      {/* Credit Card Hologram */}
      <motion.rect
        x="100" y="80" width="250" height="150" rx="10"
        fill="url(#ccCardHoloGradient)"
        stroke="#7B68EE" strokeWidth="1"
        variants={cardSlide}
      >
        <motion.text x="120" y="130" fontFamily="monospace" fontSize="20" fill="white" variants={textReveal}>**** **** **** 4242</motion.text>
        <motion.text x="120" y="160" fontFamily="monospace" fontSize="12" fill="white" variants={textReveal} custom={0.1}>VALID THRU 12/28</motion.text>
        <motion.text x="250" y="190" fontFamily="monospace" fontSize="24" fill="white" variants={textReveal} custom={0.2}>SV REDDY</motion.text>
        <motion.rect x="110" y="180" width="40" height="25" rx="3" fill="#A9A9A9" variants={textReveal} custom={0.3}/> {/* Chip */}
      </motion.rect>

      {/* Data Visualization Grid - Bar Chart */}
      <g transform="translate(400, 200)">
        <motion.rect x="0" y="0" width="350" height="180" rx="8" fill="#1A1A2A" variants={containerVariants} custom={0.5}/>
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.rect
            key={i}
            x={20 + (i - 1) * 60}
            y="170" width="30"
            height="0"
            fill="#00BFFF"
            initial={{ height: 0, y: 170 }}
            whileInView={{ height: (i * 25) + 30, y: 170 - ((i * 25) + 30), transition: { duration: 0.8, delay: 1 + i * 0.1 } }}
            viewport={{ once: true, amount: 0.5 }}
          />
        ))}
      </g>
      <motion.text x="430" y="220" fontFamily="sans-serif" fontSize="18" fill="#E0E0E0" variants={textReveal} custom={0.4}>Risk Metrics</motion.text>

    </motion.svg>
  );
}
