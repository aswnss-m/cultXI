import React from 'react';
import './allSchdelues.css';
import { schedule } from "../../../constants/schedule";

function Sch1() {
  console.log(schedule);

  return (
    <div className='scheduleRightContainer'>
      {schedule.map((locationData, index) => (
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

export default Sch1;
