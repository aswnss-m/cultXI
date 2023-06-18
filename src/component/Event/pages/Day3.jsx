import React from 'react';
import { useNavigate } from 'react-router-dom';
import { day3 } from '../../../constants/links';

function Day3() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

 
  return (
    <div className='eventDay'>
      <div className="proshowEvent" onClick={() => handleClick(day3[0].link)}>
        <img src={day3[0].poster} className='proshowPoster' alt='Proshow' />
      </div>
      <div className="otherEvents">
        {day3.slice(1).map((link) => (
          <div className="otherEvent" key={link.id} onClick={() => handleClick(link.link)}>
            <img src={link.poster} alt="" className='otherEventPoster' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day3;
