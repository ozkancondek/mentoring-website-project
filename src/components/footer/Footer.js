import React from "react";
import "./footer.css";
import {
  FaRaspberryPi,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            {/* <FaRaspberryPi /> */} Website<span>Name</span>
          </h3>

          <p className="footer-links">
            <a href="#">Home</a> - <a href="#">Blog</a> -{" "}
            <a href="#">Locations</a> -<a href="#">Mentoring</a> -{" "}
            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Websitename © 2021</p>

          <div className="footer-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <p>Contact Us</p>

          <form type="submit">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
};
