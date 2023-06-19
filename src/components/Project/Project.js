import React from "react";
import "./Project.css";
import Project1 from "../../img/Web_Development.png";
import Project2 from "../../img/Mobile_Development.png";
import Project3 from "../../img/Desktop_Development.png";

function Project() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading" data-aos="fade-down" data-aos-duration="1500">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          In this section which including my latest software development
          projects,
        </p>
        <p className="heading p__color">
          additionally more information find in given url.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col__3__project"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Web Development</h5>
                <h4 className="project__text">Resto - Web Application</h4>
                <a
                  href="https://github.com/imAravinda/restaurant_management_system"
                  className="project__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div
            className="col__3__project"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Mobile Development</h5>
                <h4 className="project__text">Resto - Mobile Application</h4>
                <a
                  href="https://github.com/imAravinda/restaurant_management_system"
                  className="project__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div
            className="col__3__project"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">
                  Desktop Appliaction Development
                </h5>
                <h4 className="project__text">ESV - Desktop Application</h4>
                <a
                  href="https://github.com/PasinduRashmika/Essential-Service-Vaccinated-Drivrs-Identification-System"
                  className="project__btn"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <a
              href="https://github.com/PraveenChamod"
              target="_blank"
              rel="noreferrer"
            >
              <button className="view__more pointer btn">View more</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
