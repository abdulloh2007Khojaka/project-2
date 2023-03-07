import React from "react";
import Compyuter from './images/img2.jpg'




export default function MyAlways() {
    return(
        <>
            <div className="blg-con">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <p className="dolor">Lorem ipsum dolor</p>
                            <h1 className="saas">Always the real <br /> thing, always Saas</h1>
                            <p>salom</p>
                            <p className="growing">And that number is growing every day. That <br /> means e-commerce is thriving.</p>
                            <button className="free">try for free</button>
                            <button className="free">try for free</button>
                            <p className="example">There are some things money can’t buy. For everything <br /> else there’s ‘’MasterCard” is a good example. </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={Compyuter} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}