import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <p style={{marginBottom:"3px"}}>© 2021 Mbami Luka | Last Updated June 2024.</p>
    </div>
  );
};

export default Footer;