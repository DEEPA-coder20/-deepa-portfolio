"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, GitFork, Link2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = [
  "Python Developer",
  "Data Analyst",
  "AI & ML Enthusiast",
  "Business Intelligence Pro",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let i = typing ? 0 : role.length;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1));
        i++;
        if (i === role.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1800);
        }
      } else {
        setDisplayed(role.slice(0, i - 1));
        i--;
        if (i === 0) {
          clearInterval(interval);
          setRoleIdx((prev) => (prev + 1) % ROLES.length);
          setTyping(true);
        }
      }
    }, typing ? 65 : 35);
    return () => clearInterval(interval);
  }, [roleIdx, typing]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 relative">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: "var(--card-border)",
              color: "var(--primary)",
              border: "1px solid var(--card-border)",
            }}
          >
            <Sparkles size={12} />
            Available for Opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Deepa</span>
            <br />
            <span className="gradient-text">Tigalannavar</span>
          </h1>

          <div className="h-10 mb-6">
            <span
              className="text-xl sm:text-2xl font-semibold"
              style={{ color: "var(--accent)" }}
            >
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8" style={{ color: "var(--muted)" }}>
            Computer Science graduate passionate about turning raw data into
            actionable insights. I build intelligent applications, craft
            ML models, and design dashboards that drive real decisions.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white gradient-bg shadow-lg text-sm"
            >
              <Mail size={16} />
              Get In Touch
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-all"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
                background: "transparent",
              }}
            >
              <Download size={16} />
              Download CV
            </motion.a>
          </div>

          <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
            {[
              { href: "https://github.com/deepatigalannavar", icon: <GitFork size={18} />, label: "GitHub" },
              { href: "https://linkedin.com/in/deepatigalannavar", icon: <Link2 size={18} />, label: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-xl transition-all hover:scale-110"
                style={{
                  background: "var(--card-border)",
                  color: "var(--muted)",
                }}
              >
                {s.icon}
              </a>
            ))}
            <span className="text-xs" style={{ color: "var(--muted)" }}>
              3+ Projects | CSE Graduate
            </span>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed opacity-30"
              style={{ borderColor: "var(--primary)", margin: "-20px" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed opacity-20"
              style={{ borderColor: "var(--accent)", margin: "-36px" }}
            />

            {/* Avatar circle */}
            <div
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                padding: "3px",
              }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center text-7xl font-bold"
                style={{ background: "var(--bg)" }}
              >
                <span className="gradient-text">DT</span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 top-8 glass px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg"
              style={{ color: "var(--primary)", border: "1px solid var(--card-border)" }}
            >
              🐍 Python
            </motion.div>
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -left-4 bottom-10 glass px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg"
              style={{ color: "var(--accent)", border: "1px solid var(--card-border)" }}
            >
              🤖 AI / ML
            </motion.div>
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-6 bottom-8 glass px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg"
              style={{ color: "var(--accent2)", border: "1px solid var(--card-border)" }}
            >
              📊 Data
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs"
        style={{ color: "var(--muted)" }}
      >
        <span>Scroll</span>
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}
