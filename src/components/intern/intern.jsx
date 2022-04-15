import React from 'react'
import "./intern.css"
import cert from "../../img/certificate.png"
import lorr from "../../img/lor.png"


function Intern({duration,position,task1,task2,achievements}) {
  return (
    <div className="in">
        <div className="in-title">
            <h2>Beat The Virus</h2>
        </div>
        <div className='in-box'>
            <div className='task1'>
              <div className='in-desc'>
                  <li>DURATION: {duration}</li>
                  <li>POSITION: {position}</li>
                  <li>TASK: {task1}</li>
                  <li>TASK: {task2}</li>
                  <li>ACHIEVEMENTS: {achievements}</li>
                  
              </div>
            </div>
            <div className='task2'>
              <img src={cert} alt="certificate" className='cert'/>
            </div>
            <div className='lor'>
              <img src={lorr} alt="lor" className='lorr'/>
            </div>
        </div>
        
    </div>
  )  
}

export default Intern