import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ProjectsFiltered from "./components/ProjectsFiltered";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

const sections = [
  { id: "hero",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education" },
  { id: "skills",     label: "Skills" },
  { id: "projects",   label: "Projects" },
  { id: "contact",    label: "Contact" },
];

function SectionDivider() {
  return (
    <div style={{
      width: "100%", maxWidth: 860, margin: "0 auto",
      height: 1,
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
    }} />
  );
}

export default function App() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const base = import.meta.env.BASE_URL;

  return (
    <div style={{ position: "relative", minHeight: "100vh", color: "#fff", overflowX: "hidden" }}>

      {/* Background image */}
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: `url(${base}robot.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }} />

      {/* Dark overlay for readability */}
      <div style={{
        position: "fixed", inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,8,0.85) 0%, rgba(0,0,8,0.75) 100%)",
        zIndex: 0,
      }} />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
          particles: {
            color: { value: "#00f5ff" },
            links: { enable: true, color: "#00f5ff", distance: 120, opacity: 0.2 },
            move: { enable: true, speed: 0.6 },
            number: { value: 40 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 2.5 } },
          },
        }}
        style={{ position: "fixed", inset: 0, zIndex: 0 }}
      />

      {/* ── Sidebar toggle ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed", top: 20, left: 20,
          zIndex: 60,
          width: 40, height: 40,
          borderRadius: 10,
          background: "rgba(0,0,0,0.7)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          backdropFilter: "blur(10px)",
          fontSize: "1.1rem",
        }}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* ── Sidebar ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed", inset: 0,
                background: "rgba(0,0,0,0.4)",
                zIndex: 55,
              }}
            />

            {/* Panel */}
            <motion.aside
              initial={{ x: -260, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -260, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
              style={{
                position: "fixed", top: 0, left: 0,
                height: "100%", width: 240,
                zIndex: 56,
                background: "rgba(4,4,12,0.97)",
                borderRight: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
                display: "flex", flexDirection: "column",
                padding: "72px 24px 32px",
              }}
            >
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}>
                Navigate
              </p>
              {sections.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleScroll(s.id)}
                  style={{
                    background: "none", border: "none",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "1rem", fontWeight: 500,
                    textAlign: "left",
                    padding: "10px 0",
                    cursor: "pointer",
                    fontFamily: "var(--font-display)",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#00f5ff"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                >
                  {s.label}
                </motion.button>
              ))}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Main content ── */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Skills selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
        <AnimatePresence>
          {selectedSkill && <ProjectsFiltered selectedSkill={selectedSkill} />}
        </AnimatePresence>
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </div>
    </div>
  );
}