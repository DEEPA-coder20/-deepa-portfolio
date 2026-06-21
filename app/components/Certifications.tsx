"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CERTIFICATIONS } from "../lib/data";

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--primary)" }}>
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5 rounded-2xl flex items-center gap-4 card-hover"
              style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `${cert.color}18` }}
              >
                {cert.icon}
              </div>
              <div>
                <p className="font-semibold text-sm leading-snug" style={{ color: "var(--fg)" }}>
                  {cert.name}
                </p>
                <p className="text-xs mt-0.5 font-medium" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
