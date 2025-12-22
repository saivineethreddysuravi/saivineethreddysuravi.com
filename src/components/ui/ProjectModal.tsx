"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaRocket, FaCheckCircle, FaLightbulb, FaTools } from "react-icons/fa";
import { useEffect } from "react";

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

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
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            {/* Modal Content */}
            <div className="bg-[#0a0a20] border border-cyan-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] pointer-events-auto relative flex flex-col">
              
              {/* Header */}
              <div className="sticky top-0 z-10 bg-[#0a0a20]/95 backdrop-blur-xl border-b border-cyan-500/20 p-6 flex justify-between items-start">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, i: number) => (
                            <span key={i} className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <button 
                    onClick={onClose}
                    className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                >
                    <FaTimes size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-8">
                
                {/* Problem & Solution Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-xl">
                        <div className="flex items-center gap-2 mb-3 text-red-400 font-bold">
                            <FaLightbulb />
                            <h3>The Problem</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-sm">
                            {project.details?.problem || "Defining the core challenge was the first step in this project."}
                        </p>
                    </div>
                    <div className="bg-green-500/5 border border-green-500/10 p-5 rounded-xl">
                        <div className="flex items-center gap-2 mb-3 text-green-400 font-bold">
                            <FaCheckCircle />
                            <h3>The Solution</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-sm">
                            {project.details?.solution || "A robust solution was engineered to address these specific needs."}
                        </p>
                    </div>
                </div>

                {/* Key Features */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FaTools className="text-purple-400" /> Key Features
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {project.details?.features?.map((feature: string, i: number) => (
                            <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-cyan-500 shadow-[0_0_8px_cyan]" />
                                <span className="text-slate-300 text-sm">{feature}</span>
                            </div>
                        )) || <p className="text-slate-500">Feature list unavailable.</p>}
                    </div>
                </div>

                {/* Impact / Results */}
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-500/20">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                        <FaRocket className="text-yellow-400" /> Impact & Results
                    </h3>
                    <p className="text-blue-100/80 leading-relaxed">
                        {project.details?.impact || "This project delivered significant value and actionable insights."}
                    </p>
                </div>

              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-white/10 bg-[#0a0a20] flex flex-wrap gap-4">
                {project.githubUrl && (
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-white/5 hover:bg-white hover:text-black text-white py-3 rounded-xl border border-white/10 transition-all font-bold"
                    >
                        <FaGithub size={18} /> View Code
                    </a>
                )}
                {project.liveUrl && (
                    <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all font-bold"
                    >
                        <FaExternalLinkAlt size={18} /> Live Demo
                    </a>
                )}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
