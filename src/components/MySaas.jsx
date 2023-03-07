import React from "react";
import BigImg from './images/img9.png'




export default function MySaas() {
    return (

        <>

            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
                        <p className="dolor">Lorem ipsum dolor</p>
                        <h1 className="likeSaas">With a name like Saas, <br /> it has to be good. </h1>

                        <div className="accordion accordion-flush" id="accordionFlushExample ">
                            <div className="accordion-item ">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body loremss">Lorem ipsum dolor sit amet consectetur adipiscing <br /> elit sed do eiusmod tempor.Lorem consectetur <br /> adipiscing elit sed do eiusmod tempor.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body loremss">Lorem ipsum dolor sit amet consectetur adipiscing <br /> elit sed do eiusmod tempor.Lorem consectetur <br /> adipiscing elit sed do eiusmod tempor.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body loremss">Lorem ipsum dolor sit amet consectetur adipiscing <br /> elit sed do eiusmod tempor.Lorem consectetur <br /> adipiscing elit sed do eiusmod tempor.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body loremss">Lorem ipsum dolor sit amet consectetur adipiscing <br /> elit sed do eiusmod tempor.Lorem consectetur <br /> adipiscing elit sed do eiusmod tempor.</div>
                                </div>
                            </div>
                        </div>
                        <button className="dablFree mt-5">free trial</button>
                        <button className="dablFree mt-5">read more</button>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
                        <img src={BigImg} className="img-fluid" />
                    </div>
                </div>
            </div>

        </>

    )
}