import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.styles.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q959fw8", "template_al4uowb", form.current, {
        publicKey: "juQkASbN1_CmSF-kO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section>
      <div>
        <h1>Contact Me</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className="feedback-input"
          placeholder="Name"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="feedback-input"
          placeholder="Email"
        />
        <label>Message</label>
        <textarea
          name="message"
          className="feedback-input"
          placeholder="Message"
        />
        <input type="submit" value="SUBMIT" />
      </form>
    </section>
  );
};

export default ContactForm;

