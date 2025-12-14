"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Experience & Education</h2>
          <p className="text-slate-500">My professional journey and academic background.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 border-l border-slate-300 md:border-none"
            >
              <div className="md:grid md:grid-cols-12 md:gap-8">
                {/* Timeline info */}
                <div className="md:col-span-4 mb-4 md:mb-0 md:text-right">
                  <h4 className="text-slate-800 font-bold text-lg">{job.company}</h4>
                  <p className="text-slate-500 text-sm mt-1">{job.period}</p>
                  <p className="text-slate-400 text-sm">{job.location}</p>
                </div>
                
                {/* Content */}
                <div className="md:col-span-8">
                  <div className="hidden md:block absolute left-[33.33%] top-0 w-3 h-3 bg-[#1273eb] rounded-full border-4 border-white transform -translate-x-1.5 box-content shadow-sm"></div>
                  <h3 className="text-xl font-semibold text-[#1273eb] mb-4">{job.role}</h3>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                      <ul className="space-y-3">
                        {job.description.map((desc, i) => (
                          <li key={i} className="text-slate-600 leading-relaxed text-sm relative pl-4">
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                            {desc}
                          </li>
                        ))}
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
          className="mt-24 mb-12 border-t border-slate-200 pt-12"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Education</h3>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow"
                >
                    <div>
                        <h4 className="text-lg font-bold text-slate-800">{edu.institution}</h4>
                        <p className="text-slate-600 font-medium">{edu.degree}</p>
                         <p className="text-slate-400 text-sm">{edu.location}</p>
                    </div>
                    <div className="md:text-right">
                         <span className="inline-block px-3 py-1 bg-blue-50 text-[#1273eb] text-sm font-semibold rounded-full">
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
