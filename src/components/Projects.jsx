// projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Autonomous Nuclear Leakage Detection and Repair Robot",
    description:
      "Designed an autonomous TurtleBot-based inspection robot for nuclear environments. The system integrates SLAM-based navigation (RTAB-Map), computer vision for anomaly detection (OpenCV + CNN), and a robotic manipulator for simulated repair tasks in Gazebo. Focused on safety-critical autonomous decision-making in GPS-denied environments.",
    technologies:
      "ROS, Gazebo, MoveIt, RViz, RTAB-Map, SLAM, OpenCV, Python, Reinforcement Learning, CNN",
    images: [
      `${import.meta.env.BASE_URL}nuclear1.png`,
      `${import.meta.env.BASE_URL}nuclear2.png`,
    ],
    links: {
      github: "",
      report: "",
      demo: ""
    }
  },

  {
    title: "Autonomous Facade-Painting Robot",
    description:
      "Developed a ROS-powered autonomous wall-painting robot capable of mapping vertical surfaces and executing structured coverage paths. Integrated RTAB-Map for 3D reconstruction, navigation stack for motion planning, and real-time control for consistent spray coverage.",
    technologies:
      "ROS, RTAB-Map, Navigation Stack, Embedded Systems, Python, OpenCV",
    images: [
      `${import.meta.env.BASE_URL}vivid1.png`,
      `${import.meta.env.BASE_URL}vivid2.png`,
    ],
    links: {
      github: "",
      report: "",
      demo: ""
    }
  },

  {
    title: "Space Rover for Planetary Exploration",
    description:
      "Built a semi-autonomous rover for rough terrain exploration with onboard perception and control systems. Implemented SLAM-based mapping, real-time camera streaming (RTSP), and modular ROS architecture for task execution in simulated planetary environments.",
    technologies: "ROS, SLAM, OpenCV, PyQt, RTSP, Python",
    images: [
      `${import.meta.env.BASE_URL}technocrats1.png`,
      `${import.meta.env.BASE_URL}technocrats2.jpg`,
    ],
    links: {
      github: "",
      report: "",
      demo: ""
    }
  },

  {
    title: "6-DOF Robotic Arm with Soft Gripper",
    description:
      "Designed and optimized a 6-DOF robotic arm with a soft gripper to improve grasp stability under torque-limited actuators. Integrated inverse kinematics with MoveIt for trajectory planning and tested pick-and-place operations in ROS simulation.",
    technologies:
      "ROS, MoveIt, Python, CAD Design, Embedded Systems",
    images: [
      `${import.meta.env.BASE_URL}6DOF.webp`,
      `${import.meta.env.BASE_URL}6DOF-2.webp`,
    ],
    links: {
      github: "",
      report: "",
      demo: ""
    }
  },

  {
    title: "Employee Onboarding Automation using UiPath",
    description:
      "Developed an RPA workflow using UiPath to automate employee onboarding tasks including form processing, email automation, and Excel-based record updates. Reduced manual onboarding time significantly through process automation.",
    technologies:
      "UiPath, Excel, Email Automation, Web Scraping",
    images: [
      `${import.meta.env.BASE_URL}uipath1.png`,
      `${import.meta.env.BASE_URL}uipath2.png`,
    ],
    links: {
      github: "",
      report: "",
      demo: ""
    }
  },

  {
    title: "Vision Model Fine-Tuning Using DPO",
    description:
      "Fine-tuned the Qwen vision-language model using Direct Preference Optimization (DPO) to improve alignment with human preference data. Worked on dataset curation, preference ranking, and training stability for multimodal LLM optimization.",
    technologies:
      "DPO, Qwen Model, LLaMA, Python, Deep Learning",
    images: [
      `${import.meta.env.BASE_URL}dpo1.png`,
      `${import.meta.env.BASE_URL}dpo2.png`,
    ],
    links: {
      github: "",
      report: "",
      demo: ""
    }
  },

  {
    title: "IMU-Based Athlete Speed Monitoring and Django Dashboard",
    description:
      "Built a real-time athlete performance monitoring system using IMU sensors and a Django dashboard. Captured motion data via Arduino, processed signals in Python, and visualized speed analytics through REST APIs and web interface.",
    technologies:
      "Arduino, Django, Python, REST APIs, HTML/CSS, Data Visualization",
    images: [
      `${import.meta.env.BASE_URL}django.jpg`,
      `${import.meta.env.BASE_URL}imu.jpeg`,
    ],
    links: {
      github: "",
      report: "",
      demo: ""
    }
  }
];
// ... rest of your Projects.jsx code remains the same


