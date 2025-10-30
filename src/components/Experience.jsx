import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="flex justify-center items-center gap-16 flex-wrap md:flex-nowrap">
      
      {/* Robotics Intern Block */}
      <motion.div
        className="bg-glass p-8 rounded-3xl shadow-2xl flex-1 min-w-[320px] max-w-[420px] flex flex-col justify-between text-center"
        whileHover={{ scale: 1.05 }}
      >
        {/* Logo */}
        <motion.img
          src="/vividobots.ico"
          alt="Vividobots Logo"
          className="w-20 h-20 mx-auto mb-4 rounded-full object-contain bg-white/10 p-2"
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* Content */}
        <div>
          <p className="text-white mb-4">
            <strong>Robotics Intern – Vividobots Private Limited</strong> (Aug 2023 – Dec 2023)
          </p>
          <p className="text-white">
            Led knowledge-sharing sessions on Robotics and ROS, mentoring interns and enhancing
            real-time testing precision.
          </p>
        </div>

        <button
          onClick={() => window.open("https://www.vividobots.com/", "_blank")}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:from-purple-600 hover:to-pink-600 transition transform duration-300"
        >
          Know More
        </button>
      </motion.div>

      {/* Creative Separator */}
      <div className="flex flex-col items-center justify-center relative mx-6">
        <motion.div
          className="text-white text-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          🔗
        </motion.div>
        <span className="mt-2 w-1 h-14 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full animate-pulse"></span>
      </div>

      {/* Technocrats Block */}
      <motion.div
        className="bg-glass p-8 rounded-3xl shadow-2xl flex-1 min-w-[320px] max-w-[420px] flex flex-col justify-between text-center"
        whileHover={{ scale: 1.05 }}
      >
        {/* Logo */}
        <motion.img
          src="/technocrats_logo.jpeg"
          alt="Technocrats Robotics Logo"
          className="w-20 h-20 mx-auto mb-4 rounded-full object-contain bg-white/10 p-2"
          whileHover={{ rotate: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* Content */}
        <div>
          <p className="text-white mb-4">
            <strong>Core Member – Technocrats Robotics, VIT</strong> (2021 – 2023)
          </p>
          <p className="text-white">
            Represented the team at ERC and IRC, enhancing rover autonomy and cross-team coordination.
          </p>
        </div>

        <button
          onClick={() =>
            window.open("https://technocrats-robotics.github.io/website/", "_blank")
          }
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:from-purple-600 hover:to-pink-600 transition transform duration-300"
        >
          Know More
        </button>
      </motion.div>
    </div>
  );
}
