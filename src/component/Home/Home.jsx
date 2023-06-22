import  {CountDown}  from './CountDown';
import React, { useState, useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import 'animate.css';
import Music from '../Music/Music';
import Footer from '../Footer/Footer';
import About from './About';
import Navbar from '../Navbar/Navbar';

import aztec from "../.././assets/aztec.svg"


function Home() {

    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [isBirthday, setIsBirthday] = useState(false);


    useEffect(() => {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        // I'm adding this section so I don't have to keep updating this code every year :-)
        // Remove this if you don't need it
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let nextYear = yyyy + 1;
        let dayMonth = '06/23/';
        let birthday = dayMonth + yyyy;

        today = mm + '/' + dd + '/' + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        // End

        const countdown = new Date(birthday).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdown - now;

            const daysRemaining = Math.floor(distance / day);
            const hoursRemaining = Math.floor((distance % day) / hour);
            const minutesRemaining = Math.floor((distance % hour) / minute);
            const secondsRemaining = Math.floor((distance % minute) / second);

            setDays(daysRemaining.toString());
            setHours(hoursRemaining.toString());
            setMinutes(minutesRemaining.toString());
            setSeconds(secondsRemaining.toString());

            if (distance < 0) {
                setIsBirthday(true);
                clearInterval(interval);
            }
        }, 0);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);



    return (

        <div className="container HomeContainer">
            <div className="leftContainer homeLeft">
                <Navbar />

                <h1 className="theTitle animate__animated animate__fadeIn   ">
                    THE BOHEMIAN SAGA
                </h1>
                <div className="overlay">
                    <img src={aztec}alt="CAW23 Logo" />
                </div>
            </div>

            {/* <div className="rightContainer homeRightContainer toAddScrollSnap"> */}
            <div className="rightContainer homeRightContainer">
               
              <span className="countDownPlacer">
                  <CountDown   isBirthday={isBirthday} days={days} hours={hours} minutes={minutes} seconds={seconds}  />
              </span>
              <About />
              <Footer />
            </div>
        </div>
    )
}

  export default Home