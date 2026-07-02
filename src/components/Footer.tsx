import React from "react";
import { LucideIcon } from "./LucideIcon";
import { PERSONAL_INFO } from "../data";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#06060A] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Info */}
        <div className="space-y-1">
          <div className="font-display font-bold text-base text-white tracking-wide">
            Pratham Mahendra Bhat
          </div>
          <p className="text-xs text-slate-500 font-mono">
            AI Engineer & ML Developer | Portfolio Workspace
          </p>
        </div>

        {/* Navigation jump shortcuts */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToTop();
            }}
            className="hover:text-cyan-400 transition-colors"
          >
            Back to Top
          </a>
          <span className="text-slate-700">|</span>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("projects");
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            }}
            className="hover:text-cyan-400 transition-colors"
          >
            Featured Projects
          </a>
          <span className="text-slate-700">|</span>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            }}
            className="hover:text-cyan-400 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Follow social icons */}
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email Pratham"
            className="w-9 h-9 rounded-lg bg-white/5 hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-500/20 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300"
          >
            <LucideIcon name="Mail" className="w-4.5 h-4.5" />
          </a>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Account"
            className="w-9 h-9 rounded-lg bg-white/5 hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-500/20 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300"
          >
            <LucideIcon name="Github" className="w-4.5 h-4.5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Account"
            className="w-9 h-9 rounded-lg bg-white/5 hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-500/20 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300"
          >
            <LucideIcon name="Linkedin" className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-white/[0.02] text-center text-[11px] font-mono text-slate-600">
        &copy; {currentYear} Pratham Mahendra Bhat. All Rights Reserved. Crafted with React, Tailwind & Lucide.
      </div>
    </footer>
  );
};
