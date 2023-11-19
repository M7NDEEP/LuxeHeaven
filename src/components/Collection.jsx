import React from 'react'
import "../Stylesheets/Collection.css"
import "../Stylesheets/cursor.css"

const Collection = () => {
    let cursor1 = document.querySelector(".cursor1")
    let cursor2 = document.querySelector(".cursor2")
    document.addEventListener("mousemove", (e) => {
        cursor1.style.cssText = cursor2.style.cssText = "left :" + e.clientX + "px; top: " + e.clientY + "px";
    })
    return (
        <div><section id="collection">
            <div class="cursor1"></div>
            <div class="cursor2"></div>
            <div class="collections container">
                <div class="content">
                    <img src="https://img.freepik.com/free-photo/graphic-tshirt-trendy-design-mockup_460848-12969.jpg?w=360&t=st=1700307118~exp=1700307718~hmac=c34f052e775651313ac4768e7f6a1f234fa85df2ce5917926f51cd2a20ed80b0" alt="img" />
                    <div class="img-content">
                        <p>Outfit Collections</p>
                        <button><a href="#sellers">SHOP NOW</a></button>
                    </div>
                </div>
                <div class="content2">
                    <img src="https://img.freepik.com/premium-photo/pair-white-shoes-with-brown-laces_435599-600.jpg?w=360" alt="img" />
                    <div class="img-content2">
                        <p>Footgear Bloom</p>
                        <button><a href="#sellers">SHOP NOW</a></button>
                    </div>
                </div>
                <div class="content3">
                    <img src="https://img.freepik.com/free-photo/rose-flowers-with-leaves-arrangement-with-glasses-high-view_23-2148408284.jpg?w=360&t=st=1700307755~exp=1700308355~hmac=4deb1df06a4ddbe0db5531381b60a76d272a1cb9f8a7c8224b3c1f3f53a90fe3" alt="img" />
                    <div class="img-content3">
                        <p>Accessories</p>
                        <button><a href="#sellers">SHOP NOW</a></button>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default Collection