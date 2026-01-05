"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2997ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Technical <span className="text-[#2997ff]">Arsenal.</span>
          </h2>
          <p className="text-xl text-white/60 font-light">
            A comprehensive toolkit for data engineering, advanced analytics, and scalable visualization.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-[#2997ff]/30 transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold text-white mb-6 group-hover:text-[#2997ff] transition-colors">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="p-2 rounded-lg bg-white/5 text-white/40 group-hover/item:text-white group-hover/item:bg-[#2997ff] transition-all duration-300">
                        <skill.icon size={16} />
                    </div>
                    <span className="text-white/60 font-medium group-hover/item:text-white transition-colors">
                        {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
