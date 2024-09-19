

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // For custom CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-gradient">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
            className="logo-img"
            alt="Food App Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create-food" className="nav-link">
                Create Food
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
