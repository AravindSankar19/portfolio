import { motion } from "framer-motion";

const educationData = [
  { 
    institution: "University of Manchester", 
    degree: "MSc Robotics", 
    score: "2025 – Present", 
    logo: "/logos/university_of_manchester.png" 
  },
  { 
    institution: "Vellore Institute of Technology", 
    degree: "B.Tech in CSE (AI & Robotics)", 
    score: "CGPA: 8.5 | 2021 – 2025", 
    logo: "/logos/vit.png" 
  },
  { 
    institution: "The Grove School (NIOS)", 
    degree: "Class XII", 
    score: "84.6%", 
    logo: "/logos/nios.jpg" 
  },
  { 
    institution: "GSS Jain Vidyalaya", 
    degree: "Class X", 
    score: "86.8%", 
    logo: "/logos/gss_jain.jpeg" 
  },
];

export default function Education() {
  return (
    <motion.section
      id="education"
      className="py-20 px-6 max-w-4xl mx-auto relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        🎓 Education Timeline
      </h2>

      <div className="relative border-l-4 border-purple-400/50 ml-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            className="mb-10 ml-6 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            {/* Timeline Marker */}
            <div className="absolute -left-6 top-2 w-4 h-4 bg-pink-500 rounded-full ring-4 ring-purple-400/50"></div>

            {/* Content Card */}
            <div className="bg-glass p-6 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform text-center">
              {/* Institution Logo */}
              <img
                src={edu.logo}
                alt={edu.institution}
                className="mx-auto mb-4 w-12 h-12 object-contain rounded-full"
              />
              
              {/* Institution Name */}
              <p className="text-white font-extrabold text-3xl mb-1">
                {edu.institution}
              </p>
              
              {/* Degree and Score */}
              <p className="text-white font-semibold mb-1">{edu.degree}</p>
              <p className="text-white">{edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
