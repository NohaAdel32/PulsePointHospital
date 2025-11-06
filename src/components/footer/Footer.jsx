import LogoًWhite from "../../assets/logoWhite.png";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div class="footer-top">
          <div class="footer-logo">
            <img src={LogoًWhite} alt="Logo" className="logoSize1" />
            <p className="num_h">
              <i class="fa-solid fa-phone-volume"></i> 12345
            </p>
            <p className="email_h">pulsepoint_hospital@xyz.com</p>
          </div>

          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Doctors</a>
              </li>
              <li>
                <a href="#">Appointments</a>
              </li>
              <li>
                <a href="#">Pharmacy</a>
              </li>
              <li>
                <a href="#">Emergency</a>
              </li>
              <li>
                <a href="#">ICU</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="social">
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
