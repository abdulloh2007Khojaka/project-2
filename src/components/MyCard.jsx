import React, { useState, useEffect } from "react";
import axios from "axios";




export default function MyCard() {

    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/comments')
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
    }, [])

    return (

        <>

            <div className="container mt-5 mb-5">
                <div className="row text-center">
                    {
                        comments.map(comment => (
                            <div className="col-sm-12 col-md-4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">ISMI : {comment.ismi}</h5>
                                        <p className="card-text">FAMILIYASI : {comment.familiyasi}</p>
                                        <p className="card-text"> MAKTABI : {comment.maktabi}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>

    )
}