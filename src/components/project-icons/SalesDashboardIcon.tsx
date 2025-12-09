"use client";

import { motion } from "framer-motion";

interface SalesDashboardIconProps {
  width?: number;
  height?: number;
}

export default function SalesDashboardIcon({ width = 800, height = 450 }: SalesDashboardIconProps) {
  const barHeights = [60, 100, 80, 120, 140, 100, 85]; // Heights for bars
  const barXPositions = [120, 180, 240, 300, 360, 420, 480]; // X positions for bars

  const pieAnimation = {
    initial: { scale: 0, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 1, delay: 0.5 },
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

      {/* Sidebar */}
      <rect width="60" height="450" fill="#1e293b" />
      <rect x="15" y="20" width="30" height="30" rx="4" fill="#3b82f6" />
      <rect x="15" y="80" width="30" height="30" rx="4" fill="#334155" />
      <rect x="15" y="130" width="30" height="30" rx="4" fill="#334155" />
      <rect x="15" y="180" width="30" height="30" rx="4" fill="#334155" />

      {/* Top KPI Cards (static for simplicity) */}
      <rect x="90" y="30" width="210" height="80" rx="8" fill="#1e293b" />
      <rect x="110" y="50" width="100" height="10" rx="2" fill="#475569" />
      <rect x="110" y="70" width="60" height="20" rx="2" fill="#22c55e" />

      <rect x="320" y="30" width="210" height="80" rx="8" fill="#1e293b" />
      <rect x="340" y="50" width="100" height="10" rx="2" fill="#475569" />
      <rect x="340" y="70" width="60" height="20" rx="2" fill="#3b82f6" />

      <rect x="550" y="30" width="210" height="80" rx="8" fill="#1e293b" />
      <rect x="570" y="50" width="100" height="10" rx="2" fill="#475569" />
      <rect x="570" y="70" width="60" height="20" rx="2" fill="#f59e0b" />

      {/* Main Chart Area (Bar Chart) - Animated */}
      <rect x="90" y="140" width="440" height="280" rx="8" fill="#1e293b" />
      {barHeights.map((h, i) => (
        <motion.rect
          key={i}
          x={barXPositions[i]}
          y={380 - h}
          width="20"
          height={h}
          initial={{ height: 0, y: 380 }}
          whileInView={{ height: h, y: 380 - h }}
          transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
          fill="#3b82f6"
        />
      ))}

      {/* Secondary Chart Area (Pie Chart) - Animated */}
      <rect x="550" y="140" width="210" height="280" rx="8" fill="#1e293b" />
      <motion.circle cx="655" cy="280" r="70" initial={pieAnimation.initial} whileInView={pieAnimation.whileInView} transition={pieAnimation.transition} fill="#3b82f6" />
      <motion.path d="M655 280 L655 210 A70 70 0 0 1 715 315 Z" initial={pieAnimation.initial} whileInView={pieAnimation.whileInView} transition={pieAnimation.transition} fill="#22c55e" />
      <motion.path d="M655 280 L715 315 A70 70 0 0 1 600 300 Z" initial={pieAnimation.initial} whileInView={pieAnimation.whileInView} transition={pieAnimation.transition} fill="#f59e0b" />

      <defs>
        <linearGradient id="grad1" x1="50" y1="100" x2="250" y2="220" gradientUnits="userSpaceOnUse">
          <stop stop-color="#3b82f6" />
          <stop offset="1" stop-color="#1e40af" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}