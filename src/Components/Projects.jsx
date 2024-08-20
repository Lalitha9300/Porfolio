import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/Projects.css';
import Tilt from './Tilt';
import weather from '../assets/favicon.png'

const Projects = () => {
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <main>
      <h1>My <span>Works</span></h1>
      <p>Here are a few Projects I've worked on recently</p>
      <div className="project-grid">
        <Tilt>
        <article className="project-card">
          <div className='image'><img src={weather} alt="" /></div>
          <h3>LIVE WEATHER</h3>
          <div className='details'>
            <p>A web app providing live weather updates by city, featuring real-time humidity, temperature, and wind data. Includes dynamic weather icons and background videos for an immersive visual experience.</p>
          </div>
          <div className='buttons'>
            <button onClick={()=>window.open('https://lalitha9300.github.io/Live-Weather/','_blank','noopener')}>Demo</button>
            <button onClick={()=>window.open('https://github.com/Lalitha9300/Live-Weather','_blank','noopener')}>GitHub</button></div>
        </article>
        </Tilt>
        <Tilt>
        <article className="project-card">
          <div className='image'></div>
          <h3>Project 2</h3>
          <div className='details'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ratione labore error explicabo id sed non assumenda nam. Fugit, quaerat.</p>
          </div>
          <div className='buttons'><button>Demo</button><button>GitHub</button></div>
        </article>
        </Tilt>
        <Tilt>
        <article className="project-card">
          <div className='image'></div>
          <h3>Project 3</h3>
          <div className='details'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nemo?</p>
          </div>
          <div className='buttons'><button>Demo</button><button>GitHub</button></div>
        </article>
        </Tilt>
      </div>
      </main>
    </motion.div>
  );
}

export default Projects;
