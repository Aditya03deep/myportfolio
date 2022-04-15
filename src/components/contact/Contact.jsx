import React,{useRef,useState} from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from "emailjs-com";

function Contact() {
    const formRef = useRef();
    const [done,setDone] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs
        .sendForm(
          "service_tzt0d8i",
          "template_d4nh263",
          formRef.current,
          "4mT1oqKOFlDb5n9-I"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );

    }
    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Get in Touch</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={Phone} alt='' className='c-icon' />
                            +91 6203444808
                        </div>
                        <div className='c-info-item'>
                            <img src={Email} alt='' className='c-icon' />
                            adityadeepak03@gmail.com
                        </div>
                        <div className='c-info-item'>
                            <img src={Address} alt='' className='c-icon' />
                            House/N0-7,Shantinagar,Adityapur Jamshedpur, Jharkhand 8310013
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p  className='c-desc'>
                    <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along. me.</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name="user_name"/>
                        <input type="text" placeholder='Subject' name="user_subject"/>
                        <input type="text" placeholder='Email' name="user_email"/>
                        <textarea rows="5" placeholder='Message' name="message"/>
                        <button>Submit</button>
                        {done && "Thankyou , I'll get in touch soon !!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact