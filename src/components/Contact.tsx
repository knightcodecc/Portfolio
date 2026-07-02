import React, { useState } from "react";
import { LucideIcon } from "./LucideIcon";
import { PERSONAL_INFO } from "../data";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Portfolio Inquiry - AI Engineer / SDE Intern Role",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link parameters
    const emailTo = PERSONAL_INFO.email;
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hi Pratham,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );

    const mailtoUrl = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    
    // Redirect to the mailto link
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    
    // Reset confirmation status after a delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration blur blobs */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-teal-500/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-blue-600/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-teal-400 tracking-widest uppercase block">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Contact Pratham
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Seeking opportunities, project collaborations, or technical discussions. Drop a message!
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Column 1: Coordinates and links */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-semibold text-xl text-white">
              Let's build something exceptional.
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              I am open to SDE Internships, Applied AI fellowships, or Junior Machine Learning Engineer 
              positions. Reach out directly or via professional networks.
            </p>

            {/* Coordinate items */}
            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal-500/20 group transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-colors">
                  <LucideIcon name="Mail" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider">Email Address</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal-500/20 group transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-colors">
                  <LucideIcon name="Linkedin" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider">LinkedIn Network</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors truncate max-w-[200px] sm:max-w-none">
                    Pratham Mahendra Bhat
                  </p>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal-500/20 group transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-colors">
                  <LucideIcon name="Github" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider">GitHub Handle</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">
                    knightcodecc
                  </p>
                </div>
              </a>
            </div>

            {/* Resume button wrapper */}
            <div className="pt-6">
              <button
                onClick={handleDownloadResume}
                className="w-full px-6 py-4 bg-white/5 text-slate-300 hover:text-teal-300 border border-white/10 hover:border-teal-500/30 rounded-full hover:bg-white/10 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 text-sm font-semibold"
                id="contact-resume-button"
              >
                <LucideIcon name="FileText" className="w-5 h-5" />
                Download Resume PDF / TXT
              </button>
            </div>
          </div>

          {/* Column 2: Interactive Mailto form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5">
              <h3 className="font-display font-semibold text-lg text-white mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-teal-500/40 text-slate-200 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-teal-500/40 text-slate-200 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                    Message Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-teal-500/40 text-slate-200 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                    Message Text
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message details here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-teal-500/40 text-slate-200 text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-sm rounded-full hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <LucideIcon name="Mail" className="w-4 h-4 text-white" />
                  Compose Draft Email
                </button>

                {/* Submitting Success Notification */}
                {isSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2 animate-fadeIn">
                    <LucideIcon name="Check" className="w-4 h-4 text-emerald-400" />
                    <span>Launching your email client with populated fields! Thank you for reaching out.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
