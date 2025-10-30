import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Autonomous Nuclear Leakage Detection and Repair Robot",
    description: "This project focuses on developing a TurtleBot manipulator...",
    technologies: "ROS, Gazebo, MoveIt, RViz, RTAB-Map, SLAM, OpenCV, Python, Reinforcement Learning, CNNs"
  },
  {
    title: "Autonomous Facade-Painting Robot",
    description: "This project involves the development of a robotic system...",
    technologies: "ROS, RTAB-Map, Navigation Stack, Embedded Systems, Python, Computer Vision, MQTT"
  },
  {
    title: "Space Rover for Planetary Exploration",
    description: "Developed as part of the Technocrats Robotics team...",
    technologies: "ROS, SLAM, OpenCV, PyQt, RTSP, Python, Raspberry pi"
  },
  {
    title: "6-DOF Robotic Arm with Soft Gripper",
    description: "A 6-degree-of-freedom robotic arm was designed and optimized...",
    technologies: "ROS, MoveIt, Python, CAD Design, Embedded Systems"
  },
  {
    title: "Employee Onboarding Automation using UiPath",
    description: "An automation workflow was created to streamline the teacher onboarding process...",
    technologies: "UiPath, Excel, Email Automation, Web Scraping"
  },
  {
    title: "Vision Model Fine-Tuning Using DPO",
    description: "This project focuses on fine-tuning the Qwen vision-language model using DPO...",
    technologies: "DPO, Qwen Model, LLaMA, Python, Deep Learning"
  },
  {
    title: "IMU-Based Athlete Speed Monitoring and Django Dashboard",
    description: "A system developed to measure and analyze the running speed of athletes...",
    technologies: "Arduino, Django, Python, REST APIs, HTML/CSS, Data Visualization"
  }
];

const formatTechnologies = (techString) =>
  techString.split(',').map(t => t.trim()).join(' | ');

export default function ProjectsFiltered({ selectedSkill }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedSkill]);

  const filtered = projects.filter(project =>
    project.technologies.toLowerCase().includes(selectedSkill.toLowerCase())
  );

  if (!filtered.length) return null;

  const dotAnimation = {
    y: [0, -12, 0],
    boxShadow: [
      "0 0 0px rgba(255,105,180,0.5)",
      "0 0 10px rgba(255,105,180,1)",
      "0 0 0px rgba(255,105,180,0.5)"
    ],
    transition: { yoyo: Infinity, duration: 0.5 }
  };

  return (
    <motion.section
      className="py-10 px-6 max-w-5xl mx-auto relative z-10 bg-black bg-opacity-40 backdrop-blur-md rounded-2xl mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        Projects using "{selectedSkill}"
      </h3>

      {loading ? (
        <div className="flex flex-col items-center gap-4 mt-10">
          <div className="flex gap-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(255,105,180,0.7)]"
                animate={dotAnimation}
                transition={{ delay: i * 0.2, yoyo: Infinity, duration: 0.5 }}
              />
            ))}
          </div>
          <p className="text-pink-400 text-sm italic tracking-wide animate-pulse">
            Loading projects...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {filtered.map((project, idx) => (
            <div key={idx} className="bg-glass p-6 rounded-2xl shadow-2xl text-center">
              <p className="text-xl font-bold text-cyan-400 mb-2">{project.title}</p>
              <p className="text-gray-300 text-sm mb-2">{project.description}</p>
              <p className="text-purple-400 text-xs italic">{formatTechnologies(project.technologies)}</p>
            </div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
