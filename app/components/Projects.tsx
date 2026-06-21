"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GitFork, ExternalLink } from "lucide-react";
import { PROJECTS } from "../lib/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div
        className="max-w-6xl mx-auto"
        style={{
          background: "var(--card-border)",
          borderRadius: "2rem",
          padding: "0",
        }}
      >
        <div
          className="py-16 px-8 rounded-3xl"
          style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--primary)" }}>
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: "var(--muted)" }}>
              End-to-end ML solutions built with real-world datasets and measurable outcomes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative rounded-2xl overflow-hidden card-hover flex flex-col"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${p.accent}, var(--accent))` }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{p.emoji}</span>
                    <div className="flex gap-2">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg transition-all hover:scale-110"
                        style={{ background: "var(--card-border)", color: "var(--muted)" }}
                        aria-label="GitHub"
                      >
                        <GitFork size={14} />
                      </a>
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg transition-all hover:scale-110"
                          style={{ background: "var(--card-border)", color: "var(--muted)" }}
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: "var(--fg)" }}>
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "var(--muted)" }}>
                    {p.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="px-2 py-1 rounded-lg text-xs font-semibold"
                        style={{ background: `${p.accent}18`, color: p.accent }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{ background: "var(--card-border)", color: "var(--muted)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-10"
          >
            <a
              href="https://github.com/deepatigalannavar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border-2 transition-all hover:scale-105"
              style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
            >
              <GitFork size={16} />
              View All on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
