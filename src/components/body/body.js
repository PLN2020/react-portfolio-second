import React from 'react'
import About from './about/about'
import './body.css'

function Body() {
    return (
        <div className="body">
            <section id="about"><About /></section>
            <section id="skills"></section>
            <section id="projects"></section>
            <section id="education"></section>
            <section id="contact"></section>
        </div>
    )
}

export default Body
