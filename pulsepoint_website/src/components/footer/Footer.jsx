import LogoًWhite from "../../assets/logoWhite.png";
import "./styles/Footer.css";
import React from "react";
import {Link} from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={LogoًWhite} alt="Logo" className="logoSize1" />
            <p className="num_h">
              <i className="fa-solid fa-phone-volume"></i> 12345
            </p>
            <p className="email_h">pulsepoint_hospital@xyz.com</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/#serviceSection">Services</Link>
              </li>
              <li>
                <Link to="/doctors">Doctors</Link>
              </li>
              <li>
                <Link to="/appointments-bookings">Appointments</Link>
              </li>
              <li>
                <Link to="/pharmacy">Pharmacy</Link>
              </li>
              <li>
                <Link to="#">Emergency</Link>
              </li>
              <li>
                <Link to="/ICU">ICU</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social">
            <a href="#">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <p>A product of Team C</p>
          <p>© 2025 DEPI. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
