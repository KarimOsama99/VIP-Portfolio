import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import WOW from "wowjs";
import { HiOutlineCloudDownload } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import cy from "../assets/cy.png";
import cv from "../assets/karimCV.pdf";
import { NavLink } from "react-router-dom";

const Home = () => {
useEffect(() => {
  new WOW.WOW({
    live: false,
  }).init();
}, []);

  return (
    <div className="home">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-sm-12 col-lg-6">
            <h1 className="hero wow animated bounceIn">
              Karim Osama <br />
            </h1>
            <p className="bio">
              I'm
              <span className="name">
                <Typewriter
                  options={{
                    strings: [
                      "Freelancer",
                      "Full-Stack Developer",
                      "Software Engineer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </p>
            <div className="btns">
              <a
                href={cv}
                className="cv wow animated backInLeft"
                id="cv"
                download
              >
                Download CV <HiOutlineCloudDownload />
              </a>
              <NavLink
                to="/contact"
                className="contact-btn  wow animated backInRight"
              >
                Contact Me
              </NavLink>
            </div>
            <div className="social-links">
              <a
                href="https://www.facebook.com/karim.osama.585112"
                target="_blank"
                className="wow animated backInLeft"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/karim-osama-b21a04233/"
                target="_blank"
                className="wow animated backInUp"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/KarimOsama99?tab=repositories"
                target="_blank"
                className="wow animated backInRight"
              >
                <BsGithub />
              </a>
            </div>
          </div>
          <div className="home-img col-md-6 wow animated bounceInRight">
            <img src={cy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
