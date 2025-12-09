"use client";

import { motion } from "framer-motion";

interface StudentDropoutIconProps {
  width?: number;
  height?: number;
}

export default function StudentDropoutIcon({ width = 800, height = 450 }: StudentDropoutIconProps) {
  const lineAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5 } },
  };

  const pointAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.5 } },
  };

  const textAnimation = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.8 } },
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
      <rect width="800" height="450" fill="#18181b"/>
      <rect x="0" y="0" width="800" height="450" fill="url(#paint0_linear)"/>
      
      {/* Chart lines */}
      <motion.path d="M100 350L200 300L300 320L400 200L500 250L600 100" stroke="#3b82f6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" variants={lineAnimation} />
      
      {/* Data points */}
      <motion.circle cx="100" cy="350" r="6" fill="#60a5fa" variants={pointAnimation} custom={0} />
      <motion.circle cx="200" cy="300" r="6" fill="#60a5fa" variants={pointAnimation} custom={0.1} />
      <motion.circle cx="300" cy="320" r="6" fill="#60a5fa" variants={pointAnimation} custom={0.2} />
      <motion.circle cx="400" cy="200" r="6" fill="#60a5fa" variants={pointAnimation} custom={0.3} />
      <motion.circle cx="500" cy="250" r="6" fill="#60a5fa" variants={pointAnimation} custom={0.4} />
      <motion.circle cx="600" cy="100" r="8" fill="#ffffff" stroke="#3b82f6" stroke-width="4" variants={pointAnimation} custom={0.5} />
      
      {/* Axes */}
      <path d="M100 380H700" stroke="#52525b" stroke-width="2"/>
      <path d="M100 100V380" stroke="#52525b" stroke-width="2"/>

      {/* Graduation Cap (subtle indicator) */}
      <motion.path d="M680 100 L720 100 L720 120 L680 120 Z" fill="#f59e0b" initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 2, duration: 0.5 }} viewport={{ once: true, amount: 0.5 }} />
      <motion.rect x="680" y="120" width="40" height="10" fill="#f59e0b" initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 2.1, duration: 0.5 }} viewport={{ once: true, amount: 0.5 }} />
      <motion.line x1="700" y1="130" x2="700" y2="150" stroke="#f59e0b" stroke-width="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 2.2, duration: 0.5 }} viewport={{ once: true, amount: 0.5 }} />


      <defs>
        <linearGradient id="paint0_linear" x1="400" y1="0" x2="400" y2="450" gradientUnits="userSpaceOnUse">
          <stop stop-color="#27272a"/>
          <stop offset="1" stop-color="#09090b"/>
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
