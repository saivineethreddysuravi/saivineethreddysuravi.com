"use client";

import { motion } from "framer-motion";

interface FinancialLoanIconProps {
  width?: number;
  height?: number;
}

export default function FinancialLoanIcon({ width = 800, height = 450 }: FinancialLoanIconProps) {
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

  const moneyDrop = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  const barGrow = {
    hidden: { scaleY: 0, transformOrigin: "bottom", opacity: 0 },
    visible: (i: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.7, delay: 1.0 + i * 0.1 },
    }),
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
        <pattern id="flSmallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="#2C2C3A" strokeWidth="0.5" />
        </pattern>
        <pattern id="flGrid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#flSmallGrid)" />
          <path d="M 100 0 L 0 0 L 0 100" fill="none" stroke="#3A3A4C" strokeWidth="1" />
        </pattern>
        <linearGradient id="flFrameGradient" x1="50" y1="30" x2="750" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1A2A" />
          <stop offset="1" stopColor="#0A0A1A" />
        </linearGradient>
      </defs>

      <rect width="800" height="450" fill="#0A0A0E" /> {/* Deep dark background */}

      {/* Futuristic Grid Overlay */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} transition={{ duration: 2 }}>
        <rect width="100%" height="100%" fill="url(#flGrid)" />
      </motion.g>

      {/* Main Screen Frame */}
      <motion.rect
        x="50" y="30" width="700" height="390" rx="15"
        fill="url(#flFrameGradient)"
        stroke="#4A4A6A"
        strokeWidth="2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
      />

      {/* Financial Icons - Money Flow */}
      <motion.text x="100" y="150" fontFamily="sans-serif" fontSize="60" fill="#00FF00" variants={moneyDrop}>$</motion.text>
      <motion.text x="180" y="150" fontFamily="sans-serif" fontSize="45" fill="#FFD700" variants={moneyDrop} custom={0.1}>£</motion.text>
      <motion.text x="250" y="150" fontFamily="sans-serif" fontSize="30" fill="#00BFFF" variants={moneyDrop} custom={0.2}>€</motion.text>
      
      {/* Risk Assessment Chart */}
      <g transform="translate(100, 200)">
        <rect x="0" y="0" width="600" height="180" rx="8" fill="#1A1A2A" />
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.rect
            key={i}
            x={20 + (i - 1) * 110}
            y="170" width="40"
            height="0"
            fill={i < 3 ? "#00FF00" : (i === 3 ? "#FFD700" : "#FF0000")} // Green, Yellow, Red
            initial={{ height: 0, y: 170 }}
            whileInView={{ height: (i * 25) + 30, y: 170 - ((i * 25) + 30), transition: { duration: 0.7, delay: 1.2 + i * 0.1 } }}
            viewport={{ once: true, amount: 0.5 }}
          />
        ))}
        <motion.text x="20" y="20" fontFamily="sans-serif" fontSize="16" fill="#E0E0E0" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }}>Risk Levels</motion.text>
      </g>
      
      {/* Dynamic Data Stream */}
      <motion.path
        d="M 50 400 L 750 400"
        stroke="#00FFFF" strokeWidth="2" fill="none"
        variants={lineDraw} custom={0.8}
      />
      <motion.circle cx="750" cy="400" r="5" fill="#00FFFF" initial={{ scale: 0 }} whileInView={{ scale: 1, transition: { duration: 0.5, delay: 2.3 } }} />

    </motion.svg>
  );
}
