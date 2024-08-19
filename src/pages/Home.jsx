import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'
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
        <h2>Hello, I'm </h2>
        <h1>Lalitha B</h1>
        <h1 className='text'>
          <Typewriter options={{loop:true}} onInit={(typewriter)=>{
            typewriter
            .typeString("Full Stack Web Developer")
            .pauseFor(500)
            .deleteAll()
            .typeString("Frontend Developer")
            .pauseFor(500)
            .deleteAll()
            .start()
          }} />
          </h1>
        <p>Welcome to my professional portfolio website</p>
      </motion.div>
      
      
    </div>
  );
}

export default Home;
