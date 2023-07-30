// Components differ from pages ; used across multiple pages.
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button> </button> 
      </div>
      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/Projects"> Projects</Link>
      </div>
    </div>  
  )
}

export default Navbar
