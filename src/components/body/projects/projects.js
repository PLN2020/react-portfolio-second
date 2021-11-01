import React from 'react'
import { ProjectData } from '../../../data/project-data'
import "./projects.css"

function Projects({ project }) {

    const data = ProjectData;

    return (
        <div className="projects">
            <div className="container">
                <div className="row">
                    {data.map((project)=> {
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="image">
                                        <img src={project.image} alt=""/>
                                        <div className="details">
                                            <h2>{project.title}</h2>
                                            <p>{project.details}</p>
                                            <div className="card-footer">
                                                <div className="links">
                                                    <a href={project.github} className="source-code" target="_blank" rel="noreferrer">Source</a>
                                                    <span> / </span> 
                                                    <a href={project.url} className="website-url" target="_blank" rel="noreferrer">URL</a> 
                                                </div>
                                                
                                                <div className="icons">
                                                    {project.icons.map((icon) => {
                                                        return icon
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        )
                    })}
                </div>
            </div>         
        </div>
    )
}

export default Projects
