import React from 'react'
import "./contact.css"

function Contact() {
    return (
        <form className="form">
            {/* <h1>Contact</h1> */}

            <label>Name</label>
            <input placeholder="Name" />

            <label>Email</label>
            <input placeholder="Email" />

            <label>Message</label>
            <textarea placeholder="Message"></textarea>
            
        </form>
    )
}

export default Contact
