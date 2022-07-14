// Default imports
import React from "react";

// Custom imports
import "./error.css";
import { FaRegSadCry } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="contentCenter">
      <FaRegSadCry size={80} />
      <br />
      <br />
      Oops. Something went wrong...
      <br />
      <br />
      <NavLink to="/" className="btn btn-block blue">
        Please head back.
      </NavLink>
    </div>
  );
};

// Default Export
export default Error;
