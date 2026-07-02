import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LucideIcon } from "./LucideIcon";
import { PERSONAL_INFO } from "../data";

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentTagline = PERSONAL_INFO.taglines[taglineIndex];

  // Typing effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 80;
    const delayBetweenTags = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentTagline.length) {
        // Typing
        setTypedText(currentTagline.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setTypedText(currentTagline.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentTagline.length) {
        // Full text shown, pause before delete
        setTimeout(() => setIsDeleting(true), delayBetweenTags);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, shift to next
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTagline, taglineIndex]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadResume = () => {
    // Generate and download a beautifully formatted text version of the resume
    const resumeContent = `
=========================================
PRATHAM MAHENDRA BHAT
=========================================
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.githubUrl}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}
College: ${PERSONAL_INFO.college}
CGPA: ${PERSONAL_INFO.cgpa} | Graduation: ${PERSONAL_INFO.classOf}

SUMMARY:
${PERSONAL_INFO.summary}

SKILLS:
- Machine Learning: TensorFlow, PyTorch, Scikit-learn, Model Optimization, NLP, CV
- Data Science: Pandas, NumPy, Matplotlib, Seaborn, EDA, Feature Engineering
- Programming: Python, Java, SQL, JavaScript, HTML, CSS, OOP, DSA
- Tools: Git, Docker, FastAPI, Flask, PostgreSQL, Elasticsearch, Redis, Linux, VS Code

EXPERIENCE:
Trainee (AI/ML & AI/IoT Tracks) | Samsung Innovation Campus (Sep 2024 - Mar 2026)
- Completed technical apprenticeship cohorts in ML and IoT.
- Worked with Python, Pandas, Embedded systems, and hardware architectures.

FEATURED PROJECTS:
1. CyberChat AI - SIEM Assistant Chatbot (Smart India Hackathon 2025 Finalist)
   - Created fine-tuned BERT NLP middleware translating natural language to KQL.
   - Built Redis/PostgreSQL contextual exploration reducing incident response time 60-70%.
2. SecureWipe Pro - Multi-Platform Data Sanitization (Smart India Hackathon 2025 Finalist)
   - Built NIST SP 800-88 compliant sanitization engine (Win/Linux/Android).
   - Issued blockchain certificates on Ethereum; integrated ML device-recognition pass.
3. AI Resume Shortlisting System
   - Full-stack recruitment system matching resume attributes to job profiles.
4. Netflix Content Analysis & Recommendation Engine
   - Built TF-IDF and Cosine similarity recommendation models.

CERTIFICATIONS:
- Coding & Programming (Samsung Innovation Campus, 2024)
- Internet of Things (Samsung Innovation Campus, 2026)
- The Complete Python Bootcamp (Udemy, 2023)
- DSA with Java (Apna College, 2024)
- Full Stack Web Development (Apna College, 2024)
=========================================
    `.trim();

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Pratham_Mahendra_Bhat_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-teal-500/10 rounded-full filter blur-[100px] -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full filter blur-[120px] -z-10 animate-pulse duration-[12000ms]" />

      {/* Hero Visual Matrix Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] opacity-100 -z-20" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 font-mono text-xs tracking-wide"
            id="hero-status-badge"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            Available for Internships — Samsung Campus Alum
          </motion.div>

          {/* Main Titles */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
              id="hero-name"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>

            {/* Dynamic Typing Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-8 flex items-center justify-center lg:justify-start font-mono text-lg sm:text-xl text-slate-300 gap-1"
              id="hero-typing-container"
            >
              <span>A dedicated </span>
              <span className="text-teal-400 font-semibold text-glow">
                {typedText}
              </span>
              <span className="inline-block w-[3px] h-[1.2em] bg-teal-400 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-xl mx-auto lg:mx-0 text-slate-400 text-sm sm:text-base leading-relaxed"
              id="hero-tagline-paragraph"
            >
              Specializing in Machine Learning, NLP, and Applied AI. Empowering security analytics 
              and enterprise pipelines with production-ready intelligence models.
            </motion.p>
          </div>

          {/* Quick Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400"
            id="hero-quick-contacts"
          >
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 hover:text-teal-400 transition-colors py-1 px-2.5 rounded bg-white/5 border border-white/5 hover:border-teal-500/20"
            >
              <LucideIcon name="Mail" className="w-4 h-4 text-teal-400" />
              {PERSONAL_INFO.email}
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-400 transition-colors py-1 px-2.5 rounded bg-white/5 border border-white/5 hover:border-teal-500/20"
            >
              <LucideIcon name="Github" className="w-4 h-4 text-teal-400" />
              knightcodecc
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-400 transition-colors py-1 px-2.5 rounded bg-white/5 border border-white/5 hover:border-teal-500/20"
            >
              <LucideIcon name="Linkedin" className="w-4 h-4 text-teal-400" />
              LinkedIn Profile
            </a>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            id="hero-actions"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-full hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer text-center text-sm"
              id="hero-view-projects"
            >
              View Projects
            </button>
            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/5 text-slate-300 hover:text-teal-300 border border-white/10 hover:border-teal-500/30 rounded-full hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-sm"
              id="hero-download-resume"
            >
              <LucideIcon name="Download" className="w-4 h-4" />
              Download Resume
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent text-slate-400 hover:text-white hover:underline transition-colors cursor-pointer text-center text-sm"
              id="hero-contact"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Hero Right Interactive Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center"
          id="hero-visual-card"
        >
          <div className="relative w-full max-w-[420px] aspect-square rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-600/10 border border-teal-500/20 p-6 backdrop-blur-md flex flex-col justify-between shadow-2xl overflow-hidden group">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 -z-10" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full filter blur-2xl group-hover:bg-teal-500/30 transition-colors" />

            {/* Header section with status light */}
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                <span className="font-mono text-xs text-teal-400 tracking-wider uppercase">
                  Model Loaded: Bert-SIEM
                </span>
              </div>
              <LucideIcon name="BrainCircuit" className="w-5 h-5 text-teal-400" />
            </div>

            {/* Interactive/Animated code window inside Mockup */}
            <div className="flex-1 my-6 font-mono text-[11px] sm:text-xs text-slate-300 space-y-3 overflow-y-auto leading-normal">
              <div>
                <span className="text-purple-400">import</span> tensorflow <span className="text-purple-400">as</span> tf
              </div>
              <div>
                <span className="text-purple-400">from</span> sklearn.cluster <span className="text-purple-400">import</span> KMeans
              </div>
              <div className="text-slate-500"># Initializing AI candidate model...</div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                <span className="text-teal-300">class</span> <span className="text-yellow-300">PrathamBhat</span>:
                <div className="pl-4">
                  education = <span className="text-green-300">"Cambridge Inst of Tech"</span>
                </div>
                <div className="pl-4">
                  cgpa = <span className="text-amber-300">8.18</span>
                </div>
                <div className="pl-4">
                  skills = [<span className="text-green-300">"ML"</span>, <span className="text-green-300">"NLP"</span>, <span className="text-green-300">"Data Science"</span>]
                </div>
              </div>
              <div className="text-emerald-400 flex items-center gap-2">
                <LucideIcon name="Check" className="w-3.5 h-3.5 text-emerald-400" />
                <span>Validation Success: CGPA 8.18/10</span>
              </div>
            </div>

            {/* Bottom info banner */}
            <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>LOC: BENGALURU, IN</span>
              <span>EST: 2027</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
