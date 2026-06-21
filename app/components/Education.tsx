"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Star } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--primary)" }}>
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--card)",
            border: "1px solid var(--card-border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {/* Top gradient bar */}
          <div className="h-2 gradient-bg" />

          <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 gradient-bg"
            >
              <GraduationCap size={28} color="white" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-bold text-lg" style={{ color: "var(--fg)" }}>
                    Bachelor of Engineering in Computer Science
                  </h3>
                  <p className="font-semibold text-sm mt-0.5" style={{ color: "var(--primary)" }}>
                    BLDEA&apos;s VP Dr PG Halakatti College of Engineering & Technology
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                    Vijayapur, Karnataka, India
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold block mb-2"
                    style={{ background: "var(--card-border)", color: "var(--muted)" }}
                  >
                    2021 – 2025
                  </span>
                  <div className="flex items-center gap-1 justify-end">
                    <Star size={14} style={{ color: "#f59e0b" }} />
                    <span className="font-bold text-base" style={{ color: "var(--fg)" }}>8.0</span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>CGPA</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Machine Learning", "Data Structures", "Algorithms",
                  "Database Systems", "OOP", "Software Engineering",
                  "AI Fundamentals", "Statistics",
                ].map((subject) => (
                  <span
                    key={subject}
                    className="px-2.5 py-1 rounded-lg text-xs"
                    style={{ background: "var(--card-border)", color: "var(--muted)" }}
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
