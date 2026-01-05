"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaRocket, FaCheckCircle, FaLightbulb, FaTools, FaRoad } from "react-icons/fa";
import { useEffect } from "react";

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
              className="bg-[#0f0f11] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl pointer-events-auto relative flex flex-col no-scrollbar"
            >
              
              {/* Header Image / Title Area */}
              <div className="relative h-48 sm:h-64 bg-gradient-to-br from-[#1a1a1a] to-black overflow-hidden shrink-0">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-from)_0%,_transparent_50%)] from-[#2997ff]/20" />
                 <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                 
                 <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-[#0f0f11] via-[#0f0f11]/80 to-transparent">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-3"
                    >
                        {project.title}
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-2"
                    >
                        {project.technologies.map((tech: string, i: number) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium backdrop-blur-sm">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                 </div>

                 <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/50 hover:bg-white/10 text-white/60 hover:text-white transition-colors backdrop-blur-md border border-white/5 z-20"
                >
                    <FaTimes size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="p-8 space-y-12"
              >
                
                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div 
                        variants={itemVariants}
                        className="group bg-[#1a1a1a]/50 p-6 rounded-2xl border border-red-500/10 hover:border-red-500/30 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4 text-red-400">
                            <div className="p-2 bg-red-500/10 rounded-lg">
                                <FaLightbulb className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold">The Challenge</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed">
                            {project.details?.problem}
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="group bg-[#1a1a1a]/50 p-6 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4 text-emerald-400">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <FaCheckCircle className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold">The Solution</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed">
                            {project.details?.solution}
                        </p>
                    </motion.div>
                </div>

                {/* Key Features */}
                <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <FaTools className="text-[#2997ff]" /> Key Features
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {project.details?.features?.map((feature: string, i: number) => (
                            <motion.div 
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#2997ff]/30 hover:bg-[#2997ff]/5 transition-all"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2997ff] mb-3" />
                                <p className="text-white/80 text-sm font-medium leading-relaxed">
                                    {feature}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Future Scope / Roadmap */}
                {project.details?.future && (
                    <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#2997ff]/5 to-transparent p-1 rounded-2xl">
                         <div className="bg-[#131313] rounded-xl p-8 border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <FaRoad className="text-purple-400" /> Future Roadmap
                            </h3>
                            <div className="space-y-4">
                                {project.details.future.map((item: string, i: number) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="flex flex-col items-center gap-2 mt-1.5">
                                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                                            {i !== project.details.future.length - 1 && (
                                                <div className="w-[1px] h-full bg-white/10" />
                                            )}
                                        </div>
                                        <p className="text-white/60 text-sm pb-4">{item}</p>
                                    </div>
                                ))}
                            </div>
                         </div>
                    </motion.div>
                )}

                {/* Impact */}
                <motion.div variants={itemVariants} className="bg-[#000] p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <FaRocket className="text-orange-400" /> Impact & Results
                    </h3>
                    <p className="text-white/80 leading-relaxed font-light text-lg">
                        {project.details?.impact}
                    </p>
                </motion.div>

              </motion.div>

              {/* Footer Actions */}
              <div className="sticky bottom-0 bg-[#0f0f11]/80 backdrop-blur-xl border-t border-white/10 p-6 flex justify-end gap-4 z-20">
                {project.githubUrl && (
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2"
                    >
                        <FaGithub /> View Code
                    </a>
                )}
                {project.liveUrl && (
                    <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-[#2997ff] text-white font-semibold hover:bg-[#1e7acc] transition-colors flex items-center gap-2"
                    >
                        <FaExternalLinkAlt /> Live Demo
                    </a>
                )}
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}