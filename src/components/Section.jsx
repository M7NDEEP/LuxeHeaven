import React from 'react'
import "../Stylesheets/Section.css"
import file from "../assets/file.mp4"
import "../Stylesheets/cursor.css"


const Section = () => {

    React.useEffect(() => {
      const video = document.getElementById('myVideo');
      video.play();
      video.style.pla
    }, []); 
      

    return (
      <>
        <section id="home" className='section-container'>
          <div className="home_page">
            <div className="home_img">
              <video id="myVideo" loop muted playsInline>
                <source src={file} type="video/mp4" />
              </video>
            </div>
            
            <div class="home_txt ">
                <p class="collectio ">Introducing the Latest Styles</p>
                <h2>Discover the 2023 <br/><div id='fallwinter' style={{ fontSize:"3.2rem",color:"transparent"}}>Fall-Winter</div> Collection</h2>
                <div class="home_label ">
                    <p>A dedicated brand curating premium essentials. <br/> Crafted with a strong commitment to ethical practices and an uncompromising focus on superior quality.</p>
                </div>
                <button id='btn' style={{border:"1px solid white",color:"white"}}><a href="#sellers">SHOP NOW</a><i class='bx bx-right-arrow-alt'></i></button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section