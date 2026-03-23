"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_rgba(41,151,255,0.05)_0%,_transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/20">Arsenal</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 font-light">
            A highly specialized toolkit engineered for scalable analytics, complex data modeling, and executive BI.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group"
            >
              <h3 className="text-xl font-bold text-white mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                {category.category}
              </h3>
              
              <div className="space-y-5">
                {category.items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 text-white/40 group-hover/item:text-black group-hover/item:bg-white group-hover/item:border-white group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                        <skill.icon size={18} />
                    </div>
                    <span className="text-white/60 font-medium tracking-wide group-hover/item:text-white transition-colors">
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
