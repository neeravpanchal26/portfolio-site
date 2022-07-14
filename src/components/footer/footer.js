// Default imports
import React from "react";

// Custom imports
import { FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";

const Footer = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <a href="#top" className="btn-floating btn-large hoverable">
          <i className="large material-icons">arrow_upward</i>
        </a>
      </div>
      <footer className="container">
        <div className="center">
          <div className="divider"></div>
          Powered by <FaReact /> and <DiDjango />.
        </div>
      </footer>
    </div>
  );
};

//Default export
export default Footer;
