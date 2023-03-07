import React from "react";
import { FiArrowRight } from 'react-icons/fi';




export default function MySimply() {
    return (

        <>

            <div className="container mt-5 lastCon">
                <div className="row">
                    <div className="col">
                        <h4 className="ametDl">Lorem ipsum dolor sit amet.</h4>
                        <p className="suntut mt-2 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cupiditate eveniet incidunt sunt?</p>
                    </div>
                    <div className="col">
                        <div className="input-group mt-5 mb-3">
                            <input type="text" className="form-control icoInp" placeholder="Recipient's username"  />
                                <button className="btn btn-primary arrow"> <FiArrowRight/> </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}