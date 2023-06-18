import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {

  return (
    <div className="container HomeContainer">
        <div className="leftContainer homeLeft"> 
            {/* <h1>LEFT</h1> */}
            {/* <div className="overlay">
                <div className="aztec"></div>
            </div> */}

           

            <div className="navBar">
                <Link to={"/"}>HOME</Link>
                <Link to={"/events"}>EVENT</Link>
                <Link to={"/"}>SPONSERS</Link>
            </div>
            
            <h1 className="theTitle">
                THE BOHEMIAN SAGA
            </h1>
          

        </div>
        <div className="rightContainer">
            <div className="blackOverlay"></div>
            {/* <h1>RIGH</h1> */}

        </div>
    </div>
  )
}

export default Home