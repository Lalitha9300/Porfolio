import React from 'react';
import { motion } from 'framer-motion';
// import './Projects.css';

const Projects = () => {
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </motion.div>
  );
}

export default Projects;
