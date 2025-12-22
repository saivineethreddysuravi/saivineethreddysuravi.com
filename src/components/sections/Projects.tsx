"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt, FaHeart, FaDownload, FaEye, FaCode } from "react-icons/fa";
import Image from "next/image";
import { useSearch } from "@/context/SearchContext";

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
  const { searchQuery, setSearchQuery } = useSearch();

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query))
    );
  });

  return (
    <section id="projects" className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Portfolio Assets</h2>
            <p className="text-slate-400">
                {searchQuery ? `Showing results for "${searchQuery}"` : "Discover the latest projects and case studies."}
            </p>
          </div>
          
           {/* Filter Tags */}
           <div className="hidden md:flex gap-2">
                <button onClick={() => setSearchQuery("")} className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors ${!searchQuery ? "bg-white text-black border-white" : "border-white/10 text-slate-400 hover:text-white"}`}>All</button>
                <button onClick={() => setSearchQuery("Dashboards")} className="px-4 py-1.5 rounded-full border border-white/10 text-sm font-medium text-slate-400 hover:border-white hover:text-white transition-colors">Dashboards</button>
                <button onClick={() => setSearchQuery("Python")} className="px-4 py-1.5 rounded-full border border-white/10 text-sm font-medium text-slate-400 hover:border-white hover:text-white transition-colors">Python</button>
                <button onClick={() => setSearchQuery("Web")} className="px-4 py-1.5 rounded-full border border-white/10 text-sm font-medium text-slate-400 hover:border-white hover:text-white transition-colors">Web</button>
           </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => {
                const AnimatedIconComponent = AnimatedProjectIcons[project.title as keyof typeof AnimatedProjectIcons];
                // Use darker pastel/muted backgrounds for the thumbnail area to fit dark mode
                const bgClass = cardBackgrounds[index % cardBackgrounds.length];

                return (
                  <motion.div
                    layout
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group relative bg-slate-900/40 backdrop-blur-md rounded-xl overflow-hidden border border-white/5 flex flex-col hover:border-white/20 transition-all duration-300"
                  >
                    {/* Thumbnail Area - kept slightly lighter for contrast but still muted */}
                    <div className={`relative w-full aspect-[4/3] ${bgClass} flex items-center justify-center p-8 overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity`}>
                        
                        {/* The Icon/Asset */}
                        <div className="w-full h-full transform group-hover:scale-110 transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) flex items-center justify-center">
                            {AnimatedIconComponent ? (
                                <AnimatedIconComponent /> 
                              ) : (
                                <div className="text-6xl font-black text-slate-700/50 select-none">
                                  {project.title[0]}
                                </div>
                              )}
                        </div>

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 gap-3 backdrop-blur-[2px]">
                            {project.githubUrl && (
                                <motion.a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black shadow-lg" 
                                    title="View Code"
                                    initial={{ scale: 0.8, opacity: 0, y: 10 }}
                                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaCode size={18} />
                                </motion.a>
                            )}
                            {project.liveUrl && (
                                <motion.a 
                                    href={project.liveUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black shadow-lg" 
                                    title="Live Demo"
                                    initial={{ scale: 0.8, opacity: 0, y: 10 }}
                                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaExternalLinkAlt size={18} />
                                </motion.a>
                            )}
                        </div>

                        {/* Badge logic */}
                        {index < 3 ? (
                            <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10 flex items-center gap-1 shadow-blue-900/50">
                                <FaHeart className="text-[9px]" /> FEATURED
                            </div>
                        ) : (
                            <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-slate-300 text-[10px] font-bold px-2 py-1 rounded border border-white/10 z-10">
                                PROJECT
                            </div>
                        )}
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex flex-col flex-grow border-t border-white/5">
                        <h3 className="font-bold text-slate-200 text-lg leading-tight mb-2 hover:text-blue-400 cursor-pointer transition-colors">
                            {project.title}
                        </h3>
                        
                        <p className="text-slate-400 text-sm mb-5 leading-relaxed flex-grow font-light">
                            {project.description}
                        </p>
                        
                        {/* Technologies / Uses Section */}
                        <div className="mb-4">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">Built With</span>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-2 py-1 bg-white/5 text-slate-400 text-[11px] font-medium rounded border border-white/5 hover:border-blue-500/50 hover:text-blue-400 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-bold border border-white/5">
                                    SV
                                </div>
                                <span className="text-xs text-slate-500 font-medium">Sai Vineeth</span>
                            </div>
                            <div className="flex text-slate-600 gap-1 text-[10px]">
                                <FaEye />
                                <span>1.2k</span>
                            </div>
                        </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="col-span-full text-center py-20"
                >
                    <p className="text-slate-500 text-lg">No projects found matching "{searchQuery}"</p>
                    <button onClick={() => setSearchQuery("")} className="mt-4 text-blue-400 hover:underline">Clear search</button>
                </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Pagination / View All */}
        {!searchQuery && (
            <div className="mt-16 flex justify-center">
                <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white hover:text-black transition-all shadow-sm backdrop-blur-sm">
                    View more assets
                </button>
            </div>
        )}
      </div>
    </section>
  );
}
