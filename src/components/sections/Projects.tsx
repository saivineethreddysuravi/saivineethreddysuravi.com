"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

// Import new animated project icons
import SalesDashboardIcon from "@/components/project-icons/SalesDashboardIcon";
import SnakeGameIcon from "@/components/project-icons/SnakeGameIcon";

// Map project titles to their animated components
const AnimatedProjectIcons = {
  "Sales Performance Dashboard": SalesDashboardIcon,
  "Snake Game": SnakeGameIcon,
  // Add other animated components here as they are created
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
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
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-white/10 shadow-2xl group-hover:shadow-blue-900/20 transition-all duration-700">
                      {AnimatedIconComponent ? (
                        <AnimatedIconComponent width={800} height={450} /> // Pass appropriate size props
                      ) : project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
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
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors"
                        >
                          <FaGithub size={20} />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors"
                        >
                          <FaExternalLinkAlt size={18} />
                          Live Demo
                        </a>
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
