import React from "react";
import "./Contact.css";
import { ReactComponent as EmailIcon } from "../../assets/contact/email.svg";
import { ReactComponent as PhoneIcon } from "../../assets/contact/phone.svg";
import { ReactComponent as MapPinIcon } from "../../assets/contact/map-pin.svg";
import Logo from "../../components/Logo/Logo";
function Contact() {
  return (
    <div className="contact">
      <Logo className="logo" width="300" />
      <div className="contact-infos">
        <h1>Ne gasesti cu drag, oricand la :</h1>
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
  );
}

export default Contact;
