"use client";

import { motion } from "framer-motion";

interface CyclingDashboardIconProps {
  width?: number;
  height?: number;
}

export default function CyclingDashboardIcon({ width = 800, height = 450 }: CyclingDashboardIconProps) {
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

  const gaugeSpin = {
    hidden: { rotate: -180, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 1.2, delay: 0.5 } },
  };
  
  const barGrow = {
    hidden: { scaleY: 0, transformOrigin: "bottom" },
    visible: (i: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.7, delay: 1.0 + i * 0.1 },
    }),
  };

  const pulse = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
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

      {/* Animated Gauges */}
      <motion.g transform="translate(150, 120)" variants={gaugeSpin}>
        <circle r="60" stroke="#374151" stroke-width="15" fill="none" />
        <motion.path d="M-60 0 A60 60 0 1 1 60 0" stroke="#10b981" stroke-width="15" fill="none" stroke-linecap="round" variants={lineDraw} custom={0} />
        <text x="0" y="10" font-family="sans-serif" font-size="24" fill="white" text-anchor="middle">85%</text>
      </motion.g>

      <motion.g transform="translate(400, 120)" variants={gaugeSpin} custom={0.1}>
        <circle r="60" stroke="#374151" stroke-width="15" fill="none" />
        <motion.path d="M-60 0 A60 60 0 1 1 30 52" stroke="#3b82f6" stroke-width="15" fill="none" stroke-linecap="round" variants={lineDraw} custom={0.1} />
        <text x="0" y="10" font-family="sans-serif" font-size="24" fill="white" text-anchor="middle">12K</text>
      </motion.g>

      <motion.g transform="translate(650, 120)" variants={gaugeSpin} custom={0.2}>
        <circle r="60" stroke="#374151" stroke-width="15" fill="none" />
        <motion.path d="M-60 0 A60 60 0 0 1 0 -60" stroke="#f59e0b" stroke-width="15" fill="none" stroke-linecap="round" variants={lineDraw} custom={0.2} />
        <text x="0" y="10" font-family="sans-serif" font-size="24" fill="white" text-anchor="middle">$4M</text>
      </motion.g>

      {/* Product Mix Bars - Animated */}
      <g transform="translate(480, 220)">
        <rect x="0" y="0" width="270" height="200" rx="8" fill="#1A1A2A" />
        <motion.rect x="20" y="30" height="20" rx="4" fill="#10b981" initial="hidden" whileInView="visible" custom={0} variants={barGrow} />
        <text x="20" y="20" font-family="sans-serif" font-size="12" fill="#9ca3af">Bikes</text>
        <motion.rect x="20" y="80" height="20" rx="4" fill="#3b82f6" initial="hidden" whileInView="visible" custom={1} variants={barGrow} />
        <text x="20" y="70" font-family="sans-serif" font-size="12" fill="#9ca3af">Accessories</text>
        <motion.rect x="20" y="130" height="20" rx="4" fill="#f59e0b" initial="hidden" whileInView="visible" custom={2} variants={barGrow} />
        <text x="20" y="120" font-family="sans-serif" font-size="12" fill="#9ca3af">Clothing</text>
      </g>
      
      {/* Dynamic Route Map */}
      <g transform="translate(50, 220)">
        <rect x="0" y="0" width="400" height="200" rx="8" fill="#1A1A2A" />
        <motion.path d="M 50 150 C 100 80, 200 200, 350 100" stroke="#60a5fa" stroke-width="4" fill="none" variants={lineDraw} custom={0.3} />
        <motion.circle cx="350" cy="100" r="8" fill="#60a5fa" variants={pulse} />
      </g>


    </motion.svg>
  );
}