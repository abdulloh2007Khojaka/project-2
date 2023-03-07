import React from "react";
import FirstImg from './images/img1.png'



export default function MyFooter() {
    return(

        <>
        
            <div className="fooCon">
                <div className="container mt-5">
                    <div className="row text-center">
                        <div className="col mt-5 mb-5">
                            <img src={FirstImg} alt="" />
                            <p className="imgPP">Lorem ipsum dolor sit amet <br /> consectetur adipisicing.</p>
                        </div>
                        <div className="col mt-5 mb-5">
                            <p className="custoAll">Customers</p>
                            <p className="imgPP">Buyer</p>
                            <p className="imgPP">Supplier</p>
                        </div>
                        <div className="col mt-5 mb-5">
                            <p className="custoAll">Company</p>
                            <p className="imgPP">About Us</p>
                            <p className="imgPP">Careers</p>
                            <p className="imgPP">Contact Us</p>
                        </div>
                        <div className="col mt-5 mb-5">
                            <p className="custoAll">Further Information</p>
                            <p className="imgPP">Terms & Conditions</p>
                            <p className="imgPP">Privacy Policy</p>
                        </div>
                        <div className="col mt-5 mb-5">
                            <p className="custoAll">Follow Us</p>
                            <input type="text" placeholder="email address" className="usInput"/>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}