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
        <Link to={"/sponsers"}>SPONSERS</Link>
    </div>
</div>
  )
}

export default Navbar