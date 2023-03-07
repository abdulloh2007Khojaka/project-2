import React from "react";
import FirstImg from './images/img1.png'
import { Link } from "react-router-dom";




export default function MyNavbar() {
    return (

        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid blg-con">
                    <img src={FirstImg} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <Link to='/'> <p className="nav-link active lll">Home</p> </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/mytable'> <p className="nav-link active lll">Table</p> </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/mycard'> <p className="nav-link active lll">Card</p> </Link>
                            </li>
                        </ul>
                        <form className="d-flex">

                        </form>
                    </div>
                </div>
            </nav>

        </>

    )
}