"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#050505] relative border-t border-white/5">
      
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 md:text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/20">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light">
            A track record of engineering data systems and delivering strategic insights across global enterprises.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-24">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-white/30 -translate-x-[7px] md:-translate-x-1/2 mt-2 z-10 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />

                {/* Date Side */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/70 text-sm font-medium tracking-wide mb-4">
                    {job.period}
                  </span>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <div className="group bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 rounded-3xl p-8 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">{job.role}</h3>
                    <p className="text-[#2997ff]/80 font-medium mb-6">{job.company} <span className="text-white/30 ml-2 text-sm font-light">• {job.location}</span></p>

                    <ul className="space-y-4 text-left">
                      {job.description.map((desc, i) => {
                         const parts = desc.split(/(\*\*.*?\*\*)/g);
                         return (
                          <li key={i} className="text-white/60 text-sm leading-relaxed flex items-start">
                             <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                             <span>
                               {parts.map((part, idx) => {
                                 if (part.startsWith("**") && part.endsWith("**")) {
                                   return <strong key={idx} className="text-white/90 font-medium">{part.replace(/\*\*/g, "")}</strong>;
                                 }
                                 return part;
                               })}
                             </span>
                          </li>
                         );
                      })}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="mt-32 pt-20 border-t border-white/5"
        >
           <h3 className="text-3xl font-bold text-white mb-12 text-center">Education</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors">
                      <h4 className="text-xl text-white font-semibold mb-2">{edu.institution}</h4>
                      <p className="text-[#2997ff]/80 text-sm font-medium mb-4">{edu.degree}</p>
                      <div className="flex items-center justify-between text-white/40 text-xs font-mono">
                         <span>{edu.location}</span>
                         <span>{edu.period}</span>
                      </div>
                  </div>
              ))}
           </div>
        </motion.div>

      </div>
    </section>
  );
}
