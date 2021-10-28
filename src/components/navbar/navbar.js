import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-width">
                <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
                <ul className="menu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
