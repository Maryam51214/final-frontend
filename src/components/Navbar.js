import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom CSS for hover and toggle effects

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode); // Add a class to body for dark mode
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://png.pngtree.com/templates/20180809/restaurant-logos-png-png_25706.jpg"
            className="logo-img"
            alt="Food App Logo"
          />
          <span className="navbar-text ms-2">FlavorFusion</span>
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create-food" className="nav-link">
                Create Food
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/sign-in" className="dropdown-item">Sign In</Link>
                  

                </li>
                <li>
                  <Link to="/sign-out" className="dropdown-item">Sign Out</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-secondary toggle-btn ms-2"
                onClick={toggleDarkMode}
              >
                <span className={`slider ${darkMode ? 'dark' : 'light'}`}></span>
                {darkMode ? 'Day Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Assuming you will add custom CSS here

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link to="/" className="navbar-brand d-flex align-items-center">
//           <img
//             src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
//             className="logo-img"
//             alt="Food App Logo"
//           />
//           <span className="navbar-text ms-2">Food App</span>
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link to="/" className="nav-link active" aria-current="page">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/create-food" className="nav-link">
//                 Create Food
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
