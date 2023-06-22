import React from 'react';
import { useNavigate } from 'react-router-dom';
import { day1 } from '../../../constants/links';

function Day1() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

 
  return (
<<<<<<< HEAD
    // <div className='eventDay'>
      
    //   <div className="proshowEvent" onClick={() => handleClick(day1[0].link)}>
    //   <h1 className='theTitle' style={{
    //     display: 'flex',
    //     width: '100%',
    //     textAlign: 'center',
    //     margin: '.2em 0',
    //     justifyContent: 'center',
    //     fontSize: '3rem'
    //   }}>on June 23</h1>
    //     <img src={day1[0].poster} className='proshowPoster' alt='Proshow' />
    //   </div>
    //   <div className="otherEvents">
    //     {day1.slice(1).map((link) => (
    //       <div className="otherEvent" key={link.id} onClick={() => handleClick(link.link)}>
    //         <img src={link.poster} alt="" className='otherEventPoster' />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className='eventDay'>
    <div className="proshowEvent" onClick={() => handleClick(day2[0].link)}>
      <h1 className='theTitle' style={{
        display: 'flex',
        width: '100%',
        textAlign: 'center',
        margin: '.2em 0',
        justifyContent: 'center',
        fontSize: '3rem'
      }}>on June 23</h1>
      <img src={day1[0].poster} className='proshowPoster' alt='Proshow' />
    </div>
    <div className="otherEvents">
      {day1.slice(1).map((link) => (
        <div className="otherEvent" key={link.id} onClick={() => handleClick(link.link)}>
            <img src={link.poster} alt="" className='otherEventPoster' />
          </div>
       ))}
    </div>
  </div>
=======
    <div className='eventDay'>
      
      <div className="proshowEvent" onClick={() => handleClick(day1[0].link)}>
        <img src={day1[0].poster} className='proshowPoster' alt='Proshow' />
      </div>
      <div className="otherEvents">
        {day1.slice(1).map((link) => (
          <div className="otherEvent" key={link.id} onClick={() => handleClick(link.link)}>
            <img src={link.poster} alt="" className='otherEventPoster' />
          </div>
        ))}
      </div>
    </div>
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
  );
}

export default Day1;
