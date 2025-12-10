"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience.</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-24">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-8 md:pl-0 border-l border-white/10 md:border-none"
            >
              <div className="md:grid md:grid-cols-12 md:gap-8">
                {/* Timeline info */}
                <div className="md:col-span-4 mb-4 md:mb-0 md:text-right">
                  <h4 className="text-white font-bold text-lg">{job.company}</h4>
                  <p className="text-gray-500 text-sm mt-1">{job.period}</p>
                  <p className="text-gray-500 text-sm">{job.location}</p>
                </div>
                
                {/* Content */}
                <div className="md:col-span-8">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">{job.role}</h3>
                  <ul className="space-y-4">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-gray-400 leading-relaxed text-base">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education.</h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-12">
            {education.map((edu, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="md:grid md:grid-cols-12 md:gap-8 border-b border-white/5 pb-12 last:border-none"
                >
                    <div className="md:col-span-4 mb-2 md:mb-0 md:text-right">
                         <p className="text-gray-500">{edu.period}</p>
                    </div>
                    <div className="md:col-span-8">
                        <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                        <p className="text-lg text-gray-400 mt-2">{edu.degree}</p>
                         <p className="text-gray-500 text-sm mt-1">{edu.location}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}