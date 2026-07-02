import React from "react";
import { LucideIcon } from "./LucideIcon";
import { EXPERIENCE } from "../data";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Visual background decor */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-teal-400 tracking-widest uppercase block">
            Career Timeline
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Professional Experience
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Layout Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 py-4">
          {EXPERIENCE.map((item, idx) => (
            <div key={idx} className="relative group" id={`exp-item-${idx}`}>
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-teal-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping absolute" />
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 relative" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 relative hover:shadow-[0_0_25px_rgba(20,184,166,0.12)] transition-all duration-300">
                {/* Header details */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-teal-300 transition-colors">
                      {item.role}
                    </h3>
                    <h4 className="font-sans font-medium text-sm text-teal-400 mt-1">
                      {item.company}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-[11px] sm:text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                      <LucideIcon name="Calendar" className="w-4 h-4 text-teal-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 mt-0.5">
                      <LucideIcon name="MapPin" className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullets lists */}
                <ul className="space-y-3 mb-6 text-xs sm:text-sm text-slate-400">
                  {item.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2.5 items-start">
                      <span className="text-teal-500 mt-1.5 select-none text-xs">▹</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags highlights */}
                <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
