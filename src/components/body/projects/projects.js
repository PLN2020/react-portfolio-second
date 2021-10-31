import React from 'react'
import "./projects.css"

function Projects() {
    return (
        <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="image">
                        <img src="https://res.cloudinary.com/ditoikfqn/image/upload/v1635653538/my-react-portfolio/portfolio-website.png" alt=""/>
                        <div className="details">
                            <h2>Card <span>Title</span></h2>
                            <p>Paragraph Text, Using the Hello World guide, you’ll create a repository, start a branch, write comments, and open a pull request.</p>
                            <div className="card-footer">
                                <a href="" className="source-code">Source <span>Code</span></a> 
                                <div className="icons">
                                    <i class="devicon-react-original-wordmark colored"></i>
                                    <i class="devicon-html5-plain-wordmark colored"></i>
                                    <i class="devicon-css3-plain-wordmark colored"></i>
                                    <i class="devicon-javascript-plain colored"></i>
                                    <i class="devicon-firebase-plain-wordmark colored"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Projects
