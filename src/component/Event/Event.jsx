import React from 'react';
import './Event.css';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import Day1 from './pages/Day1';
import Day2 from './pages/Day2';
import Day3 from './pages/Day3';
import All from './pages/All';
import Navbar from '../Navbar/Navbar';
import aztec from "../.././assets/aztec.svg"
import Footer from '../Footer/Footer';
function Event() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="leftContainer eventLeft">
        <Navbar />

        <div className="link">
          <h1 className="theTitle" onClick={() => { navigate("/events") }}>
            events
          </h1>
          <ul className="eventNav theTitle">
            <li className="days" onClick={() => navigate('/events/day1')}>Day 1</li>
            <li className="days" onClick={() => navigate('/events/day2')}>Day 2</li>
            <li className="days" onClick={() => navigate('/events/day3')}>Day 3</li>
          </ul>
        </div>
        <div className="overlay">
          <img src={aztec} alt="" />
        </div>

      </div>
      <div className="rightContainer eventRight">
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/day1" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
          <Route path="/day3" element={<Day3 />} />
        </Routes>

        <Footer/>
      </div>
    </div>
  );
}

export default Event;
