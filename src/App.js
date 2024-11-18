import React from 'react';
import { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Define the scroll event listener inside useEffect
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const windowHeight = window.innerHeight; // Get the window height

      sections.forEach(section => {
        if (section.getBoundingClientRect().top < windowHeight * 0.75) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    // Add event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    
    // <Router>
    <div className="App">
      <div className="stars-container">
        {/* Generate 100 stars */}
        {[...Array(100)].map((_, i) => (
          <div 
            key={i} 
            className="star" 
            style={{
              animationDuration: `${Math.random() * 10 + 5}s`, /* Randomize speed between 5s and 15s */
              top: `${Math.random() * 100}vh`, /* Random starting position vertically */
              left: `${Math.random() * 100}vw`, /* Random starting position horizontally */
              width: `${Math.random() * 3+ 1}px`, /* Random star width between 1px and 3px */
              height: `${Math.random() * 3 + 1}px` /* Random star height between 1px and 3px */
            }} 
          ></div>
        ))}
      </div>
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
  </div>
    // {/* </Router> */}
  );
}

export default App;
