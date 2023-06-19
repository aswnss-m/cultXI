import React from 'react';
import { useNavigate } from 'react-router-dom';
import { day1,day2,day3 } from '../../../constants/links';

function All() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

 
  return (
    <>
    <h1 className='theTitle' style={{
        display:'flex',
        width:'100%',
        textAlign:'center',
        margin: '.2em 0',
        justifyContent:'center',
        fontSize:'3rem'
    }}>Proshows</h1>
    <div className='eventDay'>
      <div className="proshowEvent" onClick={() => handleClick(day1[0].link)}>
        <img src={day1[0].poster} className='proshowPoster' alt='Proshow' />
      </div>
      <div className="proshowEvent" onClick={() => handleClick(day1[0].link)}>
        <img src={day2[0].poster} className='proshowPoster' alt='Proshow' />
      </div>
      <div className="proshowEvent" onClick={() => handleClick(day1[0].link)}>
        <img src={day3[0].poster} className='proshowPoster' alt='Proshow' />
      </div>
      <div className="otherEvents">
      <h1 className='theTitle' style={{
        display:'flex',
        width:'100%',
        textAlign:'center',
        margin: '.2em 0',
        justifyContent:'center',
        fontSize:'3rem'
      }}>Events</h1>
        {day1.slice(1).map((link) => (
          <div className="otherEvent" key={link.id} onClick={() => handleClick(link.link)}>
            <img src={link.poster} alt="" className='otherEventPoster' />
          </div>
        ))}
        {day2.slice(1).map((link) => (
          <div className="otherEvent" key={link.id} onClick={() => handleClick(link.link)}>
            <img src={link.poster} alt="" className='otherEventPoster' />
          </div>
        ))}
        {day3.slice(1).map((link) => (
          <div className="otherEvent" key={link.id} onClick={() => handleClick(link.link)}>
            <img src={link.poster} alt="" className='otherEventPoster' />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default All;
