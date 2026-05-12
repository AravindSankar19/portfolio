import { motion } from "framer-motion";

const educationData = [
  {
    institution: "University of Manchester",
    degree: "MSc Robotics",
    period: "2025 – Present",
    logo: "university_of_manchester.png",
    accent: "#00f5ff",
    note: "Currently enrolled",
  },
  {
    institution: "Vellore Institute of Technology",
    degree: "B.Tech in CSE (AI & Robotics)",
    period: "2021 – 2025",
    score: "CGPA: 8.5",
    logo: "vit.png",
    accent: "#9b5de5",
  },
  {
    institution: "The Grove School (NIOS)",
    degree: "Class XII",
    period: "",
    score: "84.6%",
    logo: "nios.jpg",
    accent: "#f472b6",
  },
  {
    institution: "GSS Jain Vidyalaya",
    degree: "Class X",
    period: "",
    score: "86.8%",
    logo: "gss_jain.jpeg",
    accent: "#fb923c",
  },
];

export default function Education() {
  const base = import.meta.env.BASE_URL;

  return (
    <motion.section
      id="education"
      style={{ padding: "100px 24px", maxWidth: 860, margin: "0 auto" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p className="section-label" style={{ marginBottom: 12 }}>Academic Background</p>
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 900,
          background: "linear-gradient(135deg, #ffffff, rgba(155,93,229,0.8))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          marginBottom: 16,
        }}>
          Education
        </h2>
        <div className="h-divider" />
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: 36 }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: 11,
          top: 8,
          bottom: 8,
          width: 2,
          background: "linear-gradient(to bottom, rgba(0,245,255,0.5), rgba(155,93,229,0.3), transparent)",
          borderRadius: 2,
        }} />

        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.12 }}
            style={{ position: "relative", marginBottom: idx < educationData.length - 1 ? 20 : 0 }}
          >
            {/* Dot */}
            <div style={{
              position: "absolute",
              left: -30,
              top: 20,
              width: 12, height: 12,
              borderRadius: "50%",
              background: edu.accent,
              boxShadow: `0 0 10px ${edu.accent}80`,
            }} />

            <div
              className="glass"
              style={{ padding: "20px 24px", display: "flex", gap: 18, alignItems: "center" }}
            >
              {/* Logo */}
              <div style={{
                flexShrink: 0,
                width: 48, height: 48,
                borderRadius: 12,
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${edu.accent}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden",
              }}>
                <img src={`${base}${edu.logo}`} alt={edu.institution} style={{ width: 36, height: 36, objectFit: "contain" }} />
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 6 }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}>{edu.institution}</p>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{edu.degree}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    {edu.period && (
                      <span style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: edu.accent,
                      }}>
                        {edu.period}
                      </span>
                    )}
                    {edu.score && (
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
                        {edu.score}
                      </p>
                    )}
                    {edu.note && (
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.67rem", color: edu.accent, marginTop: 2 }}>
                        {edu.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}