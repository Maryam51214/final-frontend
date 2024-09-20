import React from 'react';
import './ScrollToTopButton.css'; // Assuming you'll create custom CSS

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-primary scroll-to-top-btn"
      style={{ zIndex: 1000 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bi bi-arrow-up"
        fill="currentColor"
        viewBox="0 0 16 16"
        width="24"
        height="24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M8 12a.5.5 0 0 0 .5-.5v-7.793l3.646 3.647a.5.5 0 0 0 .708-.708l-4.5-4.5a.5.5 0 0 0-.708 0l-4.5 4.5a.5.5 0 1 0 .708.708L7.5 3.707V11.5A.5.5 0 0 0 8 12z"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
