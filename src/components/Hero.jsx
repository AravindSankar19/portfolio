import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const balancedStyle = { 
    width: '350px', 
    height: '350px', 
    minWidth: '350px', 
    minHeight: '350px',
  };

  const gradients = {
    neon: 'linear-gradient(90deg, #FF00FF, #8A2BE2, #00FFFF)',
  };
  const currentGradient = gradients.neon;

  const taglineItems = [
    'Robotics Engineer ',
    ' AI & Computer Vision Enthusiast ',
    ' Embedded Systems Engineer'
  ];

  const headingRef = useRef(null);
  const [headingWidth, setHeadingWidth] = useState(0);

  // Measure heading width
  useEffect(() => {
    if (headingRef.current) {
      setHeadingWidth(headingRef.current.offsetWidth);
    }
  }, []);

  return (
    <motion.section
      id="hero"
      className="flex flex-col items-center justify-center h-screen text-center px-6 z-10 bg-gray-900" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Picture */}
      <motion.div
        className="relative mb-4 flex items-center justify-center w-96 h-96" 
        style={balancedStyle}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <img
          src="me.jpg"
          alt="Aravind Sankar"
          style={balancedStyle}
          className="rounded-full border-4 border-pink-500 shadow-2xl object-cover" 
        />
      </motion.div>
      
      {/* Heading container for line */}
      <div className="flex flex-col items-center mb-6">
        {/* Animated Gradient "I'm Aravind Sankar" */}
        <motion.p
          ref={headingRef}
          style={{
            fontSize: '5rem',
            fontWeight: '900',
            background: currentGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
          }}
          animate={{
            opacity: [0.85, 1, 0.85],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          I'm Aravind Sankar
        </motion.p>

        {/* Line matching heading width */}
        <motion.div
          style={{
            width: headingWidth || '200px', // fallback width if not measured yet
            height: '4px',
            borderRadius: '9999px',
            background: 'linear-gradient(90deg, #FF00FF, #8A2BE2, #00FFFF)',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          transformOrigin="left"
        />
      </div>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 -mb-2">
        Aravind Sankar
      </h1>

      {/* Tagline inline with | */}
      <motion.p
        className="text-gray-200 font-extrabold"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ fontSize: '1.8rem' }}
      >
        {taglineItems.map((item, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.5, duration: 0.6, type: 'spring', stiffness: 150 }}
          >
            {item}
            {index < taglineItems.length - 1 && <span className="mx-3">|</span>}
          </motion.span>
        ))}
      </motion.p>
    </motion.section>
  );
}
