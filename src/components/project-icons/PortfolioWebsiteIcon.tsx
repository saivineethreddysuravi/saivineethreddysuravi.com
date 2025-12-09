"use client";

import { motion } from "framer-motion";

interface PortfolioWebsiteIconProps {
  width?: number;
  height?: number;
}

export default function PortfolioWebsiteIcon({ width = 800, height = 450 }: PortfolioWebsiteIconProps) {
  const browserAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  const lineAnimation = {
    hidden: { scaleX: 0, transformOrigin: "left" },
    visible: (i: number) => ({
      scaleX: 1,
      opacity: 1,
      transition: { delay: 0.5 + i * 0.1, duration: 0.6 },
    }),
  };
  
  const buttonAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.2 } },
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
      <rect width="800" height="450" fill="#09090b"/>
      
      {/* Browser Window Frame */}
      <motion.rect x="50" y="50" width="700" height="350" rx="10" fill="#18181b" variants={browserAnimation} />
      <rect x="50" y="50" width="700" height="40" rx="10" fill="#2d3748" /> {/* Top bar of browser */}
      <circle cx="70" cy="70" r="8" fill="#ef4444" />
      <circle cx="90" cy="70" r="8" fill="#f59e0b" />
      <circle cx="110" cy="70" r="8" fill="#22c55e" />

      {/* Hero Section Placeholder */}
      <motion.rect x="150" y="120" width="500" height="40" rx="4" fill="#3b82f6" variants={lineAnimation} custom={0} />
      <motion.rect x="180" y="180" width="440" height="25" rx="4" fill="#64748b" variants={lineAnimation} custom={1} />
      <motion.rect x="200" y="220" width="400" height="25" rx="4" fill="#64748b" variants={lineAnimation} custom={2} />
      <motion.rect x="220" y="260" width="360" height="25" rx="4" fill="#64748b" variants={lineAnimation} custom={3} />

      {/* Call to Action Buttons */}
      <motion.rect x="250" y="320" width="120" height="40" rx="20" fill="#10b981" variants={buttonAnimation} custom={0} />
      <motion.rect x="400" y="320" width="120" height="40" rx="20" fill="#3b82f6" variants={buttonAnimation} custom={1} />

    </motion.svg>
  );
}
