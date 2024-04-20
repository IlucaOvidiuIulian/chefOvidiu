import React from "react";
import "./Navbar.css";
import { ReactComponent as UserLogo } from "../../assets/others/person-fill.svg";
import { ReactComponent as UserBasket } from "../../assets/others/basket-fill.svg";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="nav-links">
          <a href="#">
            <Logo width={96} />
          </a>
          <a href="#">Acasa</a>
          <a href="#">Meniu</a>
          <a href="#">Despre</a>
          <a href="#">Contact</a>
        </div>
        <div className="user-links">
          <h3>Ovidiu!</h3>
          <a href="_blank">
            <UserLogo />
          </a>
          <button>
            <UserBasket />
          </button>
          <span className="basket-counter">5</span>
        </div>
      </div>
    </nav>
  );
}
