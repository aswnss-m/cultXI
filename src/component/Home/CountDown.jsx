import React from "react";
import {Zoom} from "react-awesome-reveal"
export function CountDown({
    isBirthday,
    days,
    hours,
    minutes,
    seconds
}) {
    return <div className="countDown">
        <h1 id="headline">{isBirthday ? " Welcome to " : "The saga Begins in "}</h1>
        {!isBirthday && <div id="countdown">
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
            <h3 className="datePlace">
                <span className="date">June 23 24 25</span> | at Kanakakunnu Palace
            </h3>
        </div>}
        { isBirthday && <div>
            <div className="cultAWayTitle">
                    <Zoom cascade damping={1e-1}>
                        <h1 className="cultAWay theTitle">CULT A AWAY '23</h1>
                        <h2>11th Edition</h2>
                    </Zoom>
            </div>
            
            </div>}
    </div>;
}