"use client";

import { motion } from "framer-motion";

interface SalesDashboardIconProps {
  width?: number;
  height?: number;
}

export default function SalesDashboardIcon({ width = 800, height = 450 }: SalesDashboardIconProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const barGrow = {
    hidden: { scaleY: 0, transformOrigin: "bottom", opacity: 0 },
    visible: (i: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.5 + i * 0.1 },
    }),
  };

  const lineDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, delay: 0.8 } },
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

  const dataStream = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.2 } },
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

      {/* Data Flow Stream */}
      <motion.path
        d="M 100 100 L 700 100 L 700 350 L 100 350 Z"
        stroke="#00FFFF" stroke-width="2" fill="none"
        variants={lineDraw}
      />
      <motion.rect x="120" y="120" width="80" height="10" fill="#00FFFF" variants={dataStream} />
      <motion.rect x="220" y="120" width="80" height="10" fill="#00FFFF" variants={dataStream} custom={0.1} />
      <motion.rect x="320" y="120" width="80" height="10" fill="#00FFFF" variants={dataStream} custom={0.2} />

      {/* Radial Sales Chart */}
      <motion.circle cx="200" cy="280" r="80" stroke="#FF00FF" stroke-width="5" fill="none" variants={lineDraw} custom={0.5} />
      <motion.path
        d="M 200 280 L 200 200 A 80 80 0 0 1 270 240 L 200 280 Z"
        fill="#FF00FF" opacity="0.6"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, transition: { duration: 1, delay: 1.5 } }}
      />
      <motion.circle cx="200" cy="280" r="5" fill="#FF00FF" variants={pulse} />

      {/* Bar Chart - Sales Growth */}
      <g transform="translate(450, 200)">
        <motion.rect x="0" y="0" width="250" height="150" rx="8" fill="#1A1A2A" />
        {[1, 2, 3, 4].map((i) => (
          <motion.rect
            key={i}
            x={20 + (i - 1) * 55}
            y="140" width="30"
            height="0"
            fill="#8AFF8A"
            initial={{ height: 0, y: 140 }}
            whileInView={{ height: (i * 20) + 20, y: 140 - ((i * 20) + 20), transition: { duration: 0.7, delay: 1.2 + i * 0.1 } }}
            viewport={{ once: true, amount: 0.5 }}
          />
        ))}
      </g>
      <motion.text x="470" y="220" font-family="sans-serif" font-size="18" fill="#E0E0E0" variants={dataStream} custom={0.8}>Growth Metrics</motion.text>


    </motion.svg>
  );
}
