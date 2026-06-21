"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "../lib/data";

const CATEGORY_ICONS: Record<string, string> = {
  "Programming": "💻",
  "Machine Learning & AI": "🤖",
  "Data & Analytics": "📊",
  "Backend & Databases": "🗄️",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div
        className="absolute left-0 right-0 h-px opacity-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, var(--primary), transparent)" }}
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--primary)" }}>
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: "var(--muted)" }}>
            A curated set of tools and technologies I use to build intelligent, data-driven solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([category, skills], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="p-6 rounded-2xl"
              style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{CATEGORY_ICONS[category]}</span>
                <h3 className="font-bold text-sm" style={{ color: "var(--fg)" }}>{category}</h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium" style={{ color: "var(--fg)" }}>{skill.name}</span>
                      <span style={{ color: "var(--primary)" }}>{skill.level}%</span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "var(--card-border)" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg, var(--primary), var(--accent))",
                        }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: ci * 0.1 + si * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-2 justify-center"
        >
          {[
            "Prompt Engineering", "LangChain", "Agentic AI", "FastAPI", "Flask",
            "PyTorch", "Seaborn", "Anaconda", "PyCharm", "OOPs", "Data Structures",
            "Statistical Analysis", "Cross-Validation", "Hyperparameter Tuning",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: "var(--card-border)",
                color: "var(--muted)",
                border: "1px solid var(--card-border)",
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
