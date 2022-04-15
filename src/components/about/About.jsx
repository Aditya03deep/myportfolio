import React from 'react'
import "./about.css"
import {
    FaFacebookF,
    
    FaInstagram,
    FaLinkedin,
    FaGithub,
  } from "react-icons/fa";
import aboutme from "../../img/aboutme.jpg"

function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={aboutme}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                BASIC INFORMATION : Know me a little better

                
                </p>
                <p className="a-desc">
                    <span>FULL NAME : </span>ADITYA DEEPAK<br/>
                    <span>AGE : </span>21<br/>
                    <span>ADDRESS : </span>Adityapur, Jamshedpur, Jharkhand<br/>
                    <span>COLLEGE : </span>College Of Engineering and Management,Kolaghat<br/>
                    <span>SCHOOL : </span>St.Mary's English High School<br/>
                    <span>EMAIL : </span>adityadeepak03@gmail.com<br/>
                    <span>PHONE : </span>6203444808
                </p>
                <div className="commonBorder"></div>
                    <ul className="sci">
                    <li><a href="https://www.linkedin.com/in/aditya-deepak03/" ><FaLinkedin/></a></li>
                    <li><a href="https://www.facebook.com/"><FaFacebookF/></a></li>
                    <li><a href="https://github.com/Aditya03deep?tab=repositories"><FaGithub/></a></li>
                    <li><a href="https://www.instagram.com/chanch_adi_003/"><FaInstagram/></a></li>
                </ul>
                
            </div>
        </div>
    )
}

export default About