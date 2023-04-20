import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import React, { useState } from "react";
import "./Contact.css";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues };
function Contact() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading } = state;
  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
  };
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1
                className="hire__text"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                Contact Me.
              </h1>
              <p
                className="hire__text white"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                I am available for freelance work. Connect with me via phone:
              </p>
              <p
                className="hire__text white"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <strong>+94-77-860-1398</strong> or email{" "}
                <strong>praveenchamod23@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <FormControl
                isRequired
                isInvalid={touched.name && !values.name}
                mb={5}
              >
                <input
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={onBlur}
                  className="contact name"
                  placeholder="Your Name *"
                />
                <FormErrorMessage className="error-message">
                  Required
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={touched.email && !values.email}
                mb={5}
              >
                <input
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlur}
                  className="contact email"
                  placeholder="Your Email *"
                />
                <FormErrorMessage className="error-message">
                  Required
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={touched.subject && !values.subject}
                mb={5}
              >
                <input
                  data-aos="fade-up"
                  data-aos-duration="1600"
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={onBlur}
                  className="contact subject"
                  placeholder="Write a Subject"
                />
                <FormErrorMessage className="error-message">
                  Required
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={touched.message && !values.message}
                mb={5}
              >
                <textarea
                  data-aos="fade-up"
                  data-aos-duration="1800"
                  name="message"
                  err
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlur}
                  id="message"
                  placeholder="Write Your message"
                ></textarea>
                <FormErrorMessage className="error-message">
                  Required
                </FormErrorMessage>
              </FormControl>
              <button
                className="btn contact pointer"
                type="submit"
                data-aos="fade-up"
                data-aos-duration="2000"
                isLoading={isLoading}
                disabled={
                  !values.name ||
                  !values.email ||
                  !values.subject ||
                  !values.message
                }
                onClick={onSubmit}
              >
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
