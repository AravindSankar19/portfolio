import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-[60] text-white bg-black p-2 rounded-md hover:bg-gray-800"
        style={{
          boxShadow: "none",
          textShadow: "none",
        }}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-0 left-0 h-full w-60 z-[55] flex flex-col space-y-6 p-8"
            style={{
              backgroundColor: "#000000", // pure solid black
              position: "fixed",
              isolation: "isolate", // ensures it’s a separate rendering layer
              mixBlendMode: "normal", // disables blending
              backdropFilter: "none", // disables blur
              borderRight: "1px solid #222",
              color: "#fff",
            }}
          >
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: "white", textShadow: "none" }}
            >
              Navigation
            </h2>

            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScroll(s.id)}
                className="text-gray-300 text-lg text-left hover:text-white"
                style={{
                  background: "none",
                  border: "none",
                  boxShadow: "none",
                  textShadow: "none",
                  color: "inherit",
                }}
              >
                {s.label}
              </button>
            ))}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
