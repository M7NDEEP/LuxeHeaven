import React from 'react'
import "../Stylesheets/Model.css"
import modelimg from "../assets/model1.jpeg"

const Model = () => {
    return (
        <div>
        <br /><br /><br /><br />
            <section>
                <div class="model container">
                    <div class="best-seller">
                        <div className="model">
                            <img src={modelimg} alt="" />
                        </div>
                        <div>
                            <h3>Elevate <br /> Your <span style={{WebkitTextStroke:"1.5px black",color:"transparent"}}>Style ,</span> <br /> Elevate <span style={{WebkitTextStroke:"1.5px black",color:"transparent"}}> Your Life ..</span></h3>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br />
        </div>
    )
}

export default Model