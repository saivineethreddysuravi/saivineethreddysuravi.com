"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";

// Animation Variants for Staggered Lists
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-black relative">
      
      {/* Background Ambience */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Career <span className="text-[#2997ff]">Trajectory.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl font-light">
            A history of delivering high-impact data solutions across global enterprises.
          </p>
        </motion.div>

        {/* Bento Grid Layout - Redesigned for better flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          
          {experience.map((job, index) => {
            // Layout Logic: 
            // Index 0 (StarTech): Full width (col-span-3) for maximum impact
            // Index 1 (Qualcomm): 2/3 width (col-span-2) to give bullet points breathing room
            // Education: 1/3 width (col-span-1) to sit nicely next to Qualcomm
            
            const isFirst = index === 0;
            const gridClass = isFirst 
              ? "lg:col-span-3 bg-gradient-to-br from-[#111] to-[#161616]" 
              : "lg:col-span-2 bg-[#111]";

            const accentColor = isFirst ? "text-[#2997ff]" : "text-[#a855f7]"; // Blue for current, Purple for past
            const borderHover = isFirst ? "hover:border-[#2997ff]/30" : "hover:border-[#a855f7]/30";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group border border-white/5 rounded-3xl p-8 ${borderHover} transition-all duration-500 overflow-hidden flex flex-col ${gridClass}`}
              >
                {/* Card Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isFirst ? 'bg-blue-500' : 'bg-purple-500'}`} />
                
                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
                      <div>
                          <h3 className={`text-3xl font-bold text-white mb-2 ${isFirst ? "group-hover:text-[#2997ff]" : "group-hover:text-[#a855f7]"} transition-colors`}>
                            {job.role}
                          </h3>
                          <div className="flex items-center gap-3">
                             <span className="text-white/80 font-medium text-lg">{job.company}</span>
                             <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20"></span>
                             <span className="text-white/40 text-sm">{job.location}</span>
                          </div>
                      </div>
                      <span className="self-start text-xs font-mono text-white/50 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider bg-white/5 whitespace-nowrap">
                          {job.period}
                      </span>
                    </div>

                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={`space-y-4 ${!isFirst ? 'grid grid-cols-1 gap-x-8' : 'grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 space-y-0'}`} 
                    >
                      {/* Note: The Grid logic above creates a 2-column layout for bullet points in the BIG card (StarTech) */}
                      
                      {job.description.map((desc, i) => {
                         const parts = desc.split(/(\*\*.*?\*\*)/g);
                         return (
                          <motion.li 
                            variants={itemVariants}
                            key={i} 
                            className={`text-white/70 text-sm leading-relaxed pl-4 border-l-2 border-white/10 transition-colors ${isFirst ? 'group-hover:border-[#2997ff]/50' : 'group-hover:border-[#a855f7]/50'}`}
                          >
                             {parts.map((part, idx) => {
                               if (part.startsWith("**") && part.endsWith("**")) {
                                 return <span key={idx} className={`${isFirst ? 'text-[#2997ff]' : 'text-[#a855f7]'} font-semibold`}>{part.replace(/\*\*/g, "")}</span>;
                               }
                               return part;
                             })}
                          </motion.li>
                         );
                      })}
                    </motion.ul>
                </div>
              </motion.div>
            );
          })}

          {/* Education Card - Now sits next to Qualcomm */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="lg:col-span-1 relative group bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-[#ffffff]/30 transition-all duration-500 overflow-hidden flex flex-col"
          >
             <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-2xl">🎓</span> Education
                </h3>
                <div className="space-y-8 relative z-10">
                    {education.map((edu, i) => (
                        <div key={i} className="relative pl-6 border-l border-white/10">
                            <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#2997ff]" />
                            <h4 className="text-white font-semibold text-lg leading-tight mb-1">{edu.institution}</h4>
                            <p className="text-white/50 text-sm mb-2">{edu.degree}</p>
                            <p className="text-white/30 text-xs font-mono bg-white/5 inline-block px-2 py-0.5 rounded">{edu.period}</p>
                        </div>
                    ))}
                </div>
             </div>
             
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}