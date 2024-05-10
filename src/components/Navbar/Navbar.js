import React from "react";
import "./Navbar.css";
import { ReactComponent as UserLogo } from "../../assets/others/person-fill.svg";
import { ReactComponent as UserBasket } from "../../assets/others/basket-fill.svg";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

export default function Navbar() {
  const { authUser, isLoggedIn } = useAuth();
  const { getNumberOfProducts } = useBasket();

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
          {isLoggedIn ? (
            <>
              <h3>{authUser.username}</h3>
              <NavLink>
                <UserLogo />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="login-nav-link" to="/auth/login">
                Conecteaza-te
              </NavLink>
            </>
          )}

          <NavLink to="/basket">
            <UserBasket />
          </NavLink>
          <span className="basket-counter">{getNumberOfProducts()}</span>
        </div>
      </div>
    </nav>
  );
}
