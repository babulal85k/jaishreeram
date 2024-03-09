import React from "react";
import './NavBar.css';
import Navigation from "./Navigation";

const NavBar = () => {
    return (
        <>
            <div className="nav-container">
                <div className="home-container">
                    <div className="home"></div>
                    <p className="ram">𝔍𝔞𝔦⁣𓆩 ꢺ𝖍𝖗𝖊𝖊 ᭄🆁Ą🅼</p>
                    <div className="user">
                        <button className="login-btn">
                            <div className="img">
                                <svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.671 60.671" xml:space="preserve">
                                    <g>
                                        <g>
                                            <ellipse style={{ fill: '#010002' }} cx="30.336" cy="12.097" rx="11.997" ry="12.097" />
                                            <path style={{ fill: '#010002' }} d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
                C48.354,35.818,42.661,30.079,35.64,30.079z"/>
                                        </g>
                                    </g>
                                </svg>

                            </div>
                        </button>
                    </div>

                </div>
            </div>
            <Navigation />
        </>
    )
}

export default NavBar;