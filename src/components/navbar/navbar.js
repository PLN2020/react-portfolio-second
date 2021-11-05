import React, { useState } from 'react'
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
                <div className="logo"><a href="#about">Portfolio.</a></div>
                <ul className="menu">
                    {/* <li><a href="#">About</a></li> */}
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
