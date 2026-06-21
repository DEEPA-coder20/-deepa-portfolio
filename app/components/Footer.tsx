"use client";
import { GitFork, Link2, Mail, Code2, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="py-10 px-6 mt-4"
      style={{ borderTop: "1px solid var(--card-border)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center gradient-bg">
              <Code2 size={16} color="white" />
            </span>
            <span className="font-bold" style={{ color: "var(--fg)" }}>
              Deepa Tigalannavar
            </span>
          </div>

          <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
            Built with <Heart size={12} style={{ color: "var(--accent2)" }} fill="currentColor" /> using Next.js 15 & Framer Motion
          </p>

          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/deepatigalannavar", icon: <GitFork size={16} />, label: "GitHub" },
              { href: "https://linkedin.com/in/deepatigalannavar", icon: <Link2 size={16} />, label: "LinkedIn" },
              { href: "mailto:tigalannavardeepa@gmail.com", icon: <Mail size={16} />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg transition-all hover:scale-110"
                style={{ background: "var(--card-border)", color: "var(--muted)" }}
              >
                {s.icon}
              </a>
            ))}
            <button
              onClick={scrollTop}
              className="p-2 rounded-lg transition-all hover:scale-110 gradient-bg"
              aria-label="Back to top"
            >
              <ArrowUp size={16} color="white" />
            </button>
          </div>
        </div>
        <p className="text-center text-xs mt-6" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Deepa Tigalannavar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
