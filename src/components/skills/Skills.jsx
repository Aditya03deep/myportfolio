import React from 'react'
import "./skills.css"
import SkillSection from './SkillSection'
function Skills() {
    return (
        
            <div className="skills" id="skills">
                <div className="skill__title">
                    <span>SKILLS</span>
                    <h1>My Skills</h1>
                    <div className="commonBorder"></div>
                </div>
                <div className="skils-container">
                <SkillSection skill={'C++'} progress={'80%'} width={'80%'} />
                
                <SkillSection skill={'Python'} progress={'80%'} width={'80%'} />
                <SkillSection skill={'CSS'} progress={'70%'} width={'70%'} />
                <SkillSection skill={'HTML'} progress={'80%'} width={'80%'} />
                
                <SkillSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillSection skill={'SQL'} progress={'50%'} width={'50%'} />
                
                </div>
            </div>
        
    )
}

export default Skills
