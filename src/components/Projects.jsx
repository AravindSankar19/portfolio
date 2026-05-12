import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 0,
    tag: "Autonomous Robotics",
    title: "Nuclear Leakage Detection & Repair Robot",
    goal: "Enable fully autonomous inspection and simulated repair inside radiation-hazardous environments where human access is unsafe.",
    contribution: "Designed the full ROS architecture, integrated RTAB-Map SLAM for GPS-denied navigation, built the CNN-based anomaly detection pipeline, and coordinated MoveIt manipulation for repair tasks.",
    technologies: ["ROS", "Gazebo", "MoveIt", "RTAB-Map", "SLAM", "OpenCV", "Python", "RL", "CNN"],
    images: ["nuclear1.png", "nuclear2.png"],
    videos: [],
    links: { github: "", report: "", demo: "" },
  },
  {
    id: 1,
    tag: "Mobile Robotics",
    title: "Autonomous Facade-Painting Robot",
    goal: "Automate wall-painting on vertical surfaces with structured coverage paths, eliminating manual scaffolding and improving consistency.",
    contribution: "Built the ROS navigation stack integration, implemented 3D surface mapping with RTAB-Map, and developed the lawnmower coverage path planner with real-time spray control.",
    technologies: ["ROS", "RTAB-Map", "Nav Stack", "Embedded Systems", "Python", "OpenCV"],
    images: ["vivid1.png", "vivid2.png"],
    videos: [],
    links: { github: "", report: "", demo: "" },
  },
  {
    id: 2,
    tag: "Space Robotics",
    title: "Space Rover for Planetary Exploration",
    goal: "Build a semi-autonomous rover capable of navigating rough planetary terrain and streaming real-time telemetry to a ground station.",
    contribution: "Developed the modular ROS task execution system, implemented SLAM-based localisation, and built the RTSP camera streaming pipeline integrated with the PyQt ground station UI.",
    technologies: ["ROS", "SLAM", "OpenCV", "PyQt", "RTSP", "Python"],
    images: ["technocrats1.png", "technocrats2.jpg"],
    videos: [],
    links: { github: "", report: "", demo: "" },
  },
  {
    id: 3,
    tag: "Manipulation",
    title: "6-DOF Robotic Arm with Soft Gripper",
    goal: "Improve grasp stability of torque-limited actuators through soft gripper design and optimised inverse kinematics.",
    contribution: "Redesigned the gripper geometry in CAD to distribute contact forces, integrated IK solvers in MoveIt, and validated pick-and-place performance across object geometries in ROS simulation.",
    technologies: ["ROS", "MoveIt", "Python", "CAD", "Embedded Systems"],
    images: ["6DOF.webp", "6DOF-2.webp"],
    videos: [],
    links: { github: "", report: "", demo: "" },
  },
  {
    id: 4,
    tag: "Autonomous Robotics",
    title: "Leo Rover – Autonomous Pick & Sort System",
    goal: "Design an autonomous ROS 2–based Leo Rover system capable of detecting, picking, and sorting shaped cubes into bins of the corresponding colour.",
    contribution: "Contributed to the rover's autonomous navigation system and developed a custom GUI for controlling and launching all system operations.",
    technologies: ["ROS 2", "Leo Rover", "Python", "Navigation", "Computer Vision", "GUI", "OpenCV"],
    images: [],
    videos: [
      { src: "ui.mp4",     label: "Custom GUI" },
      { src: "navLeo.mp4", label: "Autonomous Navigation" },
    ],
    links: { github: "", report: "", demo: "" },
  },
  {
    id: 5,
    tag: "Automation",
    title: "Employee Onboarding Automation – UiPath",
    goal: "Reduce manual HR workload by automating repetitive onboarding steps: form filling, email dispatch, and record management.",
    contribution: "Designed and implemented the end-to-end UiPath workflow, built Excel integration for record updates, and created error-handling routines that cut manual onboarding time by ~70%.",
    technologies: ["UiPath", "Excel", "Email Automation", "Web Scraping"],
    images: ["uipath1.png", "uipath2.png"],
    videos: [],
    links: { github: "", report: "", demo: "" },
  },
  {
    id: 6,
    tag: "Machine Learning",
    title: "Vision Model Fine-Tuning via DPO",
    goal: "Improve alignment of the Qwen vision-language model with human preferences using Direct Preference Optimization.",
    contribution: "Curated the preference dataset, implemented the DPO training loop, and tuned hyperparameters to achieve stable multimodal alignment without reward model collapse.",
    technologies: ["DPO", "Qwen", "LLaMA", "Python", "Deep Learning"],
    images: ["dpo1.png", "dpo2.png"],
    videos: [],
    links: { github: "", report: "", demo: "" },
  },
  {
    id: 7,
    tag: "IoT & Web",
    title: "IMU Athlete Speed Monitor & Django Dashboard",
    goal: "Give coaches real-time athlete speed analytics through a browser dashboard driven by wearable IMU sensors.",
    contribution: "Wired the Arduino IMU data pipeline, built signal-processing filters in Python, exposed a Django REST API, and designed the live chart interface for the web dashboard.",
    technologies: ["Arduino", "Django", "Python", "REST APIs", "HTML/CSS", "Data Viz"],
    images: ["django.jpg", "imu.jpeg"],
    videos: [],
    links: { github: "", report: "", demo: "" },
  },
];

