import React from 'react'
import './Sponsers.css'
import { Link } from 'react-router-dom'

function Sponsers() {
    return (
        <div className='container'>
            <div className="leftContainer homeLeft">
                <div className="navBar">
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/events"}>EVENT</Link>
                    <Link to={"/"}>SPONSERS</Link>
                </div>
                <h1 className="theTitle sponsershipTitle">
                   sponsers
                </h1>

                <div className="overlay">
                    <img src="src\assets\aztec.svg" alt="" />
                </div>

            </div>

            <div className="rightContainer">
            </div>

        </div>

    )
}

export default Sponsers