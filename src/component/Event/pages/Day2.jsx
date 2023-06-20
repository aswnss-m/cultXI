import React from 'react';
import { useNavigate } from 'react-router-dom';
import { day2 } from '../../../constants/links';

function Day2() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

 
  return (
    <div className='eventDay'>
      <div className="proshowEvent" onClick={() => handleClick(day2[0].link)}>
      <h1 className='theTitle' style={{
        display: 'flex',
        width: '100%',
        textAlign: 'center',
        margin: '.2em 0',
        justifyContent: 'center',
        fontSize: '3rem'
      }}>on June 24</h1>
        <img src={day2[0].poster} className='proshowPoster' alt='Proshow' />
        <img src={day2[1].poster} className='proshowPoster' alt='Proshow' />
      </div>
      <div className="otherEvents">
        {day2.slice(2).map((link) => (
          <div className="otherEvent" key={link.id} onClick={() => handleClick(link.link)}>
            <img src={link.poster} alt="" className='otherEventPoster' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day2;
