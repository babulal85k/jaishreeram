import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <button>
                    <p>Home</p>
                </button>
                <button>
                    <p>About</p>
                </button>
                <button>
                    <p>Contact</p>
                </button>
            </div>
        </>
    )
}

export default Navigation;