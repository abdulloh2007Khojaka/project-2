import React from "react";
import AllImg from './images/img10.png';




export default function MyLoudest() {
    return (

        <>

            <div className="container mt-5">
                <p className="dolor text-center">Lorem ipsum dolor sit amet.</p>
                <h1 className="loudest">The Loudest Noise Comes From <br /> The  Electric Saas.</h1>
                <p className="adipis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <div className="row text-center">
                    <div className="col-sm-12 col-md-4 ">
                        <img src={AllImg} className="mt-5" />
                        <h3 className="layoAll">Responsive Layout</h3>
                        <p className="alltedPP">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing</p>
                    </div>
                    <div className="col-sm-12 col-md-4 ">
                        <img src={AllImg} className="mt-5" />
                        <h3 className="layoAll">Smart BEM Grid</h3>
                        <p className="alltedPP">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing</p>
                    </div>
                    <div className="col-sm-12 col-md-4 ">
                        <img src={AllImg} className="mt-5" />
                        <h3 className="layoAll">User Friendly</h3>
                        <p className="alltedPP">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing</p>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-sm-12 col-md-4 ">
                        <img src={AllImg} className="mt-5" />
                        <h3 className="layoAll">Built on Bootstrap v4</h3>
                        <p className="alltedPP">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing</p>
                    </div>
                    <div className="col-sm-12 col-md-4 ">
                        <img src={AllImg} className="mt-5" />
                        <h3 className="layoAll">Best online Security</h3>
                        <p className="alltedPP">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing</p>
                    </div>
                    <div className="col-sm-12 col-md-4 ">
                        <img src={AllImg} className="mt-5" />
                        <h3 className="layoAll">Creative Design</h3>
                        <p className="alltedPP">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing</p>
                    </div>
                </div>
            </div>

        </>

    )
}