"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Target, Lightbulb, Users } from "lucide-react";

const HIGHLIGHTS = [
  { icon: <BookOpen size={18} />, label: "CS Graduate", sub: "B.E. in Computer Science" },
  { icon: <Target size={18} />, label: "Data-Driven", sub: "Insight-focused thinking" },
  { icon: <Lightbulb size={18} />, label: "ML Enthusiast", sub: "NLP, Classification & more" },
  { icon: <Users size={18} />, label: "Problem Solver", sub: "Real-world applications" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--primary)" }}>
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            The Story <span className="gradient-text">Behind the Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              I&apos;m a Computer Science Engineering graduate with a deep passion for extracting
              meaning from data. My journey began with curiosity about how machines could learn
              from patterns — and that curiosity has grown into a career direction centered on
              Python development, machine learning, and business intelligence.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              I enjoy bridging the gap between raw data and actionable decisions. Whether it&apos;s
              building an NLP model that understands human emotion from speech, or creating
              an interactive Power BI dashboard that illuminates business performance — I
              find real satisfaction in work that makes a tangible difference.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              I&apos;m currently seeking opportunities where I can contribute to data-intensive,
              impact-driven teams while continuing to grow as an engineer and analyst.
            </p>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold gradient-bg text-white"
            >
              See My Work →
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-2xl card-hover"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--card-border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "var(--card-border)", color: "var(--primary)" }}
                >
                  {h.icon}
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--fg)" }}>{h.label}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{h.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
