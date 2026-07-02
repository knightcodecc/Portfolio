import React from "react";
import { LucideIcon } from "./LucideIcon";
import { CERTIFICATIONS } from "../data";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-500/5 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-teal-400 tracking-widest uppercase block">
            Validated Competency
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Certifications & Honors
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className={`glass-card p-6 rounded-2xl border flex flex-col justify-between relative group ${
                cert.isHighlight
                  ? "border-teal-500/25 bg-gradient-to-br from-teal-500/5 to-blue-600/5 shadow-[0_0_20px_rgba(20,184,166,0.1)] hover:border-teal-500/40"
                  : "border-white/5"
              }`}
              id={`cert-item-${idx}`}
            >
              {/* Highlight badge for key certs */}
              {cert.isHighlight && (
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded bg-teal-400/10 border border-teal-400/20 text-teal-300 text-[9px] font-mono tracking-wider uppercase font-semibold">
                  <LucideIcon name="Sparkles" className="w-2.5 h-2.5" />
                  Key Honor
                </div>
              )}

              <div>
                {/* Certification Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  cert.isHighlight
                    ? "bg-teal-500/20 text-teal-300"
                    : "bg-white/5 text-slate-400"
                }`}>
                  <LucideIcon name="Award" className="w-5 h-5" />
                </div>

                {/* Certification Titles */}
                <h3 className="font-display font-semibold text-sm sm:text-base text-white group-hover:text-teal-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {cert.issuer}
                </p>
              </div>

              {/* Year info footer */}
              <div className="flex items-center gap-1.5 mt-6 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500">
                <LucideIcon name="Calendar" className="w-3.5 h-3.5 text-slate-600" />
                <span>Earned: {cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
