"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "../lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--primary)" }}>
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, var(--primary), var(--accent), transparent)" }}
          />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pl-16 mb-10"
            >
              {/* Dot */}
              <div
                className="absolute left-3.5 top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{ background: "var(--bg)", borderColor: "var(--primary)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--primary)" }}
                />
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--card-border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={14} style={{ color: "var(--primary)" }} />
                      <h3 className="font-bold text-base" style={{ color: "var(--fg)" }}>{exp.role}</h3>
                    </div>
                    <p className="font-semibold text-sm" style={{ color: "var(--primary)" }}>
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted)" }}>
                        <MapPin size={11} /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted)" }}>
                        <Calendar size={11} /> {exp.period}
                      </span>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "var(--card-border)", color: "var(--accent)" }}
                  >
                    {exp.type}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2 text-sm" style={{ color: "var(--muted)" }}>
                      <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{ background: "var(--card-border)", color: "var(--primary)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Future placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative pl-16"
          >
            <div
              className="absolute left-3.5 top-5 w-5 h-5 rounded-full border-2 border-dashed flex items-center justify-center"
              style={{ borderColor: "var(--muted)", background: "var(--bg)" }}
            />
            <div
              className="p-5 rounded-2xl border-2 border-dashed text-center"
              style={{ borderColor: "var(--card-border)" }}
            >
              <p className="text-sm font-medium mb-1" style={{ color: "var(--muted)" }}>
                ✨ Next Chapter
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                Open to full-time Data Science, ML Engineering, or Python Developer roles
              </p>
              <a
                href="#contact"
                className="inline-block mt-3 px-4 py-1.5 rounded-xl text-xs font-semibold gradient-bg text-white"
              >
                Let&apos;s Connect →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
