"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Technical Skills</h2>
          <p className="text-slate-500">Tools and technologies I use to build solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
                 <span className="w-2 h-6 bg-[#1273eb] rounded-full"></span>
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
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-[#1273eb] transition-all cursor-pointer group border border-slate-100 hover:border-blue-100"
                    >
                      <skill.icon className="text-3xl text-slate-400 mb-2 group-hover:text-[#1273eb] transition-colors" />
                      <span className="text-sm font-medium text-slate-600 text-center group-hover:text-[#1273eb] transition-colors">
                        {skill.name}
                      </span>
                    </a>
                  ) : (
                    <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <skill.icon className="text-3xl text-slate-400 mb-2" />
                      <span className="text-sm font-medium text-slate-600 text-center">
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
