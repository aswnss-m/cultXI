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
        <img src={instagram} alt="instagram" onClick={()=>navigate("https://www.instagram.com/cult_a_way")}/>
        <img src={facebook} alt="facebook" onClick={()=>navigate("https://www.instagram.com/cult_a_way")} />
        <img src={youtube} alt="youtube" />
      </div>
      <div className="footerDev">
        <img src={dev} alt="developer" onClick={()=>{
          navigate()
        }}/>
      </div>
    </div>
  )
}

export default Footer
