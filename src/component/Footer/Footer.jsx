import React from 'react'
import dev from "../../assets/code.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import youtube from "../../assets/youtube.png"
import { useNavigate } from 'react-router-dom'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  const navigate = useNavigate()
  return (
    <div className='footerContainer'>
      <div className="footerLink">
        <Link to={"https://www.instagram.com/cult_a_way"} target='blank_'><img src={instagram} alt="instagram"/></Link>
        <Link to={"https://www.facebook.com/cultaway.sctce"} target='blank_'><img src={facebook} alt="facebook" /></Link>
        <Link to={'https://www.youtube.com/@CultAWay'} target='blank_'><img src={youtube} alt="youtube"/></Link>
      </div>
      <div className="footerDev">
        <Link to={"https://linktr.ee/caw23dev"} target='blank_'><img src={dev} alt="developer"/></Link>
      </div>
    </div>
  )
}

export default Footer
