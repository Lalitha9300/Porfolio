import React, { useRef, useEffect } from 'react';
import '../CSS/Tilt.css'; // Add your styles here

const Tilt = ({ children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const tiltElement = tiltRef.current;
      const rect = tiltElement.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const rotateX = ((mouseY / rect.height) - 0.5) * 20;
      const rotateY = ((mouseX / rect.width) - 0.5) * -20;

      tiltElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      tiltRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    const tiltElement = tiltRef.current;
    tiltElement.addEventListener('mousemove', handleMouseMove);
    tiltElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tiltElement.removeEventListener('mousemove', handleMouseMove);
      tiltElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="tilt" ref={tiltRef}>
      {children}
    </div>
  );
};

export default Tilt;
