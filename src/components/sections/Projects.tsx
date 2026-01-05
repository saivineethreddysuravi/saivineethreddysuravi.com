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
    <section id="projects" className="py-32 bg-black min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#9d00ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Selected <span className="text-[#2997ff]">Works.</span>
            </h2>
            <p className="text-xl text-white/60 font-light">
              Architecting data pipelines and visualization layers that drive enterprise value.
            </p>
          </div>

          {/* Minimalist Search */}
          <div className="relative w-full md:w-80 group">
             <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-[#2997ff] transition-colors" />
             <input 
                type="text" 
                placeholder="Search projects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#2997ff]/50 transition-all placeholder:text-white/20 font-light"
             />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => openProject(project)}
                className="group relative cursor-pointer bg-[#111] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col hover:border-[#2997ff]/30 transition-all duration-500"
              >
                {/* Visual Header */}
                <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center p-12">
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-[#2997ff]/20" />
                    
                    <div className="relative z-10 text-center">
                        <span className="text-xs font-mono text-[#2997ff] tracking-[0.2em] uppercase mb-4 block">Case Study {index + 1}</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform duration-500">{project.title}</h3>
                    </div>

                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#2997ff] group-hover:text-black transition-all duration-500">
                        <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-grow">
                    <p className="text-white/60 text-lg font-light leading-relaxed mb-8 line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-white/40 text-xs font-medium tracking-wide">
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
                className="py-40 text-center"
            >
                <p className="text-white/40 text-xl font-light">No projects match your search criteria.</p>
                <button onClick={() => setSearchQuery("")} className="mt-4 text-[#2997ff] hover:underline">Clear Search</button>
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