import React, { useState, useEffect } from "react";
import { LucideIcon } from "./LucideIcon";
import { FEATURED_PROJECTS, PERSONAL_INFO } from "../data";
import { GithubRepo } from "../types";

export const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter & sort states
  const [filterLanguage, setFilterLanguage] = useState("All");
  const [sortBy, setSortBy] = useState<"stars" | "updated" | "forks">("updated");

  // Fetch GitHub repos
  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${PERSONAL_INFO.github}/repos?per_page=100&sort=updated`);
        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}`);
        }
        const data = await response.json();
        
        // Filter out fork repositories to show only original works
        const originalRepos = data.filter((repo: any) => !repo.fork);
        setRepos(originalRepos);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching GitHub repos:", err);
        setError(err.message || "Failed to fetch repositories.");
        
        // Fallback simulated projects if GitHub rate limits us
        const fallbackRepos: GithubRepo[] = [
          {
            id: 1,
            name: "CyberChat-AI-SIEM",
            description: "NLP middleware using fine-tuned BERT translating natural language to KQL; contextual incident responder.",
            html_url: `https://github.com/${PERSONAL_INFO.github}/CyberChat-AI-SIEM`,
            stargazers_count: 5,
            forks_count: 1,
            language: "Python",
            updated_at: new Date().toISOString()
          },
          {
            id: 2,
            name: "SecureWipe-Pro-Sanitizer",
            description: "Cross-platform data sanitization engine (NIST SP 800-88) integrated with Ethereum-based wipe certs.",
            html_url: `https://github.com/${PERSONAL_INFO.github}/SecureWipe-Pro-Sanitizer`,
            stargazers_count: 4,
            forks_count: 0,
            language: "Python",
            updated_at: new Date().toISOString()
          },
          {
            id: 3,
            name: "AI-Powered-Resume-Parser",
            description: "End-to-end recruitment pipelines parsing resumes and ranking applicants across 10+ core attributes.",
            html_url: `https://github.com/${PERSONAL_INFO.github}/AI-Powered-Resume-Parser`,
            stargazers_count: 3,
            forks_count: 2,
            language: "TypeScript",
            updated_at: new Date().toISOString()
          },
          {
            id: 4,
            name: "Netflix-Recommendation-SIC",
            description: "Exploratory Data Analysis and content recommendation engines powered by TF-IDF and K-Means Clustering.",
            html_url: `https://github.com/${PERSONAL_INFO.github}/Netflix-Recommendation-SIC`,
            stargazers_count: 8,
            forks_count: 1,
            language: "Python",
            updated_at: new Date().toISOString()
          }
        ];
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  // Determine unique languages
  const languages = ["All", ...Array.from(new Set(repos.map((repo) => repo.language).filter(Boolean))) as string[]];

  // Filter & Sort math
  const processedRepos = repos
    .filter((repo) => {
      if (filterLanguage === "All") return true;
      return repo.language === filterLanguage;
    })
    .sort((a, b) => {
      if (sortBy === "stars") {
        return b.stargazers_count - a.stargazers_count;
      } else if (sortBy === "forks") {
        return b.forks_count - a.forks_count;
      } else {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      }
    });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-teal-500/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-teal-400 tracking-widest uppercase block">
            Portfolio Showcase
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Deep-dive into flagship engineering achievements spanning advanced Natural Language Processing, 
            cybersecurity incident translation, and hardware integrations.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Part A: Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] transition-all duration-300"
              id={`featured-proj-${project.id}`}
            >
              {/* Highlight subtle corner flash */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                    <LucideIcon name={project.iconName} className="w-6 h-6" />
                  </div>
                  {project.id === "cyberchat-ai" ? (
                    <span className="px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono text-[10px] tracking-wider uppercase font-semibold">
                      AI & NLP
                    </span>
                  ) : project.id === "securewipe-pro" ? (
                    <span className="px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono text-[10px] tracking-wider uppercase font-semibold">
                      Security Core
                    </span>
                  ) : project.id === "netflix-analysis" ? (
                    <span className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-[10px] tracking-wider uppercase font-semibold">
                      Samsung Project
                    </span>
                  ) : null}
                </div>

                {/* Project Titles */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>
                <h4 className="font-mono text-xs text-slate-400 mt-1 mb-4">
                  {project.subtitle}
                </h4>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Project Bullet Highlights */}
                <ul className="space-y-3.5 mb-6 text-xs text-slate-300 border-t border-white/5 pt-4">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-2.5 items-start">
                      <span className="text-teal-400 mt-1 select-none">▪</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & Action Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <LucideIcon name="Github" className="w-4 h-4" />
                    Codebase
                  </a>
                  <a
                    href={`https://github.com/${PERSONAL_INFO.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-teal-400 transition-colors ml-auto"
                  >
                    Details
                    <LucideIcon name="ArrowUpRight" className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Part B: Dynamic GitHub Repos */}
        <div className="pt-12 border-t border-white/5" id="github-repos-section">
          {/* Section Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs text-teal-400 tracking-wider uppercase block">
                Source Repository Feed
              </span>
              <h3 className="font-display font-semibold text-2xl text-white mt-2">
                All Open-Source Repositories
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Pulled dynamically from GitHub API (user: <span className="text-teal-400">@{PERSONAL_INFO.github}</span>)
              </p>
            </div>

            {/* Filter and sorting control bar */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Language Filter */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Lang:</span>
                <select
                  value={filterLanguage}
                  onChange={(e) => setFilterLanguage(e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-xs font-sans text-slate-300 focus:outline-none focus:border-teal-500/40 cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} className="bg-[#0A0A0F] text-slate-300">
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-xs font-sans text-slate-300 focus:outline-none focus:border-teal-500/40 cursor-pointer"
                >
                  <option value="updated" className="bg-[#0A0A0F] text-slate-300">Last Updated</option>
                  <option value="stars" className="bg-[#0A0A0F] text-slate-300">Star Count</option>
                  <option value="forks" className="bg-[#0A0A0F] text-slate-300">Fork Count</option>
                </select>
              </div>
            </div>
          </div>

          {/* Skeletons loader or repository layout list */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="repos-skeleton-container">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-white/5 bg-white/[0.02] space-y-4 animate-pulse"
                >
                  <div className="flex justify-between items-start">
                    <div className="h-4 w-1/2 bg-white/10 rounded" />
                    <div className="h-4 w-12 bg-white/10 rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-white/5 rounded" />
                    <div className="h-3 w-5/6 bg-white/5 rounded" />
                  </div>
                  <div className="h-6 w-16 bg-white/10 rounded pt-2" />
                </div>
              ))}
            </div>
          ) : error && repos.length === 0 ? (
            <div className="text-center py-12 glass-card rounded-2xl p-8 border border-white/5 max-w-xl mx-auto">
              <LucideIcon name="ShieldAlert" className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <p className="text-slate-300 text-sm font-semibold">GitHub API is temporarily offline or rate-limited.</p>
              <p className="text-slate-500 text-xs mt-1">Please explore my original codebases directly on GitHub.</p>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-mono text-teal-400 rounded-lg transition-colors border border-white/5"
              >
                Open GitHub Profile
                <LucideIcon name="ArrowUpRight" className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            <div>
              {processedRepos.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-xs font-mono">
                  No repositories found matching the language filter: "{filterLanguage}"
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="repos-grid">
                  {processedRepos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-6 rounded-xl border border-white/5 hover:border-teal-500/20 flex flex-col justify-between group transition-all duration-300"
                      id={`repo-${repo.name}`}
                    >
                      <div>
                        {/* Title and stats bar */}
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <h4 className="font-display font-semibold text-sm text-white group-hover:text-teal-300 transition-colors truncate">
                            {repo.name}
                          </h4>
                          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 shrink-0">
                            <span className="flex items-center gap-0.5">
                              <LucideIcon name="Star" className="w-3 h-3 text-amber-500 fill-amber-500/10" />
                              {repo.stargazers_count}
                            </span>
                            <span className="flex items-center gap-0.5">
                              <LucideIcon name="GitFork" className="w-3 h-3 text-slate-400" />
                              {repo.forks_count}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                          {repo.description || "No description provided for this repository."}
                        </p>
                      </div>

                      {/* Footer: Language tag & Date */}
                      <div className="flex justify-between items-center pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500">
                        {repo.language ? (
                          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 text-[9px]">
                            {repo.language}
                          </span>
                        ) : (
                          <span className="text-[9px]">Documentation</span>
                        )}
                        <span className="flex items-center gap-1">
                          <LucideIcon name="Clock" className="w-3 h-3" />
                          {new Date(repo.updated_at).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric"
                          })}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
