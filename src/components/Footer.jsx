import React from 'react'
import "../Stylesheets/Footer.css"
import icon from "../assets/icon.png"

const Footer = () => {
    return (
        <div>
            <hr />
            <footer>
                <div class="footer-container container">
                    <div class="content_1">
                        <div style={{ fontSize: "2rem", color: "white" }}>
                            Luxe <span><img style={{ color: "white", width: "30px", filter: "invert()" }} src={icon} alt=""></img></span> Heaven
                        </div>
                        <p>Our Unconventional Business Model Puts the <br /> Customer Front and Center, with <br />Design as a Key Element.</p>
                        <div className="icon">
                        <a href="https://www.instagram.com/themandeepyadav/"><i class="fa-brands fa-instagram fa-2xl"></i></a>
                        <a href="https://www.linkedin.com/in/mandeep-yadav-58227925b/"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                        <a href="https://github.com/M7NDEEP"><i class="fa-brands fa-github fa-2xl"></i></a>
                        </div>

                    </div>
                    <div class="content_2">
                        <h4>SHOPPING</h4>
                        <a href="">Clothing Store</a>
                        <a href="">Trending Items</a>
                        <a href="">Accessories</a>
                    </div>
                    <div class="content_3">
                        <h4>DISCOVERING</h4>
                        <a href="./contact.html">Contact Us</a>
                        <a href="">Payment Method</a>
                        <a href="">Delivery</a>
                        <a href="">Return and Exchange</a>
                    </div>
                    <div class="content_4">
                        <h4>NEWLETTER</h4>
                        <p>Be among the first to discover our latest arrivals,<br /> look books, sales, and promos!</p>
                        <div class="f-mail">
                            <input type="email" placeholder="Your Email" />
                            <i class='bx bx-envelope'></i>
                        </div>
                        <hr />
                    </div>
                </div>
                <div class="f-design">
                    <div class="f-design-txt container">
                        <p>Designed with Care by Mandeep</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer