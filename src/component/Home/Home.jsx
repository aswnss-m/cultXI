import React, { useState, useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import 'animate.css';

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
                <div className="navBar">
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/events"}>EVENT</Link>
                    <Link to={"/sponsers"}>SPONSERS</Link>
                </div>
                <h1 className="theTitle animate__animated animate__fadeIn   ">
                    THE BOHEMIAN SAGA
                </h1>

                <div className="overlay">
                    <img src="src\assets\aztec.svg" alt="" />
                </div>

            </div>

            <div className="rightContainer onlyCountdown">

                <div className="countDown">
                    <h1 id="headline">{isBirthday ? " CULT-A-AWAY 11" : "The saga Begins in "}</h1>
                    {!isBirthday && (
                        <div id="countdown">
                            <ul id='countDownUl'>
                                <li>
                                    <span id="days">{days}</span>days
                                </li>
                                <li>
                                    <span id="hours">{hours}</span>hours
                                </li>
                                <li>
                                    <span id="minutes">{minutes}</span>minutes
                                </li>
                                <li>
                                    <span id="seconds">{seconds}</span>seconds
                                </li>
                            </ul>
                        </div>
                    )}
                    {isBirthday && (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home