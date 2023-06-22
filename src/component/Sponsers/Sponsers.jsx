import React from 'react'
import './Sponsers.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import { sponsers } from '../../assets/Sponsers/sponsers.js'
<<<<<<< HEAD
import aztec from "../.././assets/aztec.svg"
=======
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746

function Sponsers() {
    return (
        <div className='container'>
<<<<<<< HEAD
            <div className="leftContainer homeLeft sponserLeft">
=======
            <div className="leftContainer homeLeft">
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746

                <Navbar />
                <h1 className="theTitle sponsershipTitle">
                    sponsors
                </h1>
<<<<<<< HEAD
                

                <div className="overlay">
                    <img src={aztec} alt="" />
                </div>


=======

                <div className="overlay">
                    <img src="src\assets\aztec.svg" alt="" />
                </div>

>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
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
<<<<<<< HEAD
            <Footer />
            </div>
=======
            </div>
            <Footer />
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746

        </div>

    )
}

export default Sponsers