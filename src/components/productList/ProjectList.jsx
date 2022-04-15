import React from 'react'
import "./projectList.css"
import Projects from '../projects/Projects'
import { projects, internship } from "../../data"
import Intern from '../intern/intern'

function ProjectList() {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>Create & Inspire. It's Aditya</h1>
        <p className='pl-desc'>
        Whatever I learned in the past few years , new technology ,new stacks or new languages , I tried me best to make some real time projects using all my knowledge. Below mentioned are some of my best projects 
        </p>


      </div>
      <div className='pl-list'>
        {projects.map((item) => (
          <Projects key={item.id} img={item.img} link={item.link} github={item.github} />
        ))}

      </div>
      <div >
        <h1 className='pl-title'>Internship</h1>
        <p className='pl-desc'>
          Below mentioned are my internship experience so far ..
        </p>
      </div><div className='in-list'>
        {internship.map((item) => (
          <Intern key={item.id} img={item.img} link={item.link} duration={item.duration} position={item.position} task1={item.task1} task2={item.task2} achievements={item.achievements} lor={item.lor} certificate={item.certificate} />
        ))}

      </div>

    </div>
  )
}

export default ProjectList