import React from 'react'
import video from "../../assets/video.mp4"


function About() {
    return (
        <div className='aboutContainer'>
            <div className="aboutGroup">
                <h1>About</h1>
                <p className='big-font'>Join us for <span className="bigger-font">Cult 11</span> , the electrifying techno-cultural extravaganza presented by a dynamic and creative team of engineers. For over a decade, Cult A Way has ignited hearts with <span className="bigger-font">pride</span> and exhilaration. This year, we embark on a new chapter, creating unforgettable moments and a vibrant celebration. Get ready for a sensational experience as we ignite the <span className="bigger-font">legacy</span>.
                      Sree Chitra Thirunal College of Engineering, Thiruvananthapuram, has been a trailblazer in engineering education since 1995. As one of the top engineering institutions in Kerala, SCT boasts a strong alumni network, making a mark in various fields worldwide. Join us as SCT students unveil the <span className="bigger-font">11th edition</span> of <span className="bigger-font">Cult A Way</span>, a spectacular showcase of <span className="bigger-font">talent</span> and tradition.</p>
            </div>
            <div className="aboutGroup">
            <video src={video} className='video' autoPlay={true} muted loop/>
            </div>
            <div className="aboutGroup">
                <h1 style={
                    {textAlign: "right"}
                }>Location</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1565.9218409458335!2d76.95566326599216!3d8.511437647896837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbce94919441%3A0xac2d8450994e94cc!2sNishagandhi%20Theater!5e0!3m2!1sen!2sin!4v1687115050652!5m2!1sen!2sin"
                    style={
                        {
                            border: 0,
                            height: "500px",
                            width : "100%",
                            frameborder: 0,
                            allowfullscreen: "",
                            ariaHidden: "false"
                        }
                }></iframe>
            </div>
        </div>
    )
}

export default About
