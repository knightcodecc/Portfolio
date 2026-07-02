/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "summary", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" }
];

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Dynamic Navigation */}
      <Navbar sections={SECTIONS} />

      {/* Main Content Layout */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Professional Summary Section */}
        <Summary />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Projects Showcase Section (Featured & GitHub Repos Feed) */}
        <Projects />

        {/* 5. Experience Timeline Section */}
        <Experience />

        {/* 6. Education Section */}
        <Education />

        {/* 7. Certifications & Honors Section */}
        <Certifications />

        {/* 8. Contact portal Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
