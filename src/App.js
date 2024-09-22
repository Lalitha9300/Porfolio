import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <Router>
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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
