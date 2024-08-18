import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/About.css';

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
        I am a passionate full-stack developer with skills in React, Node.js, 
        Express, MongoDB, and more. I love building web applications that solve 
        real-world problems.
      </p>
    </motion.div>
  );
}

export default About;
