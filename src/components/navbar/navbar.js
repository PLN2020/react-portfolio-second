import React, { useState } from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="max-width">
                <div className="logo"><a href="#about">Portfolio.</a></div>
                <ul className="menu">
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
