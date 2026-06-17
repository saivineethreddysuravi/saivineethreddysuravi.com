"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaCheckCircle, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";
import { personalInfo, education } from "@/data/portfolio";

export default function About() {
  const msDegree = education.find(edu => edu.degree.includes("Master"));
  const principles = [
    {
      icon: FaShieldAlt,
      title: "Data Governance",
      desc: "Implementing Collibra Data Catalog, Business Glossary, Lineage, and Stewardship workflows across regulated data environments."
    },
    {
      icon: FaCheckCircle,
      title: "Data Quality",
      desc: "Authoring CDQ rules for completeness, accuracy, timeliness, and consistency — enforced inside Azure Data Factory and Databricks pipelines."
    },
    {
      icon: FaProjectDiagram,
      title: "SOX & Reconciliation",
      desc: "Cross-system reconciliation across Snowflake, Oracle, SQL Server, and DB2 to deliver clean SOX 404 audits and trustworthy financial reporting."
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.02]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/20">Me</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-white/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-light text-white leading-[1.3] tracking-tight">
              I’m a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Senior Data Governance &amp; Quality Analyst</span> designing Collibra frameworks and SOX-compliant data ecosystems that regulators trust.
            </h3>
            
            <p className="text-white/50 text-lg leading-relaxed font-light">
              {personalInfo.summary.split(/(\*\*.*?\*\*)/g).map((part, idx) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={idx} className="text-white font-medium">{part.replace(/\*\*/g, "")}</strong>;
                }
                return part;
              })}
            </p>

            {/* Education Micro-Card */}
            {msDegree && (
              <div className="mt-10 p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center gap-5 group hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 text-white/50 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                      <FaGraduationCap size={20} />
                  </div>
                  <div>
                      <h4 className="text-white font-medium tracking-wide">{msDegree.degree.split(" (")[0]}</h4>
                      <p className="text-white/40 text-sm mt-1">{msDegree.institution} • <span className="text-white/80 font-medium">{msDegree.degree.split(" (")[1]?.replace(")", "") || msDegree.period}</span></p>
                  </div>
              </div>
            )}
          </motion.div>

          {/* Right Column: Principles Grid */}
          <div className="grid grid-cols-1 gap-4">
            {principles.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 group flex gap-6 items-start"
                >
                    <div className="mt-1 text-white/30 group-hover:text-white transition-colors duration-500">
                        <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 tracking-wide">{item.title}</h4>
                      <p className="text-white/50 font-light leading-relaxed text-sm">
                          {item.desc}
                      </p>
                    </div>
                </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
