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

export default function App() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">

      {/* BACKGROUNDS */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/robot.png')" }}
      />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
          particles: {
            color: { value: "#00f0ff" },
            links: { enable: true, color: "#00f0ff", distance: 120 },
            move: { enable: true, speed: 1 },
            number: { value: 60 },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="fixed inset-0 z-0"
      />

      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 text-white bg-black p-2 rounded-full hover:bg-gray-800 transition-none"
      >
        {isOpen ? "X" : "☰"}
      </button>

      {/* SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{ backgroundColor: "#000", isolation: "isolate" }}
            className="fixed top-0 left-0 h-full w-64 z-50 p-8 flex flex-col space-y-6 border-r border-gray-800"
          >
            {/* X button inside sidebar */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white mb-4 p-1 hover:text-gray-400"
            >
              X
            </button>

            <h2 className="text-xl font-bold text-white mb-4">Navigate</h2>

            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className="text-gray-300 text-lg text-left hover:text-white transition-none"
              >
                {section.label}
              </button>
            ))}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />

        <Skills selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />

        <div className="text-center mt-6 mb-4">
          <p className="text-sm text-gray-300 italic">
            Click on a skill above to see projects specific to that skill
          </p>
        </div>

        {selectedSkill && <ProjectsFiltered selectedSkill={selectedSkill} />}
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
