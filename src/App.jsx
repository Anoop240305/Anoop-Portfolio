import { useState } from "react";
import "./styles/global.css";
import { softwareResume, embeddedResume } from "./data/resumeData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState("software");

  const resume = activeTab === "software" ? softwareResume : embeddedResume;
  const accentColor = activeTab === "software" ? "var(--accent-cyan)" : "var(--accent-green)";

  return (
    <>
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <Hero activeTab={activeTab} />
      <About summary={resume.summary} kpis={resume.kpis} accentColor={accentColor} />
      <Skills skills={resume.skills} accentColor={accentColor} />
      <Experience experience={resume.experience} />
      <Projects projects={resume.projects} accentColor={accentColor} />
      <Achievements />
      <Education />
      <Footer activeTab={activeTab} />
    </>
  );
}