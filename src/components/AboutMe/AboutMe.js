import React from "react";
import "./AboutMe.css";
import "../../App.css";
import aboutImg from "../../img/praveen6.png";
function AboutMe() {
  return (
    <div className="about component__space__about" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2" data-aos="fade-right" data-aos-duration="1500">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading" data-aos="fade-down" data-aos-duration="1500">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color" data-aos="fade-left" data-aos-duration="1500">
                As a driven and enthusiastic undergraduate student pursuing a
                degree in computer science, I am passionate about technology and
                its ability to solve complex problems. My coursework and
                personal projects have equipped me with a strong foundation in
                programming languages and software development. I am eager to
                apply my skills and knowledge to an internship or entry-level
                position in the technology industry to gain hands-on experience
                and further develop my expertise. Additionally, I am a proactive
                and collaborative team member who is committed to continuous
                learning and growth in the field of computer science.
              </p>
              <p className="about__text p__color" data-aos="fade-left" data-aos-duration="1500">
                Additionally, I am a proactive and collaborative team member who
                is committed to continuous learning and growth in the field of
                computer science.
              </p>
              <div className="about__button d__flex align__items__center" data-aos="fade-left" data-aos-duration="1500">
                <a href="#">
                  <button className="about btn pointer">Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
