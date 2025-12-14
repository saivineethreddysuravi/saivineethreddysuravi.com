"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt, FaHeart, FaDownload, FaEye, FaCode } from "react-icons/fa";
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

// Pastel colors for card backgrounds to look like asset thumbnails
const cardBackgrounds = [
    "bg-blue-50",
    "bg-purple-50",
    "bg-emerald-50",
    "bg-orange-50",
    "bg-cyan-50",
    "bg-rose-50",
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Portfolio Assets</h2>
            <p className="text-slate-500">Discover the latest projects and case studies.</p>
          </div>
          
           {/* Fake Filter Tags */}
           <div className="hidden md:flex gap-2">
                <button className="px-4 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:border-blue-500 hover:text-blue-500 transition-colors">Dashboards</button>
                <button className="px-4 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:border-blue-500 hover:text-blue-500 transition-colors">Python</button>
                <button className="px-4 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:border-blue-500 hover:text-blue-500 transition-colors">Web</button>
           </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => {
            const AnimatedIconComponent = AnimatedProjectIcons[project.title as keyof typeof AnimatedProjectIcons];
            const bgClass = cardBackgrounds[index % cardBackgrounds.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col"
              >
                {/* Thumbnail Area */}
                <div className={`relative w-full aspect-[4/3] ${bgClass} flex items-center justify-center p-8 overflow-hidden`}>
                    
                    {/* The Icon/Asset */}
                    <div className="w-full h-full transform group-hover:scale-110 transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) flex items-center justify-center">
                         {AnimatedIconComponent ? (
                            <AnimatedIconComponent /> 
                          ) : (
                            <div className="text-6xl font-black text-slate-300 select-none">
                              {project.title[0]}
                            </div>
                          )}
                    </div>

                    {/* Overlay on Hover (Freepik Style) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 gap-3 backdrop-blur-[1px]">
                        {project.githubUrl && (
                            <motion.a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-3 bg-white rounded-lg text-slate-800 hover:text-blue-600 shadow-lg" 
                                title="View Code"
                                initial={{ scale: 0.8, opacity: 0, y: 10 }}
                                whileInView={{ scale: 1, opacity: 1, y: 0 }} // Reset
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaCode size={20} />
                            </motion.a>
                        )}
                        {project.liveUrl && (
                            <motion.a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-3 bg-white rounded-lg text-slate-800 hover:text-blue-600 shadow-lg" 
                                title="Live Demo"
                                initial={{ scale: 0.8, opacity: 0, y: 10 }}
                                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaExternalLinkAlt size={20} />
                            </motion.a>
                        )}
                    </div>

                    {/* Badge logic */}
                    {index < 3 ? (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10 flex items-center gap-1">
                             <FaHeart className="text-[9px]" /> FEATURED
                        </div>
                    ) : (
                        <div className="absolute top-3 left-3 bg-slate-200/80 backdrop-blur-sm text-slate-600 text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10 border border-slate-300">
                            PROJECT
                        </div>
                    )}
                    
                    {/* Like button (Visual only) */}
                    <button className="absolute top-3 right-3 p-2 text-white/70 hover:text-red-500 transition-all hover:scale-110 active:scale-95 z-10 bg-black/10 hover:bg-white rounded-lg">
                        <FaHeart size={18} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-slate-800 text-lg leading-tight mb-3 hover:text-[#1273eb] cursor-pointer transition-colors">
                        {project.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm mb-5 leading-relaxed flex-grow">
                        {project.description}
                    </p>
                    
                    {/* Technologies / Uses Section */}
                    <div className="mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Uses</span>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-50 text-slate-600 text-[11px] font-medium rounded border border-slate-200 hover:border-blue-200 hover:text-blue-600 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                        <div className="flex items-center gap-2">
                             <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-500 font-bold">
                                SV
                             </div>
                             <span className="text-xs text-slate-500 font-medium">Sai Vineeth</span>
                        </div>
                        <div className="flex text-slate-300 gap-1 text-[10px]">
                            <FaEye />
                            <span>1.2k</span>
                        </div>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Pagination / View All */}
        <div className="mt-16 flex justify-center">
            <button className="px-8 py-3 bg-white border border-slate-300 text-slate-600 font-medium rounded-lg hover:border-[#1273eb] hover:text-[#1273eb] transition-all shadow-sm">
                View more assets
            </button>
        </div>
      </div>
    </section>
  );
}
