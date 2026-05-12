import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ROLES = ["Robotics Engineer", "AI & Computer Vision", "Embedded Systems"];

export default function Hero() {
  const canvasRef = useRef(null);

  // Subtle animated grid on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = 48;
      ctx.strokeStyle = `rgba(0,245,255,0.06)`;
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Pulsing dot at intersections
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const pulse = (Math.sin(t * 0.02 + x * 0.05 + y * 0.05) + 1) / 2;
          ctx.beginPath();
          ctx.arc(x, y, 1.5 * pulse, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,245,255,${0.08 * pulse})`;
          ctx.fill();
        }
      }
      t++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const base = import.meta.env.BASE_URL;

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 24px",
        overflow: "hidden",
      }}
    >
      {/* Grid canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          pointerEvents: "none", zIndex: 1,
        }}
      />

      {/* Radial glow behind avatar */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -60%)",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(155,93,229,0.18) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 32 }}
        >
          <div style={{
            width: 160, height: 160,
            margin: "0 auto",
            borderRadius: "50%",
            padding: 3,
            background: "linear-gradient(135deg, #00f5ff, #ff2d78)",
          }}>
            <img
              src={`${base}me.jpg`}
              alt="Aravind Sankar"
              style={{
                width: "100%", height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ marginBottom: 16 }}
        >
          MSc Robotics · University of Manchester
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 24,
            background: "linear-gradient(135deg, #ffffff 30%, rgba(0,245,255,0.8) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Aravind Sankar
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
            marginBottom: 40,
          }}
        >
          {ROLES.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.12, duration: 0.5 }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                padding: "6px 16px",
                borderRadius: 999,
                border: "1px solid rgba(0,245,255,0.25)",
                color: "rgba(0,245,255,0.85)",
                background: "rgba(0,245,255,0.05)",
              }}
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              padding: "12px 28px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #00f5ff, #9b5de5)",
              color: "#000",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 0 20px rgba(0,245,255,0.3)",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(0,245,255,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(0,245,255,0.3)"; }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              padding: "12px 28px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.85)",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          style={{ marginTop: 64 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{
              width: 22, height: 36,
              margin: "0 auto",
              border: "2px solid rgba(255,255,255,0.2)",
              borderRadius: 11,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: 4,
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              style={{
                width: 4, height: 8,
                borderRadius: 2,
                background: "rgba(0,245,255,0.7)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}