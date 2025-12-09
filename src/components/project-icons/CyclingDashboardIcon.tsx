"use client";

import { motion } from "framer-motion";

interface CyclingDashboardIconProps {
  width?: number;
  height?: number;
}

export default function CyclingDashboardIcon({ width = 800, height = 450 }: CyclingDashboardIconProps) {
  const gaugeAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  const textAnimation = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const barAnimation = {
    hidden: { width: 0, opacity: 0 },
    visible: (i: number) => ({
      width: [200, 140, 80][i % 3], // Example widths
      opacity: 1,
      transition: { duration: 0.8, delay: 0.8 + i * 0.1 },
    }),
  };

  const lineAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, delay: 1 } },
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
      <rect width="800" height="450" fill="#111827" />

      {/* Gauges */}
      <motion.circle cx="150" cy="120" r="60" stroke="#374151" stroke-width="15" variants={gaugeAnimation} />
      <motion.path d="M90 120 A60 60 0 1 1 210 120" stroke="#10b981" stroke-width="15" fill="none" stroke-linecap="round" variants={lineAnimation} custom={0} />
      <motion.text x="150" y="130" font-family="sans-serif" font-size="24" fill="white" text-anchor="middle" variants={textAnimation}>85%</motion.text>

      <motion.circle cx="400" cy="120" r="60" stroke="#374151" stroke-width="15" variants={gaugeAnimation} custom={0.1} />
      <motion.path d="M340 120 A60 60 0 1 1 430 68" stroke="#3b82f6" stroke-width="15" fill="none" stroke-linecap="round" variants={lineAnimation} custom={0.1} />
      <motion.text x="400" y="130" font-family="sans-serif" font-size="24" fill="white" text-anchor="middle" variants={textAnimation} custom={0.1}>12K</motion.text>

      <motion.circle cx="650" cy="120" r="60" stroke="#374151" stroke-width="15" variants={gaugeAnimation} custom={0.2} />
      <motion.path d="M590 120 A60 60 0 0 1 650 60" stroke="#f59e0b" stroke-width="15" fill="none" stroke-linecap="round" variants={lineAnimation} custom={0.2} />
      <motion.text x="650" y="130" font-family="sans-serif" font-size="24" fill="white" text-anchor="middle" variants={textAnimation} custom={0.2}>$4M</motion.text>

      {/* Map / Regional Area */}
      <rect x="50" y="220" width="400" height="200" rx="8" fill="#1f2937" />
      <motion.path d="M100 350 L150 280 L200 300 L250 250 L350 320" stroke="#60a5fa" stroke-width="4" fill="none" variants={lineAnimation} custom={0.3} />
      <motion.circle cx="150" cy="280" r="4" fill="white" variants={textAnimation} custom={0.4} />
      <motion.circle cx="250" cy="250" r="4" fill="white" variants={textAnimation} custom={0.5} />
      
      {/* Product Mix */}
      <rect x="480" y="220" width="270" height="200" rx="8" fill="#1f2937" />
      <motion.rect x="500" y="250" height="20" rx="4" fill="#10b981" variants={barAnimation} custom={0} />
      <motion.text x="500" y="240" font-family="sans-serif" font-size="12" fill="#9ca3af" variants={textAnimation} custom={0.6}>Bikes</motion.text>
      <motion.rect x="500" y="300" height="20" rx="4" fill="#3b82f6" variants={barAnimation} custom={1} />
      <motion.text x="500" y="290" font-family="sans-serif" font-size="12" fill="#9ca3af" variants={textAnimation} custom={0.7}>Accessories</motion.text>
      <motion.rect x="500" y="350" height="20" rx="4" fill="#f59e0b" variants={barAnimation} custom={2} />
      <motion.text x="500" y="340" font-family="sans-serif" font-size="12" fill="#9ca3af" variants={textAnimation} custom={0.8}>Clothing</motion.text>
    </motion.svg>
  );
}
