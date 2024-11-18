import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../CSS/About.css';
import Skills from './Skills';

const About = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Set state to true when in view
      },
      { threshold: 0.25 } // Trigger when 25% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer on component unmount
      }
    };
  }, []);

  return (
    <section ref={sectionRef} style={{ height: '100vh' }}>
      <motion.div
      className="about-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
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
