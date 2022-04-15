import React from 'react'
import "./intro.css"
import me from "../../img/me.png"

function Intro() {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello , My name is</h2>
                    <h1 className='i-name'>Aditya Deepak</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Frontend</div>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>Hardworking</div>
                            <div className='i-title-item'>Passionate</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                    I am frontend web developer . Looking forward to a great career in IT industry
                    I  enjoy a challenging environment which motivates me to do my best. I excel at prioritizing responsibilities and effectively completing tasks. I use my electronic portfolio to reflect on experiences in order to remember what I have learned and see where I am going.
                    </p>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={me} alt="" className='i-img'/>
            </div>
        </div>
    )
}

export default Intro