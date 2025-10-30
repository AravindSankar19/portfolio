import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Your existing project data
const projects = [
  {
    title: "Autonomous Nuclear Leakage Detection and Repair Robot",
    description: `This project focuses on developing a TurtleBot manipulator capable of autonomously navigating large nuclear chambers to detect and repair fire or spark leakages...`,
    technologies: "ROS, Gazebo, MoveIt, RViz, RTAB-Map, SLAM, OpenCV, Python, Reinforcement Learning, CNN",
    images: ["/nuclear1.png", "/nuclear2.png"]
  },
  {
    title: "Autonomous Facade-Painting Robot",
    description: `This project involves the development of a robotic system designed for automated wall painting. The system leverages ROS for controlling robot movement...`,
    technologies: "ROS, RTAB-Map, Navigation Stack, Embedded Systems, Python, OpenCV",
    images: ["/vivid1.png", "/vivid2.png"]
  },
  {
    title: "Space Rover for Planetary Exploration",
    description: `Developed as part of the Technocrats Robotics team, this rover project was designed for exploration and task execution in planetary terrains...`,
    technologies: "ROS, SLAM, OpenCV, PyQt, RTSP, Python",
    images: ["/technocrats1.png", "/technocrats2.jpg"]
  },
  {
    title: "6-DOF Robotic Arm with Soft Gripper",
    description: `A 6-degree-of-freedom robotic arm was designed and optimized to enhance load-lifting capacity despite motor torque constraints...`,
    technologies: "ROS, MoveIt, Python, CAD Design, Embedded Systems",
    images: ["/6DOF.webp", "/6DOF-2.webp"] 
  },
  {
    title: "Employee Onboarding Automation using UiPath",
    description: `An automation workflow was created to streamline the teacher onboarding process for schools...`,
    technologies: "UiPath, Excel, Email Automation, Web Scraping",
    images: ["/uipath1.png", "/uipath2.png"]
  },
  {
    title: "Vision Model Fine-Tuning Using DPO",
    description: `This project focuses on fine-tuning the Qwen vision-language model using Direct Preference Optimization (DPO)...`,
    technologies: "DPO, Qwen Model, LLaMA, Python, Deep Learning",
    images: ["/dpo1.png", "/dpo2.png"] 
  },
  {
    title: "IMU-Based Athlete Speed Monitoring and Django Dashboard",
    description: `A system developed to measure and analyze the running speed of athletes using an Inertial Measurement Unit (IMU)...`,
    technologies: "Arduino, Django, Python, REST APIs, HTML/CSS, Data Visualization",
    // ✅ ADDED /imu.jpeg here alongside /django.jpg
    images: ["/django.jpg", "/imu.jpeg"]
  }
];

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

// Main Component
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
        🔬 **Projects & Research**
      </h2>

      {/* 1. SLIDER CONTAINER */}
      <div 
        className="relative w-full flex justify-center mb-12" 
        style={{ minHeight: '650px' }}
      >
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
            {/* The single project card */}
            <div
              className="bg-glass p-8 rounded-2xl shadow-2xl flex flex-col justify-between 
                         w-full max-w-xl h-full border border-transparent relative text-center"
            >
              
              <div> {/* Container for Title and Description */}
                <p className="text-cyan-400 font-extrabold text-2xl mb-4">
                  {currentProject.title}
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {currentProject.description}
                </p>
              </div>
              
              {/* 🖼️ --- FIX: ENFORCING GAP --- 🖼️ */}
              {hasImages && (
                <div 
                  className={`mb-6 p-2 rounded-lg bg-black/30 mx-auto transition-all ${
                    currentProject.images.length > 1 
                      ? 'grid grid-cols-2 gap-4 max-w-sm place-items-center' // Added place-items-center for robust centering
                      : 'flex justify-center' // Removed max-w-xs here to let flex-center work reliably
                  }`}
                >
                  {currentProject.images.map((imageSrc, idx) => (
                    <img
                      key={idx}
                      src={imageSrc}
                      alt={`${currentProject.title} - Image ${idx + 1}`}
                      // The image takes w-full of its grid cell, allowing the gap to appear clearly
                      className={`h-20 object-cover rounded-md shadow-md w-full border border-purple-500/30 transition-shadow hover:shadow-lg`} 
                    />
                  ))}
                </div>
              )}
              
              {/* Fallback space for projects without images */}
              {!hasImages && (
                <div className="h-10 flex items-center justify-center mb-6 text-gray-500/50">
                   <p className="text-sm">No visuals available</p>
                </div>
              )}

              {/* --- TECHNOLOGY INFO --- */}
              <div className="mt-auto pt-4 border-t border-purple-900/50"> 
                <p className="text-sm font-bold text-white mb-2">
                    Technology used
                </p>
                <p className="text-sm font-semibold text-purple-400">
                  {formatTechnologies(currentProject.technologies)}
                </p>
              </div>
              
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. DEDICATED NAVIGATION FOOTER: With Visible Rolling Ball */}
      <div className="flex justify-center w-full"> 
          <div className="flex justify-between items-center w-full max-w-xs px-4 z-50"> 
              
              {/* PREVIOUS Button (Left) */}
              <button 
                  className="text-4xl text-pink-500 hover:text-white transition-colors p-3 rounded-full bg-black/50 hover:bg-black/80"
                  onClick={() => paginate(-1)} 
              >
                  {'<'}
              </button>

              {/* Indicator Dots Container */}
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
                            {/* ROLLING BALL INDICATOR (motion.div with layoutId) */}
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

              {/* NEXT Button (Right) */}
              <button 
                  className="text-4xl text-pink-500 hover:text-white transition-colors p-3 rounded-full bg-black/50 hover:bg-black/80"
                  onClick={() => paginate(1)} 
              >
                  {'>'}
              </button>
          </div>
      </div>
      
    </motion.section>
  );
}