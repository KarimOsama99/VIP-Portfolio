import React, { useEffect, useRef } from 'react';
import WOW from 'wowjs';
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let action = document.getElementById("action");
    let testInput = document.querySelector("input");

    emailjs
      .sendForm("service_lory4c7", "template_577lzbr", form.current, {
        publicKey: "user_BDxGm3MKTV4jLdA1IUEiG",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          action.classList.toggle("d-none");
        },
        (error) => {
          // console.log("FAILED...", error.text);
          action.innerHTML = error.text;
        }
      );
      setTimeout(() => {
        e.target.reset();
        action.classList.toggle("d-none");
      }, 4500);
  };

  return (
    <div className="contact">
      <div className="container">
        <div class="row align-items-end">
          <div class="text-center mb-3">
            <div class="section-title pb-20  wow animated bounceIn">
              <h6 class="sub-title">Keep In Touch</h6>
              <h4 class="title">
                Leave a <span>Message.</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row grid form">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form-group"
          >
            <div class="mb-3 col-sm-12 w-100 wow animated backInLeft">
              <label for="username" class="form-label">
                Your Name
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="user_name"
                required
              />
            </div>
            <div class="mb-3 wow animated backInRight">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="user_email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                required
                // placeholder='example@email.com'
              />
              <div id="emailHelp" class="form-text">
                I'll never share your email with anyone else.
              </div>
            </div>
            <div class="input-group wow animated backInLeft">
              <span class="input-group-text">Your Message</span>
              <textarea
                class="form-control"
                name="message"
                aria-label="With textarea"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="send mt-3 wow animated backInUp">
              Send <AiOutlineSend />
            </button>
            <div id="action" className="pt-2 d-none wow animated backInLeft">
              Wasal Ya A5oya !!
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact