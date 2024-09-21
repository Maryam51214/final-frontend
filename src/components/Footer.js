import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wave"></div> {/* Add wave div */}
      <div className="container text-center">
        <div className="d-flex justify-content-center">
          <Link to="/about" className="footer-link mx-3">About</Link>
          <Link to="/contact" className="footer-link mx-3">Contact</Link>
          <Link to="/policy" className="footer-link mx-3">Policy</Link>
        </div>
        <p className="mt-3 mb-0">&copy; 2024 FlavorFusion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



// import React from 'react';
// import './Footer.css'; // Assuming you will add the custom CSS here

// const Footer = () => {
//   return (
//     <footer className="footer bg-light py-4">
//       <div className="container text-center">
//         <div className="d-flex justify-content-center">
//           <a href="/about" className="footer-link mx-3">About</a>
//           <a href="/contact" className="footer-link mx-3">Contact</a>
//           <a href="/policy" className="footer-link mx-3">Policy</a>
//         </div>
//         <p className="mt-3 mb-0">&copy; 2024 FlavorFusion. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from "react";

// import { Link } from "react-router-dom";
// import './Footer.css'; 



// const Footer = () => {
//   return (
//     <div className="footer">
//       <h1 className="text-center">All Right Reserved &copy; SylaniTrust</h1>
//       <p className="text-center mt-3">
//         <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
//         <Link to="/policy">Privacy Policy</Link>
//       </p>
//     </div>
//   );
// };

// export default Footer;
