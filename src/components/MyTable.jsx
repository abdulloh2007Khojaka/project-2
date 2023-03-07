import React, {useState, useEffect} from "react";
import axios from "axios";




export default function MyTable() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/posts')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (

        <>

            <div className="container">
                <table className="table">
                    {
                        data.map(elem => (
                            <tbody>
                                <tr>
                                    <th key={elem.data}>{elem.data}</th>
                                    <td>{elem.name}</td>
                                    <td>{elem.surname}</td>
                                    <td>{elem.age}</td>
                                </tr>
                            </tbody>
                        ))

                    }
                </table>
            </div>

        </>

    )
}