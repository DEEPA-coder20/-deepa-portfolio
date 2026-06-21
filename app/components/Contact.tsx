"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, GitFork, Link2, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3500);
  };

  const SOCIALS = [
    {
      label: "GitHub",
      value: "github.com/deepatigalannavar",
      href: "https://github.com/deepatigalannavar",
      icon: <GitFork size={18} />,
      color: "#7c3aed",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/deepatigalannavar",
      href: "https://linkedin.com/in/deepatigalannavar",
      icon: <Link2 size={18} />,
      color: "#06b6d4",
    },
    {
      label: "Email",
      value: "tigalannavardeepa@gmail.com",
      href: "mailto:tigalannavardeepa@gmail.com",
      icon: <Mail size={18} />,
      color: "#ec4899",
    },
    {
      label: "Phone",
      value: "+91 9845871226",
      href: "tel:+919845871226",
      icon: <Phone size={18} />,
      color: "#f59e0b",
    },
    {
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      href: "#",
      icon: <MapPin size={18} />,
      color: "#10b981",
    },
  ];

  const inputStyle = {
    background: "var(--bg)",
    border: "1px solid var(--card-border)",
    color: "var(--fg)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--primary)" }}>
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: "var(--muted)" }}>
            Open to Data Science, ML Engineering, and Python Developer roles. Drop a message and I&apos;ll respond promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Whether you have a job opportunity, a project collaboration, or just want to
              talk data — I&apos;m always eager to connect with like-minded professionals.
            </p>

            <div className="space-y-3 pt-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02] group"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.color}18`, color: s.color }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "var(--muted)" }}>{s.label}</p>
                    <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>{s.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl"
            style={{
              background: "var(--card)",
              border: "1px solid var(--card-border)",
              boxShadow: "var(--shadow)",
            }}
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-bold text-lg mb-2 gradient-text">Message Sent!</h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium block mb-1.5" style={{ color: "var(--muted)" }}>Name *</label>
                    <input
                      style={inputStyle}
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1.5" style={{ color: "var(--muted)" }}>Email *</label>
                    <input
                      style={inputStyle}
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium block mb-1.5" style={{ color: "var(--muted)" }}>Subject</label>
                  <input
                    style={inputStyle}
                    type="text"
                    name="subject"
                    placeholder="Job opportunity / Collaboration"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium block mb-1.5" style={{ color: "var(--muted)" }}>Message *</label>
                  <textarea
                    style={{ ...inputStyle, minHeight: "130px", resize: "vertical" }}
                    name="message"
                    placeholder="Tell me about the opportunity or project..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 gradient-bg text-white disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
