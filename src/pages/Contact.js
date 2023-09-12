import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/Contact.css";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input className="contact-form-name" type="text" name="from_name" placeholder="Name" />
        <textarea className="contact-form-message" name="message" placeholder="Message" />
        <input className="contact-form-button" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
