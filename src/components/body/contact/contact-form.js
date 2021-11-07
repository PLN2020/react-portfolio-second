import React from 'react'
import "./contact-form.css"

function ContactForm() {
    return (
        <div className="contact-form">
            <form className="form">
            {/* <h1>Contact</h1> */}

            <label>Name</label>
            <input placeholder="Name" />

            <label>Email</label>
            <input placeholder="Email" />

            <label>Message</label>
            <textarea placeholder="Message"></textarea>

            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default ContactForm
