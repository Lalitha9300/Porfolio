import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hello, I'm a Full Stack Web Developer</h1>
        <p>Welcome to my professional portfolio website</p>
      </motion.div>
    </div>
  );
}

export default Home;
