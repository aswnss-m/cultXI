import React from "react";
export function CountDown({
  isBirthday,
  days,
  hours,
  minutes,
  seconds
}) {
  return <div className="countDown">
                    <h1 id="headline">{isBirthday ? " CULT-A-AWAY 11" : "The saga Begins in "}</h1>
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
                        </div>}
                    {isBirthday && <></>}
                </div>;
}