import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Autonomous Nuclear Leakage Detection and Repair Robot",
    description: "Autonomous TurtleBot inspection robot for nuclear environments with SLAM navigation, CNN-based anomaly detection, and simulated repair via MoveIt.",
    technologies: "ROS, Gazebo, MoveIt, RViz, RTAB-Map, SLAM, OpenCV, Python, Reinforcement Learning, CNNs",
  },
  {
    title: "Autonomous Facade-Painting Robot",
    description: "ROS-powered wall-painting robot with 3D surface mapping, structured coverage path planning, and real-time spray control.",
    technologies: "ROS, RTAB-Map, Navigation Stack, Embedded Systems, Python, Computer Vision, MQTT",
  },
  {
    title: "Space Rover for Planetary Exploration",
    description: "Semi-autonomous planetary rover with SLAM-based localisation, RTSP camera streaming, and a PyQt ground station interface.",
    technologies: "ROS, SLAM, OpenCV, PyQt, RTSP, Python, Raspberry Pi",
  },
  {
    title: "6-DOF Robotic Arm with Soft Gripper",
    description: "Optimised robotic arm with soft gripper for improved grasp stability using IK solvers and MoveIt trajectory planning.",
    technologies: "ROS, MoveIt, Python, CAD Design, Embedded Systems",
  },
  {
    title: "Employee Onboarding Automation – UiPath",
    description: "End-to-end RPA workflow for HR onboarding including form processing, email dispatch, and Excel record management.",
    technologies: "UiPath, Excel, Email Automation, Web Scraping",
  },
  {
    title: "Vision Model Fine-Tuning via DPO",
    description: "Fine-tuned Qwen VLM using Direct Preference Optimization with curated preference data for multimodal alignment.",
    technologies: "DPO, Qwen Model, LLaMA, Python, Deep Learning",
  },
  {
    title: "IMU Athlete Speed Monitor & Django Dashboard",
    description: "Real-time athlete speed analytics system with Arduino IMU sensors, Python signal processing, and a live Django dashboard.",
    technologies: "Arduino, Django, Python, REST APIs, HTML/CSS, Data Visualization",
  },
];

const formatTech = (s) => s.split(",").map((t) => t.trim());

export default function ProjectsFiltered({ selectedSkill }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, [selectedSkill]);

  const filtered = projects.filter((p) =>
    p.technologies.toLowerCase().includes(selectedSkill.toLowerCase())
  );

  if (!filtered.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      style={{ padding: "0 24px 40px", maxWidth: 860, margin: "0 auto" }}
    >
      <div style={{
        background: "rgba(0,245,255,0.04)",
        border: "1px solid rgba(0,245,255,0.12)",
        borderRadius: 16,
        padding: "24px 28px",
      }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,245,255,0.7)", marginBottom: 16 }}>
          Filtered by: <span style={{ color: "#00f5ff" }}>{selectedSkill}</span> · {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        {loading ? (
          <div style={{ display: "flex", gap: 8, alignItems: "center", padding: "12px 0" }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#00f5ff" }}
              />
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {filtered.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "14px 18px",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff", marginBottom: 5 }}>{p.title}</p>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: 10, lineHeight: 1.5 }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {formatTech(p.technologies).map((t) => (
                    <span
                      key={t}
                      className="pill"
                      style={t.toLowerCase() === selectedSkill.toLowerCase() ? {
                        background: "rgba(0,245,255,0.15)",
                        borderColor: "rgba(0,245,255,0.4)",
                        color: "#00f5ff",
                      } : {}}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}