import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/Contact.css';

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section>
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out!</p>
      <form>
        <input type="text" placeholder="Enter Your Name" required />
        <input type="email" placeholder="Enter Your Email Address" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      </section>
    </motion.div>
  );
}

export default Contact;
