import './contact.css';
import { useForm } from "react-hook-form";


const Contact = ({setPage}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div id="contact-pg">
            <h1 id="contact-me">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Full Name" {...register("fullName", {required: true, maxLength: 50})} />
                {errors.fullName && <span>*This field is required!</span>}
                <input placeholder="Email" {...register("Email", {required: true, pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/})} />
                {errors.Email && <span>*Invalid Email Address!</span>}
                <input id="message-box" placeholder="Message" {...register("Message", {required: true, maxLength: 160})} />
                {errors.Message && <span>*This field is required!</span>}
                
                <button id="submit-btn" type="submit">Submit</button>
            </form>
        </div>
      );

};


export default Contact;
