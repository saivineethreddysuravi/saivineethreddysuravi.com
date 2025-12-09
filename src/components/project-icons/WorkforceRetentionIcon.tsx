"use client";

import { motion } from "framer-motion";

interface WorkforceRetentionIconProps {
  width?: number;
  height?: number;
}

export default function WorkforceRetentionIcon({ width = 800, height = 450 }: WorkforceRetentionIconProps) {
  const chartAnimation = {
    hidden: { scaleY: 0, transformOrigin: "bottom" },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 1 } },
  };

  const lineAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, delay: 0.5 } },
  };

  const textAnimation = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.8 } },
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
    >
      <rect width="800" height="450" fill="#1e293b" />

      {/* Main dashboard area */}
      <rect x="50" y="50" width="700" height="350" rx="10" fill="#0f172a" />

      {/* Retention Rate Gauge */}
      <motion.circle cx="150" cy="150" r="70" stroke="#334155" stroke-width="15" variants={chartAnimation} />
      <motion.path d="M80 150 A70 70 0 1 1 220 150" stroke="#22c55e" stroke-width="15" fill="none" variants={lineAnimation} custom={0} />
      <motion.text x="150" y="160" font-family="sans-serif" font-size="36" fill="white" text-anchor="middle" variants={textAnimation}>85%</motion.text>
      <motion.text x="150" y="190" font-family="sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle" variants={textAnimation} custom={0.1}>Retention</motion.text>

      {/* Turnover Trend Line */}
      <motion.path d="M280 250 L380 200 L480 230 L580 180 L680 210" stroke="#ef4444" stroke-width="4" fill="none" variants={lineAnimation} custom={0.2} />
      <motion.text x="350" y="170" font-family="sans-serif" font-size="18" fill="white" variants={textAnimation} custom={0.3}>Turnover Trend</motion.text>

      {/* Employee Count Bars */}
      <rect x="280" y="280" width="450" height="100" fill="#1f2937" rx="8" />
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={300 + i * 100}
          y={360}
          width="60"
          height={80 - i * 15} // Varying heights
          fill="#3b82f6"
          initial={{ height: 0, y: 360 }}
          whileInView={{ height: 80 - i * 15, y: 360 - (80 - i * 15) }}
          transition={{ delay: 1 + i * 0.2, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        />
      ))}
      <motion.text x="300" y="270" font-family="sans-serif" font-size="18" fill="white" variants={textAnimation} custom={0.4}>Employee Demographics</motion.text>

    </motion.svg>
  );
}
