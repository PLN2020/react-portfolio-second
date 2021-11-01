import React from 'react'

function OtherSkills({item}) {
    return (
        <div className="otherskills-card">
            <div className="otherskills-info">
                <div className="otherskills-title">
                    {item.title}
                </div>

                <div className="otherskills-desc">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default OtherSkills
