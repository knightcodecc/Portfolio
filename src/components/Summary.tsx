import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "./LucideIcon";
import { PERSONAL_INFO } from "../data";

export const Summary: React.FC = () => {
  const metrics = [
    {
      value: PERSONAL_INFO.cgpa,
      label: "Cumulative CGPA",
      desc: "Top Academic Performance",
      icon: "GraduationCap",
      color: "from-teal-400 to-blue-500"
    },
    {
      value: "Samsung C&P",
      label: "Coding & Programming",
      desc: "Core OOP, DSA & Python",
      icon: "Code2",
      color: "from-blue-500 to-indigo-600"
    },
    {
      value: "Samsung IoT",
      label: "Internet of Things",
      desc: "Microcontrollers & Embedded",
      icon: "Cpu",
      color: "from-teal-400 to-emerald-500"
    }
  ];

  return (
    <section id="summary" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[250px] h-[250px] bg-blue-500/5 rounded-full filter blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-teal-400 tracking-widest uppercase block">
            Profile Overview
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Professional Summary
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-semibold text-xl sm:text-2xl text-slate-100 leading-snug">
              Bridging academic computer science with high-impact applications in ML and SDE.
            </h3>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-teal-500/10 border border-teal-500/20 text-teal-400 mt-1">
                  <LucideIcon name="Check" className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Applied Artificial Intelligence</h4>
                  <p className="text-xs text-slate-400">Practical expertise converting raw BERT and PyTorch architectures into fast, lightweight microservices.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-teal-500/10 border border-teal-500/20 text-teal-400 mt-1">
                  <LucideIcon name="Check" className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Data Engineering & Pipelines</h4>
                  <p className="text-xs text-slate-400">Hands-on exploratory data analysis (EDA), cleaning, and clustering using Pandas, NumPy, and Scikit-learn.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl flex items-center gap-5 group"
                id={`summary-metric-${i}`}
              >
                <div className={`p-4 rounded-xl bg-gradient-to-tr ${metric.color} text-black font-semibold shadow-md`}>
                  <LucideIcon name={metric.icon} className="w-6 h-6 text-black" />
                </div>
                <div className="space-y-1">
                  <div className="font-display font-bold text-2xl text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    {metric.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
