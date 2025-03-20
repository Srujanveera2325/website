// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import EventsPage from './pages/EventsPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './styles/main.scss';
import GetInvolvedPage from './pages/GetInvolvedPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import LegalPage from './pages/LegalPage';
import DonationSuccess from './pages/DonationSuccess'; // Import

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/donation-success" element={<DonationSuccess />} /> {/* Add new route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;