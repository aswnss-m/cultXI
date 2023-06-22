import React from 'react';
import './allSchdelues.css';
import { schedule2 } from "../../../constants/schedule";

function Sch2() {

  return (
    <div className='scheduleRightContainer'>
      {schedule2.map((locationData, index) => (
        <div key={index} className="allSchedules">
          <h1 className="theTitle eachDayScheduleTitle">{locationData.place}</h1>
          <div className="eventsOnDay">
            {locationData.events.map((event, eventIndex) => (
              <div key={eventIndex} className="eventDetails">
                <span className="eventName">{event.name}</span>
                <span>{event.time}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sch2;
