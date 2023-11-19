import React from 'react'
import "../Stylesheets/Contact.css"

const Contact = () => {
  return (
    <div>
    <hr />
    <section id='contact'>
    <div class="contact container">
        <form action="https://formspree.io/f/xzbowpjq" method="POST">
            <div class="form">
                <div class="form-txt">
                    <h4>INFORMATION</h4>
                    <h1>Contact Us</h1>
                    <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                        attention.</span>
                    <h4>India</h4>
                    <p>HW95+C9C, Lorem ipsum dolor sit.<br/>411014</p>
                </div>
                <div class="form-details">
                    <input type="text" name="name" id="name" placeholder="Name" required/>
                    <input type="email" name="email" id="email" placeholder="Email" required/>
                    <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
                    <button>SEND MESSAGE</button>
                </div>
            </div>
        </form>
        </div>
        </section>
    </div>
  )
}

export default Contact