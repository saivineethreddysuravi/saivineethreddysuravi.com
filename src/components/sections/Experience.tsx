"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Experience & Education</h2>
          <p className="text-slate-400">My professional journey and academic background.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 border-l border-white/10 md:border-none"
            >
              <div className="md:grid md:grid-cols-12 md:gap-8">
                {/* Timeline info */}
                <div className="md:col-span-4 mb-4 md:mb-0 md:text-right">
                  <h4 className="text-white font-bold text-lg">{job.company}</h4>
                  <p className="text-slate-400 text-sm mt-1">{job.period}</p>
                  <p className="text-slate-500 text-sm">{job.location}</p>
                </div>
                
                {/* Content */}
                <div className="md:col-span-8">
                  <div className="hidden md:block absolute left-[33.33%] top-0 w-3 h-3 bg-[#2997ff] rounded-full border-4 border-black transform -translate-x-1.5 box-content shadow-lg shadow-blue-500/50"></div>
                  <h3 className="text-xl font-semibold text-[#2997ff] mb-4">{job.role}</h3>
                  <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white/5 hover:border-white/10 transition-colors">
                      <ul className="space-y-3">
                        {job.description.map((desc, i) => {
                          const parts = desc.split(/(\*\*Problem:\*\*|\*\*Action:\*\*|\*\*Impact:\*\*|Problem:|Action:|Impact:)/g);
                          return (
                            <li key={i} className="text-slate-300 leading-relaxed text-sm relative pl-4 font-light">
                              <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                              {parts.map((part, index) => {
                                if (part.toLowerCase().includes('problem:')) return <span key={index} className="text-red-400 font-bold">{part}</span>;
                                if (part.toLowerCase().includes('action:')) return <span key={index} className="text-cyan-400 font-bold">{part}</span>;
                                if (part.toLowerCase().includes('impact:')) return <span key={index} className="text-green-400 font-bold">{part}</span>;
                                return part;
                              })}
                            </li>
                          );
                        })}
                      </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 mb-12 border-t border-white/10 pt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md hover:bg-slate-900/60 transition-all"
                >
                    <div>
                        <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                        <p className="text-slate-400 font-medium">{edu.degree}</p>
                         <p className="text-slate-500 text-sm">{edu.location}</p>
                    </div>
                    <div className="md:text-right">
                         <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 border border-blue-500/20 text-sm font-semibold rounded-full">
                            {edu.period}
                         </span>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
