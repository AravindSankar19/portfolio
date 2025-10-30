import { motion } from "framer-motion";

const skills = [
  "ROS", "SLAM", "MoveIt", "CNNs", "Computer Vision",
  "Python", "C/C++", "SQL", "Java", "HTML",
  "UiPath", "Raspberry Pi", "Arduino", "PyQt", "MQTT"
];

export default function Skills({ selectedSkill, setSelectedSkill }) {
  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-5xl mx-auto relative z-10 bg-black bg-opacity-40 backdrop-blur-md rounded-2xl my-10"
    >
      <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            onClick={() => setSelectedSkill(skill)}
            className={`bg-card px-6 py-3 rounded-full shadow-md text-sm font-medium text-white cursor-pointer
              ${selectedSkill === skill ? "bg-purple-600 shadow-lg" : "bg-gray-800"}`}
            whileHover={{
              boxShadow: "0 0 15px 5px rgba(255, 105, 180, 0.6)",
              background: "linear-gradient(90deg, #ff6ec4, #7873f5)"
            }}
            transition={{ duration: 0.3 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
