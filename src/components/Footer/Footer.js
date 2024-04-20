import React from "react";
import "./Footer.css";
import { ReactComponent as EmailIcon } from "../../assets/contact/email.svg";
import { ReactComponent as PhoneIcon } from "../../assets/contact/phone.svg";
import { ReactComponent as MapPinIcon } from "../../assets/contact/map-pin.svg";
import { ReactComponent as FacebookIcon } from "../../assets/social-media/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/social-media/instagram-1.svg";
import Logo from "../Logo/Logo";
export default function Footer() {
  return (
    <footer>
      <div className="footer-design-box">
        <Logo width="100" />
      </div>
      <div className="footer-wrapper">
        <div className="footer-links">
          <a href="#">
            <span>Istoric comenzi</span>
          </a>
          <a href="#">
            <span>Contul meu</span>
          </a>
          <a href="#">
            <span>Termeni si conditii</span>
          </a>
          <a href="#">
            <span>Tarife alte zone</span>
          </a>
          <a href="#">
            <span>Regulament Companii</span>
          </a>
          <a href="#">
            <span>A.N.P.C.</span>
          </a>
        </div>
        <div className="mid-section">
          <div className="footer-testimonial">
            <span>
              Locul in care lasi in urma agitatia zilnica si te bucuri de
              momente indelungate de rasfat.
            </span>
          </div>
          <div>
            <div className="contact-info">
              <EmailIcon />
              <span>chef.ovidiu@gmail.com</span>
            </div>
            <div className="contact-info">
              <PhoneIcon />
              <span>0332 441 450</span>
            </div>
            <div className="contact-info">
              <MapPinIcon />
              <span>Amurgului nr.16, Dorohoi, Botosani</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          <span>Urmareste-ne si pe</span>
          <div>
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
