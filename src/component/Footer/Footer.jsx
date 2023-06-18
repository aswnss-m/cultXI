import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <p>Developed By <Link to={"https://www.linkedin.com/in/aswnss"} target="_blank">@aswnss</Link> & <Link to={"https://bento.me/aniz"}target="_blank">@aniz</Link></p>
    </div>
  )
}

export default Footer
