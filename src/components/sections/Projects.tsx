"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

// Import new animated project icons
import SalesDashboardIcon from "@/components/project-icons/SalesDashboardIcon";
import SnakeGameIcon from "@/components/project-icons/SnakeGameIcon";
import CreditCardDashboardIcon from "@/components/project-icons/CreditCardDashboardIcon";
import CyclingDashboardIcon from "@/components/project-icons/CyclingDashboardIcon";
import StudentDropoutIcon from "@/components/project-icons/StudentDropoutIcon";
import FinancialLoanIcon from "@/components/project-icons/FinancialLoanIcon";
import WorkforceRetentionIcon from "@/components/project-icons/WorkforceRetentionIcon";
import RestaurantInsightsIcon from "@/components/project-icons/RestaurantInsightsIcon";
import MexicanRestaurantIcon from "@/components/project-icons/MexicanRestaurantIcon";
import PortfolioWebsiteIcon from "@/components/project-icons/PortfolioWebsiteIcon";


// Map project titles to their animated components
const AnimatedProjectIcons = {
  "Credit Card Financial Dashboard": CreditCardDashboardIcon,
  "Cycling Equipment Market Analysis": CyclingDashboardIcon,
  "Sales Performance Dashboard": SalesDashboardIcon,
  "Student Dropout Prediction": StudentDropoutIcon,
  "Financial Loan Analytics": FinancialLoanIcon,
  "Workforce Retention Dashboard": WorkforceRetentionIcon,
  "Restaurant Market Insights": RestaurantInsightsIcon,
  "Mexican Restaurant Analysis": MexicanRestaurantIcon,
  "Snake Game": SnakeGameIcon,
  "Portfolio Website": PortfolioWebsiteIcon,
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Selected Work.</h2>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => {
            const AnimatedIconComponent = AnimatedProjectIcons[project.title as keyof typeof AnimatedProjectIcons];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <div className="relative w-full h-full aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-white/10 shadow-2xl group-hover:shadow-blue-900/20 transition-all duration-700">
                      {AnimatedIconComponent ? (
                        <AnimatedIconComponent /> // Pass appropriate size props
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-6xl font-black opacity-30 select-none">
                          {project.title[0]}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>

                  <div className="lg:col-span-5 order-1 lg:order-2">
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-1.5 rounded-full border border-white/10 text-sm text-gray-300 bg-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors"
                          whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(41, 151, 255, 0.6), 0 0 16px rgba(41, 151, 255, 0.4)" }}
                          whileTap={{ scale: 1.05, rotate: [0, -1, 1, -1, 0], boxShadow: "0 0 8px rgba(41, 151, 255, 0.8), 0 0 20px rgba(41, 151, 255, 0.6)" }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <FaGithub size={18} />
                          View Code
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors"
                          whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(41, 151, 255, 0.6), 0 0 16px rgba(41, 151, 255, 0.4)" }}
                          whileTap={{ scale: 1.05, rotate: [0, -1, 1, -1, 0], boxShadow: "0 0 8px rgba(41, 151, 255, 0.8), 0 0 20px rgba(41, 151, 255, 0.6)" }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <FaExternalLinkAlt size={18} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}