import React from 'react'
import { SkillsData } from '../../../data/skills-data'
import "./skills.css"

function Skills() {

    const data = SkillsData;

    return (
        <div className="skills">
            <div className="skills-container">
                
                {data.map((item) => {
                    return (
                        <div className="skills-card">
                            <div className="icon-wrapper section">
                                <span className="icon">{item.icon}</span>
                                <span className="title">{item.type}</span>
                            </div>

                            <div className="list-wrapper section">
                                {item.list.map((skill) => {
                                    return (
                                        <ul className="skills-list">
                                            <li className="skill-item">
                                                <span className="skill-icon">{skill.icon}</span>
                                                <span className="skill-name">{skill.name}</span>
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div> 
                    )
                })}

            </div> 
        </div>
    )
}

export default Skills
