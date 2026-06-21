"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/data";

export default function Testimonials() {
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
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-6 rounded-2xl flex flex-col card-hover"
              style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <Quote size={20} style={{ color: t.color }} className="mb-4" />
              <p className="text-sm leading-relaxed flex-1 italic" style={{ color: "var(--muted)" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-6 pt-4" style={{ borderTop: "1px solid var(--card-border)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-xs" style={{ color: "var(--fg)" }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
