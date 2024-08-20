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
      <section>
      <h1>Know who <span>I'M</span></h1>
      <h2>Hi Everyone, I am <span>Lalitha B</span> from <span>Bengaluru, India.</span> <br />
        I am a passionate full-stack web developer with skills in React, Node.js, 
        Express JS, MongoDB, and more. I love building web applications that solve 
        real-world problems.
      </h2>
      </section>
    </motion.div>
  );
}

export default About;
