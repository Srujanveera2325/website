import React from 'react';
import TermsAndConditions from '../components/Legal/TermsAndConditions';
import PrivacyPolicy from '../components/Legal/PrivacyPolicy';
import Disclaimer from '../components/Legal/Disclaimer';
import { motion } from 'framer-motion';

function LegalPage() {
  return (
    <div className="container">
      <motion.h1 //Added motion tag
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Legal Information
      </motion.h1>
      <p>This section outlines the legal policies and commitments of Nisarga Charitable Trust, ensuring transparency and compliance with applicable laws.</p>

      <motion.section
        className="legal-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }} // Staggered animation
      >
        <TermsAndConditions />
      </motion.section>

      <motion.section
        className="legal-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }} // Staggered animation
      >
        <PrivacyPolicy />
      </motion.section>

      <motion.section
        className="legal-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }} // Staggered animation
      >
        <Disclaimer />
      </motion.section>
    </div>
  );
}

export default LegalPage;