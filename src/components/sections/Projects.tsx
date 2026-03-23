"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/context/SearchContext";
import { projects } from "@/data/portfolio";
import { useState } from "react";
import ProjectModal from "@/components/ui/ProjectModal";
import { FaArrowRight, FaSearch } from "react-icons/fa";

export default function Projects() {
  const { searchQuery, setSearchQuery } = useSearch();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query))
    );
  });

  return (
    <section id="projects" className="py-32 bg-[#050505] min-h-screen relative border-t border-white/5">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/20">Case Studies</span>
            </h2>
            <p className="text-lg text-white/50 font-light">
              End-to-end architectures demonstrating business ROI through data.
            </p>
          </div>

          {/* Minimalist Search */}
          <div className="relative w-full md:w-80 group">
             <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/60 transition-colors" />
             <input 
                type="text" 
                placeholder="Search technologies..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-full py-3.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:bg-white/[0.05] focus:border-white/20 transition-all placeholder:text-white/30 font-light shadow-inner"
             />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => openProject(project)}
                className="group cursor-pointer bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500"
              >
                {/* Visual Header */}
                <div className="relative w-full h-64 bg-[#0a0a0a] flex items-center justify-center p-8 border-b border-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 text-center max-w-[80%]">
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform duration-700 ease-out">{project.title}</h3>
                    </div>

                    <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                    <p className="text-white/60 text-base font-light leading-relaxed mb-8">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 rounded-md bg-white/[0.05] text-white/60 text-xs font-medium tracking-wide">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center border border-white/5 rounded-[2rem] bg-white/[0.02]"
            >
                <p className="text-white/40 text-lg font-light mb-4">No case studies match your search.</p>
                <button onClick={() => setSearchQuery("")} className="text-sm font-medium text-white/80 hover:text-white border-b border-white/20 pb-0.5 transition-colors">Clear Search</button>
            </motion.div>
        )}

      </div>

      <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}