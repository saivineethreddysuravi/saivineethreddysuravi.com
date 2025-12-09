"use client";

import { motion } from "framer-motion";

interface WorkforceRetentionIconProps {
  width?: number;
  height?: number;
}

export default function WorkforceRetentionIcon({ width = 800, height = 450 }: WorkforceRetentionIconProps) {
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

  const pulseCircle = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  const barGrow = {
    hidden: { scaleY: 0, transformOrigin: "bottom", opacity: 0 },
    visible: (i: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.7, delay: 0.8 + i * 0.1 },
    }),
  };

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <rect width="800" height="450" fill="#0A0A0E" /> {/* Deep dark background */}

      {/* Futuristic Grid Overlay */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} transition={{ duration: 2 }}>
        <defs>
          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="#2C2C3A" stroke-width="0.5" />
          </pattern>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path d="M 100 0 L 0 0 L 0 100" fill="none" stroke="#3A3A4C" stroke-width="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </motion.g>

      {/* Main Screen Frame */}
      <motion.rect
        x="50" y="30" width="700" height="390" rx="15"
        fill="url(#frameGradient)"
        stroke="#4A4A6A"
        stroke-width="2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
      />
      <defs>
        <linearGradient id="frameGradient" x1="50" y1="30" x2="750" y2="420" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1A1A2A" />
          <stop offset="1" stop-color="#0A0A1A" />
        </linearGradient>
      </defs>

      {/* Retention Rate Gauge */}
      <motion.g transform="translate(150, 150)" initial="hidden" whileInView="visible">
        <motion.circle r="70" stroke="#334155" stroke-width="15" fill="none" />
        <motion.path d="M80 150 A70 70 0 1 1 220 150" stroke="#22c55e" stroke-width="15" fill="none" stroke-linecap="round" variants={lineDraw} custom={0} />
        <motion.text x="0" y="10" font-family="sans-serif" font-size="36" fill="white" text-anchor="middle" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1 } }}>85%</motion.text>
        <motion.text x="0" y="40" font-family="sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1.2 } }}>Retention</motion.text>
        <motion.circle cx="0" cy="0" r="5" fill="#22c55e" variants={pulseCircle} />
      </motion.g>

      {/* Turnover Trend Line */}
      <motion.path d="M280 250 L380 200 L480 230 L580 180 L680 210" stroke="#ef4444" stroke-width="4" fill="none" variants={lineDraw} custom={0.5} />
      <motion.text x="350" y="170" font-family="sans-serif" font-size="18" fill="white" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 1.8 } }}>Turnover Trend</motion.text>

      {/* Employee Count Bars */}
      <g transform="translate(250, 280)">
        <rect x="0" y="0" width="450" height="100" fill="#1f2937" rx="8" />
        {[0, 1, 2, 3].map((i) => (
          <motion.rect
            key={i}
            x={20 + i * 100}
            y={80}
            width="60"
            height="0"
            initial={{ height: 0, y: 80 }}
            whileInView={{ height: [60, 45, 30, 75][i], y: 80 - [60, 45, 30, 75][i] }}
            transition={{ delay: 1.5 + i * 0.2, duration: 0.7 }}
            fill="#3b82f6"
            viewport={{ once: true, amount: 0.5 }}
          />
        ))}
        <motion.text x="20" y="15" font-family="sans-serif" font-size="18" fill="white" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 2.2 } }}>Employee Demographics</motion.text>
      </g>

    </motion.svg>
  );
}