const TAG_COLORS = {
  "Autonomous Robotics": ["#00f5ff", "rgba(0,245,255,0.12)"],
  "Mobile Robotics":     ["#a78bfa", "rgba(167,139,250,0.12)"],
  "Space Robotics":      ["#38bdf8", "rgba(56,189,248,0.12)"],
  "Manipulation":        ["#fb923c", "rgba(251,146,60,0.12)"],
  "Automation":          ["#34d399", "rgba(52,211,153,0.12)"],
  "Machine Learning":    ["#f472b6", "rgba(244,114,182,0.12)"],
  "IoT & Web":           ["#facc15", "rgba(250,204,21,0.12)"],
};

const GHIcon   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
const DocIcon  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const PlayIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>;

const slideVariants = {
  enter: (d) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 280, damping: 28 } },
  exit:   (d) => ({ x: d < 0 ? 80 : -80, opacity: 0, transition: { duration: 0.2 } }),
};

function VideoPlayer({ src, label, base }) {
  return (
    <div style={{
      flex: 1, position: "relative",
      borderRadius: 12, overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)",
      background: "#000",
    }}>
      <video
        src={`${base}${src}`}
        controls
        muted
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <span style={{
        position: "absolute", top: 8, left: 8,
        fontFamily: "var(--font-mono)", fontSize: "0.62rem",
        padding: "3px 8px", borderRadius: 999,
        background: "rgba(0,0,0,0.75)",
        border: "1px solid rgba(255,255,255,0.15)",
        color: "rgba(255,255,255,0.85)",
        pointerEvents: "none",
      }}>
        {label}
      </span>
    </div>
  );
}

