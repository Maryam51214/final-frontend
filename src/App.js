// import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn';

import Food from './pages/Food';
import Home from './pages/Home';
import FoodDetail from './pages/FoodDetail';
import About from './pages/About';       // Import the About page
import Policy from './pages/Policy';     // Import the Policy page
import Contact from './pages/Contact';   // Import the Contact page
import SignIn from './components/SignIn'; // Adjust path if necessary

function App() {
  return (
    <>
      <Navbar />

      {/* Define the routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-food" element={<Food />} />
        <Route path="/food-detail/:id" element={<FoodDetail />} />
        <Route path="/about" element={<About />} />        {/* About page route */}
        <Route path="/policy" element={<Policy />} />      {/* Policy page route */}
        <Route path="/contact" element={<Contact />} />    {/* Contact page route */}
        // Example route in App.js or similar
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>

      {/* Footer will appear at the bottom of all pages */}
      <Footer />
    </>
  );
}

export default App;
