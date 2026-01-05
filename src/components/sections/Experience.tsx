"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";

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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-[#2997ff]/30 transition-all duration-500 overflow-hidden flex flex-col ${
                index === 0 ? "lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-[#111] to-[#161616]" : ""
              }`}
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2997ff]/0 to-[#2997ff]/0 group-hover:from-[#2997ff]/5 group-hover:to-[#2997ff]/0 transition-all duration-500" />
              
              <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#2997ff] transition-colors">{job.role}</h3>
                        <p className="text-white/60 font-medium">{job.company}</p>
                    </div>
                    <span className="text-xs font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {job.period}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {job.description.map((desc, i) => {
                       const parts = desc.split(/(\*\*.*?\*\*)/g);
                       return (
                        <li key={i} className="text-white/70 text-sm leading-relaxed pl-4 border-l-2 border-white/10 group-hover:border-[#2997ff]/50 transition-colors">
                           {parts.map((part, idx) => {
                             if (part.startsWith("**") && part.endsWith("**")) {
                               return <span key={idx} className="text-[#2997ff] font-semibold">{part.replace(/\*\*/g, "")}</span>;
                             }
                             return part;
                           })}
                        </li>
                       );
                    })}
                  </ul>
              </div>
            </motion.div>
          ))}

          {/* Education Card */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative group bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-[#9d00ff]/30 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
             <div>
                <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                <div className="space-y-8">
                    {education.map((edu, i) => (
                        <div key={i}>
                            <h4 className="text-white font-semibold">{edu.institution}</h4>
                            <p className="text-white/50 text-sm mb-1">{edu.degree}</p>
                            <p className="text-white/30 text-xs font-mono">{edu.period}</p>
                        </div>
                    ))}
                </div>
             </div>
             
             {/* Decorative Background Icon */}
             <div className="absolute -bottom-10 -right-10 text-[150px] text-white/5 rotate-12">
                🎓
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