function MediaRow({ project, base }) {
  const hasImages = project.images.length > 0;
  const hasVideos = project.videos.length > 0;
  if (!hasImages && !hasVideos) return null;

  // Video-only (Leo Rover): taller, side by side
  if (!hasImages && hasVideos) {
    return (
      <div style={{ display: "flex", gap: 10, marginBottom: 20, height: 210 }}>
        {project.videos.map((v, i) => (
          <VideoPlayer key={i} src={v.src} label={v.label} base={base} />
        ))}
      </div>
    );
  }

  // Images (+ optional videos)
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20, height: 200 }}>
      {project.images.map((img, i) => (
        <div key={`img-${i}`} style={{
          flex: 1, borderRadius: 12, overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
        }}>
          <img
            src={`${base}${img}`}
            alt={`${project.title} ${i + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
      {project.videos.map((v, i) => (
        <VideoPlayer key={`vid-${i}`} src={v.src} label={v.label} base={base} />
      ))}
    </div>
  );
}

export default function Projects() {
  const [[page, dir], setPage] = useState([0, 0]);
  const base = import.meta.env.BASE_URL;

  const go = (d) => setPage(([p]) => [(p + d + projects.length) % projects.length, d]);
  const current = projects[page];
  const [accent, accentBg] = TAG_COLORS[current.tag] ?? ["#00f5ff", "rgba(0,245,255,0.1)"];

  return (
    <motion.section
      id="projects"
      style={{ padding: "100px 24px", maxWidth: 860, margin: "0 auto" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p className="section-label" style={{ marginBottom: 12 }}>Selected Work</p>
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900,
          background: "linear-gradient(135deg, #ffffff, rgba(0,245,255,0.8))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          marginBottom: 16,
        }}>
          Projects & Research
        </h2>
        <div className="h-divider" />
      </div>

      {/* Card — no fixed minHeight, let content define height */}
      <AnimatePresence custom={dir} mode="wait">
        <motion.div
          key={page}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="glass"
          style={{ padding: "32px 36px", width: "100%" }}
        >
          {/* Tag + counter */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: "0.68rem",
              padding: "4px 12px", borderRadius: 999,
              background: accentBg, border: `1px solid ${accent}44`, color: accent,
            }}>
              {current.tag}
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "rgba(255,255,255,0.28)" }}>
              {String(page + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: 18, lineHeight: 1.3 }}>
            {current.title}
          </h3>

          {/* Media */}
          <MediaRow project={current} base={base} />

          {/* Goal + Contribution */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }}>
            {[
              { label: "Goal",            text: current.goal,         color: "#00f5ff" },
              { label: "My Contribution", text: current.contribution, color: "#f472b6" },
            ].map(({ label, text, color }) => (
              <div key={label} style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${color}22`,
                borderLeft: `3px solid ${color}`,
                borderRadius: "0 10px 10px 0",
                padding: "11px 14px",
              }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", color, textTransform: "uppercase", marginBottom: 5 }}>
                  {label}
                </p>
                <p style={{ fontSize: "0.81rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.55 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Tech pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
            {current.technologies.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { key: "github", Icon: GHIcon,   label: "GitHub" },
              { key: "report", Icon: DocIcon,  label: "Report" },
              { key: "demo",   Icon: PlayIcon, label: "Demo"   },
            ].map(({ key, Icon, label }) => {
              const href = current.links[key];
              return (
                <a
                  key={key}
                  href={href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => { if (!href) e.preventDefault(); }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "6px 14px", borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: href ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.22)",
                    fontSize: "0.76rem", fontWeight: 500,
                    textDecoration: "none",
                    cursor: href ? "pointer" : "default",
                    transition: "all 0.18s",
                  }}
                  onMouseEnter={e => { if (href) { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                >
                  <Icon /> {label}
                </a>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation — fixed 24px gap below card, no more hardcoded 580px */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, marginTop: 24 }}>
        <NavBtn onClick={() => go(-1)} dir="left" />
        <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setPage([i, i > page ? 1 : -1])}
              animate={{
                width: i === page ? 22 : 7,
                background: i === page ? "#00f5ff" : "rgba(255,255,255,0.2)",
              }}
              transition={{ duration: 0.25 }}
              style={{ height: 7, borderRadius: 4, border: "none", padding: 0, cursor: "pointer" }}
            />
          ))}
        </div>
        <NavBtn onClick={() => go(1)} dir="right" />
      </div>
    </motion.section>
  );
}

function NavBtn({ onClick, dir }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      style={{
        width: 42, height: 42, borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.15)",
        background: "rgba(255,255,255,0.05)",
        color: "rgba(255,255,255,0.8)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", fontSize: "1rem",
      }}
    >
      {dir === "left" ? "←" : "→"}
    </motion.button>
  );
}