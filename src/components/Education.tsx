import React from "react";
import { LucideIcon } from "./LucideIcon";
import { EDUCATION } from "../data";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-teal-400 tracking-widest uppercase block">
            Academic Background
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Education
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
            {/* Soft decorative glow corner */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-teal-500 to-blue-600" />

            <div className="flex flex-col md:flex-row gap-8 md:items-start justify-between">
              {/* Left Column: Core info */}
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                    <LucideIcon name="GraduationCap" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-2xl text-white group-hover:text-teal-300 transition-colors">
                      {EDUCATION.degree}
                    </h3>
                    <p className="font-sans font-medium text-sm sm:text-base text-teal-400">
                      {EDUCATION.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-400 pt-2">
                  <span className="flex items-center gap-1.5">
                    <LucideIcon name="Calendar" className="w-4 h-4 text-teal-400" />
                    {EDUCATION.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LucideIcon name="Award" className="w-4 h-4 text-teal-400" />
                    CGPA: <span className="text-white font-bold">{EDUCATION.cgpa}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LucideIcon name="Sparkles" className="w-4 h-4 text-teal-400" />
                    {EDUCATION.specialization}
                  </span>
                </div>
              </div>
            </div>

            {/* Curriculum and Highlights */}
            <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
              <h4 className="font-display font-semibold text-sm text-slate-200 tracking-wide uppercase">
                Academic Highlights & Coursework
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-400">
                {EDUCATION.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex gap-3 items-start hover:border-teal-500/10 transition-colors"
                  >
                    <span className="text-teal-500 mt-0.5">✔</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
