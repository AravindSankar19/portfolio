import { motion } from "framer-motion";

// ── SVG icon components (no emoji, guaranteed to render) ──────────────────────

const IconNav = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

const IconEye = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconBrain = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9.5 2a4.5 4.5 0 0 1 4.5 4.5v.5h1a3 3 0 0 1 0 6h-1v.5a4.5 4.5 0 0 1-9 0V6.5A4.5 4.5 0 0 1 9.5 2z" />
    <path d="M14.5 7H16a3 3 0 0 1 0 6h-1.5" />
  </svg>
);

const IconPeople = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconGitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconCV = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <polyline points="9 15 12 18 15 15" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

const researchAreas = [
  { Icon: IconNav,    title: "Autonomous Navigation",  desc: "SLAM and path planning in unstructured, dynamic environments" },
  { Icon: IconEye,    title: "Vision-Based Robotics",  desc: "Perception pipelines that let robots see and interpret the world" },
  { Icon: IconBrain,  title: "Learning-Based Control", desc: "Reinforcement learning for adaptive, real-world robot behaviour" },
  { Icon: IconPeople, title: "Human-Aware Interaction", desc: "Systems that reason about people and act safely alongside them" },
];

const links = [
  { label: "GitHub",      Icon: IconGitHub,   href: "https://github.com/Aravind12390",      download: false },
  { label: "LinkedIn",    Icon: IconLinkedIn, href: "https://linkedin.com/in/aravind-sankar-995795270",   download: false },
  { label: "CV / Résumé", Icon: IconCV,       href: "aravind-portfolio/src/assets/cv.pdf", download: true  },
];

// ── Animation variants ────────────────────────────────────────────────────────

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const item      = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

// ── Component ─────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-28 px-6 max-w-4xl mx-auto relative z-10 bg-black bg-opacity-50 backdrop-blur-md rounded-2xl mb-48"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      {/* ── Title ── */}
      <motion.h2
        variants={item}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center"
        style={{
          background: "linear-gradient(90deg, #ffffff, #e0e0e0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        About Me
      </motion.h2>

      <motion.div
        variants={item}
        className="w-24 h-1 bg-gradient-to-r from-white via-gray-300 to-gray-400 mx-auto mb-10 rounded-full"
      />

      {/* ── Bio ── */}
      <motion.p
        variants={item}
        className="text-lg md:text-xl leading-relaxed text-gray-100 text-center max-w-2xl mx-auto"
      >
        I spend most of my time somewhere between the real world and ROS simulation,
        building robots that try to understand, move, and sometimes survive messy environments.
        <br /><br />
        My curiosity sits at the intersection of autonomous systems and intelligent perception —
        where SLAM answers "where am I?", computer vision answers "what is that?",
        and reinforcement learning quietly answers "what should I do next?"
      </motion.p>

      {/* ── Objectives ── */}
      <motion.div
        variants={item}
        style={{ borderLeft: "3px solid rgba(255,255,255,0.25)" }}
        className="mt-12 max-w-2xl mx-auto pl-5"
      >
        <p
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Objectives
        </p>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed">
          I'm working towards robots that don't just follow instructions, but{" "}
          <span className="text-white font-semibold">adapt when the world refuses to behave</span>.
          My goal is to develop systems that bridge the sim-to-real gap reliably —
          combining robust perception, learning-based control, and safe human interaction —
          and to contribute to open, reproducible robotics research along the way.
        </p>
      </motion.div>

      {/* ── Research Interests ── */}
      <motion.div variants={item} className="mt-14 max-w-2xl mx-auto">
        <p
          className="text-xs font-bold uppercase tracking-widest text-center mb-6"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Research Interests
        </p>

        {/* Inline style grid guarantees 2 columns regardless of Tailwind purge */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          {researchAreas.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.18 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                padding: "16px 18px",
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
              }}
            >
              {/* Icon bubble */}
              <div
                style={{
                  flexShrink: 0,
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <Icon />
              </div>

              <div>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", marginBottom: 3 }}>
                  {title}
                </p>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", lineHeight: 1.45 }}>
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── External Links ── */}
      <motion.div
        variants={item}
        style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 48, flexWrap: "wrap" }}
      >
        {links.map(({ label, Icon, href, download }) => (
          <a
            key={label}
            href={href}
            target={download ? "_self" : "_blank"}
            rel="noopener noreferrer"
            download={download || undefined}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 20px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.85rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgba(255,255,255,0.8)";
            }}
          >
            <Icon />
            {label}
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
}