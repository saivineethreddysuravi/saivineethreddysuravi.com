"use client";

import { motion } from "framer-motion";

interface FinancialLoanIconProps {
  width?: number;
  height?: number;
}

export default function FinancialLoanIcon({ width = 800, height = 450 }: FinancialLoanIconProps) {
  const dollarAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
  };

  const graphAnimation = {
    hidden: { scaleY: 0, transformOrigin: "bottom" },
    visible: (i: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: { delay: 0.5 + i * 0.1, duration: 0.7 },
    }),
  };
  
  const lineAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 1.2 } },
  };

  const valueAnimation = {
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
      <rect width="800" height="450" fill="#1f2937" />

      {/* Main dashboard area */}
      <rect x="50" y="50" width="700" height="350" rx="10" fill="#0f172a" />

      {/* Dollar signs / currency focus */}
      <motion.text x="100" y="120" font-family="sans-serif" font-size="60" fill="#22c55e" variants={dollarAnimation}>$</motion.text>
      <motion.text x="140" y="120" font-family="sans-serif" font-size="40" fill="#f59e0b" variants={dollarAnimation} custom={0.1}>£</motion.text>
      <motion.text x="180" y="120" font-family="sans-serif" font-size="30" fill="#3b82f6" variants={dollarAnimation} custom={0.2}>€</motion.text>

      {/* Loan risk graph (bar chart) */}
      <rect x="80" y="180" width="640" height="200" fill="#1f2937" rx="8" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <motion.rect
          key={i}
          x={100 + i * 90}
          y={360}
          width="40"
          height={50 + i * 20} // Varying heights
          fill={i % 2 === 0 ? "#ef4444" : "#f59e0b"} // Red for high risk, orange for medium
          variants={graphAnimation}
          custom={i}
        />
      ))}
      <motion.text x="100" y="170" font-family="sans-serif" font-size="18" fill="white" variants={valueAnimation} custom={0.5}>Risk Factors</motion.text>

      {/* Approval/Rejection trend line */}
      <motion.path d="M50 300 L150 250 L250 280 L350 200 L450 230 L550 180 L650 210 L750 150" stroke="#3b82f6" stroke-width="4" fill="none" variants={lineAnimation} />
      <motion.text x="600" y="100" font-family="sans-serif" font-size="18" fill="white" variants={valueAnimation} custom={0.8}>Approval Trend</motion.text>

    </motion.svg>
  );
}
