import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-28 px-6 max-w-4xl mx-auto relative z-10 bg-black bg-opacity-50 backdrop-blur-md rounded-2xl mb-48"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center"
        style={{
          background: 'linear-gradient(90deg, #ffffff, #e0e0e0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Divider */}
      <div className="w-24 h-1 bg-gradient-to-r from-white via-gray-300 to-gray-400 mx-auto mb-10 rounded-full"></div>

      {/* Paragraph */}
      <motion.p
        className="text-lg md:text-xl leading-relaxed text-gray-100 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
Currently advancing my studies in robotics and AI, I am passionate about designing intelligent autonomous systems that merge software and hardware innovation. Proficient in ROS, MoveIt, UiPath, and computer vision, I enjoy building practical solutions that solve real-world problems. Driven by curiosity and a desire to push technological boundaries, I aim to contribute to the future of robotics by creating systems that are not only efficient but also adaptive and intelligent. Beyond technical expertise, I thrive on collaboration, problem-solving, and continuously learning emerging technologies to bring ambitious ideas to life.     </motion.p>
    </motion.section>
  );
}
