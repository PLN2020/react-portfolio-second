import React from 'react'
import "./education-card.css"

function EducationCard({item}) {
    return (
        <div className="education-card">
            <div className="education-info">
                
                <div className="education-school-year">
                    <span className="school-name">{item.school}</span>
                    <span> / </span>
                    <span className="year">{item.dateEnd}</span>
                </div>

                <div className="education-desc">
                    <p>{item.description}</p>
                </div>

            </div>
        </div>
    )
}

export default EducationCard
