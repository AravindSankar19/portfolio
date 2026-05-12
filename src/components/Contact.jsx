import { motion } from "framer-motion";

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const contacts = [
  {
    Icon: MailIcon,
    label: "Email",
    value: "technoaravind19@gmail.com",
    href: "mailto:technoaravind19@gmail.com",
    accent: "#00f5ff",
  },
  {
    Icon: PhoneIcon,
    label: "Phone",
    value: "+44 7799 266796",
    href: "tel:+447799266796",
    accent: "#9b5de5",
  },
  {
    Icon: LinkedInIcon,
    label: "LinkedIn",
    value: "aravind-sankar",
    href: "https://www.linkedin.com/in/aravind-sankar-995795270",
    accent: "#f472b6",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Contact() {
  return (
    <motion.section
      id="contact"
      style={{ padding: "100px 24px 120px", maxWidth: 860, margin: "0 auto" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Header */}
      <motion.div variants={item} style={{ textAlign: "center", marginBottom: 56 }}>
        <p className="section-label" style={{ marginBottom: 12 }}>Let's Connect</p>
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 900,
          background: "linear-gradient(135deg, #ffffff, rgba(0,245,255,0.8))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          marginBottom: 16,
        }}>
          Get In Touch
        </h2>
        <div className="h-divider" />
        <p style={{ marginTop: 20, color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", maxWidth: 480, margin: "20px auto 0" }}>
          Open to research collaborations, internship opportunities, and robotics discussions.
        </p>
      </motion.div>

      {/* Contact cards */}
      <motion.div
        variants={container}
        style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 520, margin: "0 auto" }}
      >
        {contacts.map(({ Icon, label, value, href, accent }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ x: 6 }}
            className="glass"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              padding: "18px 24px",
              textDecoration: "none",
              borderLeft: `3px solid ${accent}`,
              borderRadius: "0 16px 16px 0",
              transition: "box-shadow 0.2s",
            }}
          >
            <div style={{
              width: 40, height: 40,
              borderRadius: 10,
              background: `${accent}18`,
              border: `1px solid ${accent}33`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: accent,
              flexShrink: 0,
            }}>
              <Icon />
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: accent, marginBottom: 3 }}>
                {label}
              </p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", fontWeight: 500 }}>
                {value}
              </p>
            </div>
            <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.2)", fontSize: "1rem" }}>↗</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}