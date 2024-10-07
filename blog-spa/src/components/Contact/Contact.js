import React from "react";
import "./Contact.css"
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiSemanticweb } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="contact">
        <div className="container">
          <h2 className="contact__title">
            <BsEmojiSmile />
            <span>Contact Me</span>
          </h2>
          <div className="contact__wrapper">
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.5123879207817!2d49.68043167463322!3d34.08201201615962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fec955cd7016c61%3A0xd7144921a1d490f4!2sBeheshti%20St!5e0!3m2!1sen!2s!4v1728301539268!5m2!1sen!2s"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact__info">
              <p className="contact__phone">
                <FaPhone />
                <span>+98123456789</span>
              </p>
              <p className="contact__email">
                <BiLogoGmail />
                <a className="contact__link" href="mailto:1379farzanenazmabadi@gmail.com">1379farzanenazmabadi@gmail.com</a>
              </p>
              <div className="contact__social">
                <a className="contact__link" href="https://instagram.com/frx25_">
                  <FaInstagram />
                </a>
                <a className="contact__link" href="https://github.com/farzane-na">
                  <FaGithub />
                </a>
                <a className="contact__link" href="https://farzanenazmabadi.liara.run">
                  <SiSemanticweb />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
