"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Expertise.</h2>
          <p className="text-xl text-gray-400">
            A comprehensive toolkit for data-driven decision making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-3xl p-8 flex flex-col h-full"
            >
              <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, i) => (
                  skill.link ? (
                    <a
                      key={i}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      <skill.icon className="text-3xl text-gray-300 mb-3 group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium text-gray-400 text-center group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </a>
                  ) : (
                    <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                      <skill.icon className="text-3xl text-gray-300 mb-3" />
                      <span className="text-sm font-medium text-gray-400 text-center">
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