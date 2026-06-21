"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ACHIEVEMENTS } from "../lib/data";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--primary)" }}>
            By the Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl text-center card-hover"
              style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div className="text-3xl mb-3">{a.icon}</div>
              <div className="gradient-text text-2xl sm:text-3xl font-bold mb-1">{a.value}</div>
              <p className="font-semibold text-sm" style={{ color: "var(--fg)" }}>{a.label}</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{a.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
