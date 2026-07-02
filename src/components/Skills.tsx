import React, { useState } from "react";
import { LucideIcon } from "./LucideIcon";
import { SKILL_CATEGORIES } from "../data";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-teal-500/5 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-teal-400 tracking-widest uppercase block">
            Technical Arsenal
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Practical development experience and technical competencies across data ecosystems, 
            applied AI pipelines, and software engineering.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Skill Category Selector (Optional filter / Visual helper) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
              selectedCategory === null
                ? "bg-teal-500/15 text-teal-300 border-teal-500/30 shadow-sm shadow-teal-500/10"
                : "bg-white/5 text-slate-400 border-transparent hover:text-white"
            }`}
          >
            Show All
          </button>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat.title
                  ? "bg-teal-500/15 text-teal-300 border-teal-500/30 shadow-sm shadow-teal-500/10"
                  : "bg-white/5 text-slate-400 border-transparent hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.filter(
            (cat) => selectedCategory === null || cat.title === selectedCategory
          ).map((category, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl border border-white/5 relative group hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] transition-all duration-300"
              id={`skills-cat-${idx}`}
            >
              {/* Card top border glow line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 group-hover:bg-teal-400 group-hover:text-black transition-all duration-300">
                  <LucideIcon name={category.iconName} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-white">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">
                    {category.skills.length} competencies
                  </span>
                </div>
              </div>

              {/* Skills badges list */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-teal-500/10 border border-white/5 hover:border-teal-500/20 text-slate-300 hover:text-teal-300 text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-default group/badge"
                    id={`skill-item-${idx}-${sIdx}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover/badge:bg-teal-400 transition-colors" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
