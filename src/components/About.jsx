import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { HiMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Js from "../assets/images/js.png";
import Bootstrap from "../assets/images/bootstrap.png";
import Jquery from "../assets/images/jquery.webp";
import Reactjs from "../assets/images/react.png";
import Php from "../assets/images/php.png";
import Laravel from "../assets/images/laravel.png";
import Next from "../assets/images/next.png";
import Mysql from "../assets/images/mysql.png";
import Linux from "../assets/images/linux.png";
import Git from "../assets/images/git.png";
import WordPress from "../assets/images/wordpress.png";
import Ps from "../assets/images/ps.png";
import Figma from "../assets/images/figma.png"

const About = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 center wow animated zoomIn">
            <div className="about-body position-relative">
              <h1 className="about-title">About Me</h1>
              <h6 class="sub-title">Who I'm ?</h6>
              <p className="lead">
                An ambitious Front-End Developer and designer who takes great
                pride in the presentation and quality of work. <br />
                <br /> Karim is someone who can design and create simple,
                beautiful and easy to understand things. He is an expert at
                taking designs into original, exciting and new directions.
              </p>
              <h6 class="sub-title pt-3">Contact Info</h6>
              <div className="contact-info pt-2">
                <a href="mailto:ko5418301@gmail.com">
                  <p className="mail">
                    <HiMail /> ko5418301@gmail.com
                  </p>
                </a>
                <p>
                  <BsTelephoneFill /> +201124762799
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 center down wow animated zoomIn">
            <div className="skills-body position-relative">
              <h6 className="sub-title text-center">Skills</h6>
              <div className="front">
                <h3>Full-Stack</h3>
                <div className="langs">
                  <img src={Html} />
                  <img src={Css} />
                  <img src={Js} />
                  <img src={Bootstrap} />
                  <img src={Jquery} className="jquery" />
                  <img src={Reactjs} />
                  <img src={Next} />
                  <img src={Php} />
                  <img src={Laravel} />
                  <img src={Mysql} />
                </div>
              </div>
              <hr />
              <div className="back">
                <h3>General</h3>
                <div className="langs">
                  <img src={Linux} />
                  <img src={Git} />
                  <img src={WordPress} />
                  <img src={Ps} />
                  <img src={Figma} className="figma" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About