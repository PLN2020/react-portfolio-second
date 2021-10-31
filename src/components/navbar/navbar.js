import React, { useState, useEffect } from 'react'
import './navbar.css'

function Navbar() {
    const [navbar,setNavbar] = useState(false);

    const changeBackground = () => {
        // console.log(window.scrollY);
        if(window.scrollY >= 200) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div className="max-width">
                <div className="logo"><a href="#">Port<span>folio.</span></a></div>
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
