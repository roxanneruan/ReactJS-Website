// Components differ from pages ; used across multiple pages.
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    // const boolean to check if navbar button is clicked open or not.
    // onClick function sets boolean to opposite of previous state.
    const [expandNavbar, setExpandNavbar] = useState(false);

    // from useLocation hook from react dom
    const location = useLocation();

    // this function runs if the location variable changes (if the user)
    // clicks on a different page in the navbar, which automatically closes navbar.
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

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
  )
}
export default Navbar
