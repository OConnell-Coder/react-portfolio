import './contact.css';
// import { useForm } from "react-hook-form";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import background from './assets/Me-at-Derrynane-Kerry-2011.jpg';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    document.querySelector('form').style.opacity=0;
    emailjs.sendForm('service_6mo8zi5', 'template_rb22f2d', form.current, 'lf4UlDIZssdg_b7EO')
      .then((result) => {
          console.log(result.text);
        //   document.querySelector("[name = 'user_name']").value = '';
        //   document.querySelector("[name = 'user_email']").value = '';
        //   document.querySelector("[name = 'message']").value = '';

        document.querySelector('form').innerHTML = `
            <h1>Thank you! Your message has been sent. I will be in touch shortly.</h1>
        `;
        document.querySelector('form').style.opacity=100;
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact-pg" style={{backgroundImage: `url(${background})`}}>
        <h1 id="contact-me">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} id="contact-form">
            {/* <label htmlFor="name">Name</label> */}
            <input placeholder="Full Name" type="text" name="user_name" id="name" />
            {/* <label htmlFor="email">Email</label> */}
            <input placeholder="Email" type="email" name="user_email" id="email" />
            {/* <label htmlFor="message-box">Message</label> */}
            <textarea placeholder="Message" id="message-box" name="message" />
            <input type="submit" value="Send" />
        </form>
    </div>
  );
};


// const Contact = ({setPage}) => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = data => console.log(data);

//     return (
//         <div id="contact-pg">
//             <h1 id="contact-me">Contact Me</h1>
//             <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
//                 <input placeholder="Full Name" {...register("fullName", {required: true, maxLength: 50})} />
//                 {errors.fullName && <span>*This field is required!</span>}
//                 <input placeholder="Email" {...register("Email", {required: true, pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/})} />
//                 {errors.Email && <span>*Invalid Email Address!</span>}
//                 <input id="message-box" placeholder="Message" {...register("Message", {required: true, maxLength: 160})} />
//                 {errors.Message && <span>*This field is required!</span>}
                
//                 <button id="submit-btn" type="submit">Submit</button>
//             </form>
//         </div>
//       );

// };


export default Contact;
