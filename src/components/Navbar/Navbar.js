import React from "react";
import "./Navbar.css";
import { ReactComponent as UserLogo } from "../../assets/others/person-fill.svg";
import { ReactComponent as UserBasket } from "../../assets/others/basket-fill.svg";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="nav-links">
          <NavLink to="/">
            <Logo width={96} />
          </NavLink>
          <NavLink to="/">Acasa</NavLink>
          <NavLink to="/meniu">Meniu</NavLink>
          <NavLink to="/despre">Despre</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="user-links">
          <h3>Ovidiu!</h3>
          <NavLink>
            <UserLogo />
          </NavLink>
          <button>
            <UserBasket />
          </button>
          <span className="basket-counter">5</span>
        </div>
      </div>
    </nav>
  );
}
