import React from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { day1, day2, day3 } from '../../../constants/links';
=======
import { day1,day2,day3 } from '../../../constants/links';
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746

function All() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

<<<<<<< HEAD

  return (
    <>
      <h1 className='theTitle' style={{
        display: 'flex',
        width: '100%',
        textAlign: 'center',
        margin: '.2em 0',
        justifyContent: 'center',
        fontSize: '3rem'
      }}>Proshows</h1>
      <div className='eventDay'>
        <div className="allProShows">
            <img src={day1[0].poster} className='proshowPoster' alt='Proshow' onClick={() => handleClick(day1[0].link)} />
            <img src={day2[0].poster} className='proshowPoster' alt='Proshow' onClick={() => handleClick(day2[0].link)} />
            <img src={day2[1].poster} className='proshowPoster' alt='Proshow' onClick={() => handleClick(day2[1].link)}/>
            <img src={day3[0].poster} className='proshowPoster' alt='Proshow' onClick={() => handleClick(day3[0].link)}/>
          {/* <div className="proshowEvent" onClick={() => handleClick(day1[0].link)}>
          </div>
          <div className="proshowEvent" onClick={() => handleClick(day1[0].link)}>
          </div>
          <div className="proshowEvent" onClick={() => handleClick(day1[0].link)}>
          </div> */}
        </div>

        <div className="otherEvents">
          <h1 className='theTitle' style={{
            display: 'flex',
            width: '100%',
            textAlign: 'center',
            margin: '.2em 0',
            justifyContent: 'center',
            fontSize: '3rem'
          }}>Events</h1>
          {day1.slice(1).map((link) => (
            <div className="otherEvent" key={link.id} onClick={() => handleClick(link.link)}>
              <img src={link.poster} alt="" className='otherEventPoster' />
            </div>
          ))}
          {day2.slice(2).map((link) => (
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
=======
 
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
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
    </>
  );
}

export default All;
