// Components differ from pages ; used across multiple pages.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    // const boolean to check if navbar button is clicked open or not.
    // onClick function sets boolean to opposite of previous state.
    const [expandNavbar, setExpandNavbar] = useState(false);
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button 
            onClick={() => {
                setExpandNavbar((prev) => !prev);
            }}
        > 
        <ReorderIcon / >
        </button> 
      </div>
      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/Projects"> Projects</Link>
      </div>
    </div>  
    // ?
  )
}
export default Navbar
