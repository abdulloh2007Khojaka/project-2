import React from "react";
import SaytImg1 from './images/img3.png'
import SaytImg2 from './images/img4.png'
import SaytImg3 from './images/img5.png'
import SaytImg4 from './images/img6.png'
import SaytImg5 from './images/img7.png'




export default function Saytlar() {
    return(

        <>
        
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col mt-5">
                        <img src={SaytImg1} className="img-fluid" />
                    </div>
                    <div className="col mt-5">
                        <img src={SaytImg2} className="img-fluid" />
                    </div>
                    <div className="col mt-5">
                        <img src={SaytImg3} className="img-fluid" />
                    </div>
                    <div className="col mt-5">
                        <img src={SaytImg4} className="img-fluid" />
                    </div>
                    <div className="col mt-5">
                        <img src={SaytImg5} className="img-fluid" />
                    </div>
                </div>
            </div>

        </>

    )
}