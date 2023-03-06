import React, { useRef } from 'react'
import'./join.css'
import emailjs from '@emailjs/browser'
function Join() {
    const form= useRef()
    const sendEmail = (e) => {
        e.preventDefault();
         console.log("form is ", form)
        emailjs.sendForm('service_0wp902b', 'template_cq4a7kb', form.current, 'AMLuvyCy2jrMugyDg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id="join-us">
       <div className="left-join">
        <hr/>
            <div>
                <span className='strock-text'>READY TO </span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='strock-text'> WITH US?</span>
            </div>
       </div>

       <div className="right-join">
        <form ref={form} className='email-container' onSubmit={sendEmail}>
            <input type="email"name='user_email'placeholder='Enter your email adress' />
            <button className='btn btn-j'>Join now</button>
        </form>
        </div> 
    </div>
  )
}

export default Join