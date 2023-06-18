import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="HomeContainer">
        <div className="leftContainer"> 
            {/* <h1>LEFT</h1> */}
            
            <div className="navBar">
                <a href="">HOME</a>
                <a href="">EVENT</a>
                <a href="">SPONSERS</a>
            </div>
            <h1 className="theTitle">
                THE BOHEMIAN SAGA
            </h1>
          

        </div>
        <div className="rightContainer">
            {/* <h1>RIGH</h1> */}

        </div>
    </div>
  )
}

export default Home