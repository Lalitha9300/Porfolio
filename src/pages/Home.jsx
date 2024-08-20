import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'
import '../CSS/Home.css';
import women from '../assets/women.png'
// vecteezy attribution for women png ----------------------------------------

const Home = () => {
  return (
    <div className="home-container">
      <motion.div
      className="image"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      >
      <img src={women} alt="" /> 
      </motion.div>
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Hello,</h2>
        <h1><span> I'm </span>LALITHA B</h1>
        <h1 className='text'>
          <Typewriter options={{loop:true}} onInit={(typewriter)=>{
            typewriter
            .typeString("MERN Stack Developer")
            .pauseFor(500)
            .deleteAll()
            .typeString("Frontend Developer")
            .pauseFor(500)
            .deleteAll()
            .typeString("Full Stack Web Developer")
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
