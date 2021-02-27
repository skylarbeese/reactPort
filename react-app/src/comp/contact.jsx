import React, { Component } from 'react'
import Nav from './nav'
import EmailJs from 'emailjs-com'
class Contact extends Component {

  sendEmail = (e) =>  {
    e.preventDefault()
 
    EmailJs.sendForm('gmail', 'template_0y45lja', e.target, 'user_xy8ABjwAfQzsJe1G1xVR6')
    .then((result) => {
     console.log(result.text);
 }, (error) => {
     console.log(error.text);
 });
   e.target.reset()
   } 

  render() {
  
  return (
   <>
   <Nav /> 
    <div className="contect-div">
      <div className="contect-text">
         <h1>Contact me</h1>
         <div className={`contect-und`}></div>
         
      </div>
      <div className="form">
      <form onSubmit={this.sendEmail}>
      
      <div className="con-input">
        <div className="in-con">
        <input type="hidden" name="to_name" />
       <label>Enter your name* </label>
          <input type="text" name="name" placeholder="Enter your full name"/>
         </div>
         <div className="in-con">
       <label>Enter your email address* </label>
          <input type="text" name="email" placeholder="Enter your email address"/>
          </div>
        </div>
       <label>Type your message here* </label>
           <textarea name="message" id="" rows="" placeholder="type your message..."></textarea>
       <label>required fields* </label>
       <button type="submit" value="Send" >send message</button>
    </form>
      </div>
    </div>
   </>
  );
  }
}

export default Contact;