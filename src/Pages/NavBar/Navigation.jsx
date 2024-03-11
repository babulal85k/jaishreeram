import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const Navigation = () => {
    return (
        <>
           <div className="navigation">
                <Link to='/' className="nav-button">Home</Link>
                <Link to='/contact' className="nav-button">Contact</Link>
                <Link to='/about' className="nav-button">About</Link>
            </div>
        </>
    )
}

export default Navigation;