import React from 'react'
import { EducationData } from '../../../data/education-data'
import { OtherSkillsData } from '../../../data/other-skills-data';
import EducationCard from './education-card';
import "./education.css"

function Education() {

    const educationData = EducationData;
    // const otherskillsData = OtherSkillsData;

    return (
        <div className="education">
            This is the Education section
            <div className="education-container">
                <h3>History</h3>
                <div className="education-list">
                    {educationData.map((item) => {
                        return <EducationCard item = {item} />
                    })}
                </div>
            </div>

            <div className="otherskills-container">
                <h3>Other Skills</h3>
            </div>
        </div>
    )
}

export default Education
