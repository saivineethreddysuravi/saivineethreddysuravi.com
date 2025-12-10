"use client";

import { motion } from "framer-motion";

interface StudentDropoutIconProps {
  width?: number;
  height?: number;
}

export default function StudentDropoutIcon({ width = 800, height = 450 }: StudentDropoutIconProps) {
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

  const pointReveal = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };
  
  const textReveal = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 1.5 } },
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
        <pattern id="stpSmallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="#2C2C3A" strokeWidth="0.5" />
        </pattern>
        <pattern id="stpGrid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#stpSmallGrid)" />
          <path d="M 100 0 L 0 0 L 0 100" fill="none" stroke="#3A3A4C" strokeWidth="1" />
        </pattern>
        <linearGradient id="stpFrameGradient" x1="50" y1="30" x2="750" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1A2A" />
          <stop offset="1" stopColor="#0A0A1A" />
        </linearGradient>
      </defs>

      <rect width="800" height="450" fill="#0A0A0E" /> {/* Deep dark background */}

      {/* Futuristic Grid Overlay */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} transition={{ duration: 2 }}>
        <rect width="100%" height="100%" fill="url(#stpGrid)" />
      </motion.g>

      {/* Main Screen Frame */}
      <motion.rect
        x="50" y="30" width="700" height="390" rx="15"
        fill="url(#stpFrameGradient)"
        stroke="#4A4A6A"
        strokeWidth="2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
      />

      {/* Dynamic Graph */}
      <motion.path
        d="M 100 300 Q 200 150 300 250 Q 400 350 500 200 Q 600 100 700 250"
        stroke="#00FFFF" strokeWidth="4" fill="none"
        variants={lineDraw}
      />
      
      {/* Dropout Point */}
      <motion.circle cx="600" cy="100" r="10" fill="#FF0000" variants={pointReveal} custom={0.5} />
      <motion.text x="610" y="90" fontFamily="sans-serif" fontSize="18" fill="#FF0000" variants={textReveal} custom={0}>Dropout Detected</motion.text>

      {/* Success Path */}
      <motion.path
        d="M 100 300 L 200 280 L 300 290 L 400 270 L 500 280"
        stroke="#00FF00" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1, transition: { duration: 1, delay: 0.5 } }}
      />
      <motion.text x="100" y="320" fontFamily="sans-serif" fontSize="16" fill="#00FF00" variants={textReveal} custom={0.1}>Retention Path</motion.text>

    </motion.svg>
  );
}
