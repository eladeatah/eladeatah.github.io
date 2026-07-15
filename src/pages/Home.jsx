import React from "react";
import LogicGrid from "@/components/portfolio/LogicGrid";
import TraceLine from "@/components/portfolio/TraceLine";
import CursorCoords from "@/components/portfolio/CursorCoords";
import FloatingNav from "@/components/portfolio/FloatingNav";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";

export default function Home() {
  return (
    <div className="relative bg-alabaster min-h-screen">
      <LogicGrid />
      <TraceLine />
      <CursorCoords />
      <FloatingNav />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}