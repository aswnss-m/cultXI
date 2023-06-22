import React from "react";
export function CountDown({
    isBirthday,
    days,
    hours,
    minutes,
    seconds
}) {
    return <div className="countDown">
<<<<<<< HEAD
        <h1 id="headline">{isBirthday ? " Welcome to " : "The saga Begins in "}</h1>
=======
        <h1 id="headline">{isBirthday ? " CULT-A-AWAY 11" : "The saga Begins in "}</h1>
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
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
<<<<<<< HEAD
                <span className="date">June 23 24 25</span> | at Kanakakunnu Palace
            </h3>
        </div>}
        { isBirthday && <div>
            <div className="cultAWayTitle">
                <h1 className="cultAWay theTitle">CULT A AWAY 11</h1>
            </div>
            
            </div>}
=======
                <span className="date">June 23 24 25</span> | at Kanakankunnu Palace
            </h3>
        </div>}
        {isBirthday && <></>}
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
    </div>;
}