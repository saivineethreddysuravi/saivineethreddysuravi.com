"use client";

import { motion } from "framer-motion";

interface CreditCardDashboardIconProps {
  width?: number;
  height?: number;
}

export default function CreditCardDashboardIcon({ width = 800, height = 450 }: CreditCardDashboardIconProps) {
  const cardAnimation = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const chartAnimation = {
    hidden: { height: 0, opacity: 0 },
    visible: (i: number) => ({
      height: [0, 50, 80, 60, 90][i % 5],
      opacity: 1,
      y: [380 - 50, 380 - 80, 380 - 60, 380 - 90][i % 5], // Adjusted y-position
      transition: { delay: 0.5 + i * 0.1, duration: 0.6 },
    }),
  };
  
  const valueAnimation = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.5 } },
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
      <rect width="800" height="450" fill="#0f172a" />
      
      {/* Header */}
      <rect x="0" y="0" width="800" height="60" fill="#1e293b"/>
      <motion.circle cx="40" cy="30" r="15" fill="#f59e0b" variants={valueAnimation} />
      <motion.rect x="70" y="20" width="200" height="20" rx="4" fill="#64748b" variants={valueAnimation} />

      {/* Cards */}
      <motion.rect x="50" y="100" width="200" height="120" rx="10" fill="#3b82f6" variants={cardAnimation} />
      <motion.rect x="280" y="100" width="200" height="120" rx="10" fill="#334155" variants={cardAnimation} custom={0.1} />
      <motion.rect x="510" y="100" width="240" height="120" rx="10" fill="#334155" variants={cardAnimation} custom={0.2} />

      {/* Bar Chart */}
      <rect x="50" y="260" width="430" height="160" rx="10" fill="#1e293b"/>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <motion.rect
          key={i}
          x={80 + i * 50}
          y={380} // Start from bottom
          width="30"
          initial="hidden"
          whileInView={{ height: [0, 50, 80, 60, 90][i % 5], y: 380 - [50, 80, 60, 90][i % 5] }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" }}
          fill="#3b82f6"
          viewport={{ once: true, amount: 0.5 }}
        />
      ))}

      {/* Pie Chart */}
      <rect x="510" y="260" width="240" height="160" rx="10" fill="#1e293b"/>
      <motion.circle cx="630" cy="340" r="60" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} fill="#f59e0b" viewport={{ once: true, amount: 0.5 }} />
      <motion.path d="M630 340 L630 280 A60 60 0 0 1 680 370 Z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1, duration: 1.2 }} fill="#3b82f6" stroke="#0f172a" stroke-width="2" viewport={{ once: true, amount: 0.5 }} />
      <motion.path d="M630 340 L680 370 A60 60 0 0 1 580 350 Z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1.5, duration: 1.2 }} fill="#22c55e" stroke="#0f172a" stroke-width="2" viewport={{ once: true, amount: 0.5 }} />

    </motion.svg>
  );
}
