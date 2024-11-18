import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Skill set
const skills = ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS', 'Java', 'GitHub', 'Bootstrap'];

const Skills = () => {
  // Set up state to track whether the section is in view or not
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null); // Reference for the section to observe

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Set inView to true when the section is in view
      },
      { threshold: 0.25 } // Trigger when 25% of the element is visible
    );

    // Observe the section element
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer when component unmounts or ref changes
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <h1>Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 50 }}  // Initially hidden and slightly translated
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}  // Animate when in view
            transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }} // Delay each skill's animation for staggered effect
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
