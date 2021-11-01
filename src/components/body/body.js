import React from 'react'
import About from './about/about'
import './body.css'
import Projects from './projects/projects'
import Skills from './skills/skills'

function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <h1>Skills</h1>
                <Skills />
            </section>
            <section id="projects">
                <h1>Projects</h1>
                <Projects />
            </section>
            <section id="education">
                <h1>Education</h1>
            </section>
            <section id="contact">
                <h1>Contact</h1>
            </section>
        </div> 
    )
}

export default Body
