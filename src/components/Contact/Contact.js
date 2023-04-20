import React from "react";
import './Contact.css';
function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text" data-aos="fade-right" data-aos-duration="1500">Contact Me.</h1>
              <p className="hire__text white" data-aos="fade-right" data-aos-duration="1500">
                I am available for freelance work. Connect with me via phone:
              </p>
              <p className="hire__text white" data-aos="fade-right" data-aos-duration="1500">
                <strong>+94-77-860-1398</strong> or email{" "}
                <strong>praveenchamod23@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input data-aos="fade-up" data-aos-duration="1000"
                type="text"
                className="contact name"
                placeholder="Your name *"
              /> 
              <input data-aos="fade-up" data-aos-duration="1400"
                type="text"
                className="contact email"
                placeholder="Your Email *"
              />
              <input data-aos="fade-up" data-aos-duration="1600"
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
              />
              <textarea data-aos="fade-up" data-aos-duration="1800"
                name="message"
                id="message"
                placeholder="Write Your message"
              ></textarea> 
              <button className="btn contact pointer" type="submit" data-aos="fade-up" data-aos-duration="2000">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
