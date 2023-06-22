import React from 'react'
import './Navbar.css'
import Music from '../Music/Music'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <div className="navNmusic">
    <div className="navBar">
        <Link to={"/"}>HOME</Link>
        <Link to={"/events"}>EVENT</Link>
        <Link to={"/sponsers"}>SPONSORS</Link>
<<<<<<< HEAD
        <Link to={"/schedule"} >SCHEDULE</Link>
=======
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
    </div>
</div>
  )
}

export default Navbar