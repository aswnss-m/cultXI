import React from 'react'
import './Event.css'
function Event() {
  return (
    <div className="container">
    <div className="leftContainer eventLeft"> 
        <ul className='eventNav'>
            <li>Day 1</li>
            <li>Day 2</li>
            <li>Day 3</li>
        </ul>
        </div>
        <div className="rightContainer">
            {/* <h1>RIGHT</h1> */}
        </div>
    </div>
  )
}

export default Event