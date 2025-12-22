"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Technical Skills</h2>
          <p className="text-slate-400">Tools and technologies I use to build solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/5 shadow-sm hover:shadow-lg hover:bg-slate-900/60 transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-slate-200 mb-6 pb-4 border-b border-white/5 flex items-center gap-2">
                 <span className="w-2 h-6 bg-[#2997ff] rounded-full shadow-lg shadow-blue-500/50"></span>
                 {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((skill, i) => (
                  skill.link ? (
                    <a
                      key={i}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-all cursor-pointer group border border-white/5 hover:border-white/20"
                    >
                      <skill.icon className="text-3xl text-slate-500 mb-2 group-hover:text-[#2997ff] transition-colors" />
                      <span className="text-sm font-medium text-slate-400 text-center group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </a>
                  ) : (
                    <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5">
                      <skill.icon className="text-3xl text-slate-500 mb-2" />
                      <span className="text-sm font-medium text-slate-400 text-center">
                        {skill.name}
                      </span>
                    </div>
                  )
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
