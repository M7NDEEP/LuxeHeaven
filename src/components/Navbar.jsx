import React from 'react'
import "../Stylesheets/Navbar.css"
import icon from "../assets/icon.png"

const Navbar = () => {
    return (
        <>
    <section class=" top-txt ">
    <div class="head container ">
        <div class="head-txt ">
            <p>Benefit from free shipping and our 30-day return or refund assurance.</p>
        </div>
        <div class="sing_in_up ">
            <a href="# ">SIGN IN</a>
            <a href="# ">SIGN UP</a>
        </div>
    </div>
</section>
<nav class="navbar">
    <div class="navbar-container">
        <input type="checkbox" name="" id="checkbox"></input>
        <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <ul class="menu-items">
            <li><a href="#home">Home</a></li>
            <li><a href="#sellers">Shop</a></li>
            <li><a href="">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="logo" style={{fontSize:"2rem"}}>
            Luxe <span><img style={{color:"white",width:"30px",height:"25px"}} src={icon} alt=""></img></span> Heaven
        </div>
    </div>
</nav>
</>
    )
}

export default Navbar