const formatTechnologies = (techString) => {
  return techString.split(',').map(tech => tech.trim()).join(' | ');
};

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
    transition: { type: 'tween', duration: 0.3 },
  }),
};

export default function Projects() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    const newPage = (page + newDirection + projects.length) % projects.length;
    setPage([newPage, newDirection]);
  };

  const currentProject = projects[page];
  const hasImages = currentProject.images && currentProject.images.length > 0;

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        🔬 Projects & Research
      </h2>

      {/* SLIDER */}
      <div className="relative w-full flex justify-center mb-12" style={{ minHeight: '650px' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute top-0 w-full h-full flex justify-center"
          >
            <div className="bg-glass p-8 rounded-2xl shadow-2xl flex flex-col justify-between w-full max-w-xl h-full border border-transparent relative text-center">
              
              <div>
                <p className="text-cyan-400 font-extrabold text-2xl mb-4">{currentProject.title}</p>
                <p className="text-gray-300 text-base leading-relaxed mb-6">{currentProject.description}</p>
              </div>
              
              {hasImages && (
                <div className={`mb-6 p-2 rounded-lg bg-black/30 mx-auto transition-all ${
                  currentProject.images.length > 1
                    ? 'grid grid-cols-2 gap-4 max-w-sm place-items-center'
                    : 'flex justify-center'
                }`}>
                  {currentProject.images.map((imageSrc, idx) => (
                    <img
                      key={idx}
                      src={imageSrc}
                      alt={`${currentProject.title} - Image ${idx + 1}`}
                      className="h-20 object-cover rounded-md shadow-md w-full border border-purple-500/30 transition-shadow hover:shadow-lg"
                    />
                  ))}
                </div>
              )}

              {!hasImages && (
                <div className="h-10 flex items-center justify-center mb-6 text-gray-500/50">
                  <p className="text-sm">No visuals available</p>
                </div>
              )}

              <div className="mt-auto pt-4 border-t border-purple-900/50"> 
                <p className="text-sm font-bold text-white mb-2">Technology used</p>
                <p className="text-sm font-semibold text-purple-400">{formatTechnologies(currentProject.technologies)}</p>
              </div>
              
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-center w-full"> 
        <div className="flex justify-between items-center w-full max-w-xs px-4 z-50"> 
          <button 
            className="text-4xl text-pink-500 hover:text-white transition-colors p-3 rounded-full bg-black/50 hover:bg-black/80"
            onClick={() => paginate(-1)} 
          >{'<'}</button>

          <div className="flex justify-center items-center space-x-3 p-2 rounded-full">
            {projects.map((_, index) => {
              const isActive = index === page;
              return (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors relative ${
                    isActive ? 'bg-transparent' : 'bg-gray-700 hover:bg-gray-500'
                  }`}
                  onClick={() => setPage([index, index > page ? 1 : -1])}
                >
                  {isActive && (
                    <motion.div
                      className="w-full h-full rounded-full bg-gradient-to-br from-pink-500 to-purple-600"
                      layoutId="projectIndicator" 
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <button 
            className="text-4xl text-pink-500 hover:text-white transition-colors p-3 rounded-full bg-black/50 hover:bg-black/80"
            onClick={() => paginate(1)} 
          >{'>'}</button>
        </div>
      </div>
    </motion.section>
  );
}
