import React from 'react'
import './Sponsers.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import { sponsers } from '../../assets/Sponsers/sponsers.js'
import aztec from "../.././assets/aztec.svg"

function Sponsers() {
    return (
        <div className='container'>
            <div className="leftContainer homeLeft">

                <Navbar />
                <h1 className="theTitle sponsershipTitle">
                    sponsors
                </h1>

                <div className="overlay">
                    <img src={aztec} alt="" />
                </div>

            </div>

            <div className="rightContainer">
                <div className="sponserLogoGrid">

                    {sponsers.map((sponser) => {
                        return (
                            <div className="sponserCard">
                                <img src={sponser} alt="" />
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />

        </div>

    )
}

export default Sponsers