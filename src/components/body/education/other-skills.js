import React from 'react'
import "./other-skills.css"

function OtherSkills({item}) {
    return (
        <div className="otherskills-card">
            <div className="otherskills-info">
                <span className="otherskills-title">
                    {item.title}
                </span>

                <div className="otherskills-desc">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default OtherSkills
