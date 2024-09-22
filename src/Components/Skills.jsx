import React from 'react';
import { motion } from 'framer-motion';

const skills = ['HTML5','CSS3','JavaScript', 'ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS','Java','GitHub','Bootstrap'];

const Skills = () => {
  return (
    <section className="skills-section">
      <h1>Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
