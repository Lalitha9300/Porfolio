import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/About.css';
import Skills from './Skills';

const About = () => {
  return (
    <section>
      <motion.div
      className="about-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section>
      <h1>Know who <span>I'M</span></h1>
      <h2>Hi, I am <span>Lalitha B</span> from <span>Bengaluru, India.</span> <br />
        I am a passionate full-stack web developer with the required skills. I love building web applications that solve 
        real-world problems.
      </h2>
      </section>
      <Skills />
    </motion.div>
    </section>
    
  );
}

export default About;
