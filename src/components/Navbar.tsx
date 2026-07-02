import React, { useState, useEffect } from "react";
import { LucideIcon } from "./LucideIcon";
import { PERSONAL_INFO } from "../data";

interface NavbarProps {
  sections: { id: string; label: string }[];
}

export const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setScrolled(window.scrollY > 20);

      // Active section highlighting
      const scrollPosition = window.scrollY + 120; // offset for nav height
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // offset for sticky header
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-[#000000]/30"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-2 cursor-pointer focus:outline-none"
          id="nav-logo"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center font-display font-bold text-[#0A0A0F] shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
            PM
          </div>
          <div className="text-left">
            <span className="block font-display font-bold text-sm tracking-wide text-white group-hover:text-teal-400 transition-colors">
              Pratham Bhat
            </span>
            <span className="block font-mono text-[10px] text-slate-400 tracking-wider uppercase">
              AI Engineer
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 rounded-full font-sans text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-teal-500/15 to-blue-500/15 text-teal-400 border border-teal-500/20 shadow-sm shadow-teal-500/5 font-semibold"
                  : "text-slate-400 hover:text-white border border-transparent"
              }`}
              id={`nav-link-${section.id}`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* Call to action (Resume Link) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-xs font-semibold text-slate-400 hover:text-teal-400 transition-colors"
          >
            Hire Me
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg shadow-teal-500/25 hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            id="nav-cta"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 cursor-pointer"
          id="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          <LucideIcon name={mobileMenuOpen ? "X" : "Menu"} className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile nav drawer */}
      <div
        className={`md:hidden fixed top-[73px] left-0 w-full bg-[#0A0A0F]/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[80vh] opacity-100 py-6 border-b border-white/10 visible"
            : "max-h-0 opacity-0 py-0 invisible"
        }`}
        id="nav-mobile-menu"
      >
        <div className="px-6 flex flex-col gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-4 py-3 rounded-xl font-sans text-sm font-medium transition-all ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-teal-500/10 to-blue-500/10 text-teal-400 border-l-2 border-teal-500 font-semibold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
              id={`nav-mobile-link-${section.id}`}
            >
              {section.label}
            </button>
          ))}
          <div className="pt-4 mt-2 border-t border-white/5 flex gap-4">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 rounded-lg text-xs font-semibold text-slate-300 hover:bg-white/10"
            >
              <LucideIcon name="Linkedin" className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 rounded-lg text-xs font-semibold text-slate-300 hover:bg-white/10"
            >
              <LucideIcon name="Github" className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
