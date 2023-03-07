import React from "react";
import Better from './images/img8.png'




export default function MyBetter() {
    return(

        <>
        
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
                        <img src={Better} className="img-fluid mt-5" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
                        <p className="dolor mt-5">Lorem ipsum dolor</p>
                        <h1 className="oneBetter">Two Saas are better <br /> than one.</h1>
                        <p className="fundamental">One of the most fundamental ways to go about that is to <br /> create a memorable e-commerce slogan.</p>
                        <p className="alll">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt.</p>
                        <p className="alll">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt.</p>
                        <p className="alll">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </div>

        </>

    )
}