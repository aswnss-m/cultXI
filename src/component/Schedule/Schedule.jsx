import React from 'react'
import './Schedule.css'
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
// import Sched
import aztec from "../.././assets/aztec.svg"
import Navbar from '../Navbar/Navbar'
import Sch1 from './Pages/Sch1'
import Sch3 from './Pages/Sch3';
import Sch2 from './Pages/Sch2';


function Schedule() {
    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className="leftContainer homeLeft">

                <Navbar />
                <div className="link">
                    <h1 className="theTitle" onClick={() => { navigate("/schedule") }}>
                        schedule
                    </h1>
                    <ul className="eventNav theTitle">
                        <li className="days" onClick={() => navigate('/schedule/scheduleDay1')}>Day 1</li>
                        <li className="days" onClick={() => navigate('/schedule/scheduleDay2')}>Day 2</li>
                        <li className="days" onClick={() => navigate('/schedule/scheduleDay3')}>Day 3</li>
                    </ul>
                    </div>
                <div className="overlay">
                    <img src={aztec} alt="" />
                </div>
            </div>

            <div className="rightContainer">
                <Routes>
                    <Route path="/scheduleDay1" element={<Sch1/>} />
                    <Route path="/scheduleDay2" element={<Sch2/>} />
                    <Route path="/scheduleDay3" element={<Sch3/>} />
                </Routes>
            </div>
            {/* <Footer /> */}

        </div>

    )
}

export default Schedule