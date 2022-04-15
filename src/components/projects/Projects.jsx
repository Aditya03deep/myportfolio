import React from 'react'
import "./project.css"

function Projects({img,link,github}) {
  return (
    <div className='p'>
        <div className='p-browser'>
        <a href={github} target="_blank" rel='noreferrer'><div className='p-circle'></div></a>
        <a href={github} target="_blank" rel='noreferrer'><div className='p-circle'></div></a>
        <a href={github} target="_blank" rel='noreferrer'><div className='p-circle'></div></a>
        </div>
        <a href={link} target="_blank" rel='noreferrer'>
            <img src={img} alt="" className='p-img'/>
        </a>
    </div>
  )  
}

export default Projects