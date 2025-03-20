import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import Testimonials from '../components/Home/Testimonials';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="container">
      <HeroSection />

      <motion.section
        className="welcome-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
          <h1>Welcome to Nisarga Charitable Trust</h1>
          <p>
            We are dedicated to making a positive impact in the world. Learn
            more about our mission and how you can get involved.
          </p>
      </motion.section>
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3, duration: 0.5}}>
        <FeaturedProjects />
      </motion.div>
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.4, duration: 0.5}}>
        <Testimonials />
      </motion.div>
    </div>
  );
}

export default Home;