import "./AuthLayout.css";

import { Outlet } from "react-router-dom";

import Logo from "../components/Logo/Logo";
import { ReactComponent as FacebookIcon } from "../../assets/social-media/facebook-f.svg";
import { ReactComponent as GoogleIcon } from "../../assets/social-media/google.svg";

export default function RootLayout() {
  return (
    <>
      <div className="auth-layout">
        <div className="auth-form">
          <Outlet />
          <div className="loginGoogle">
            <a href="#">
              <FacebookIcon />
            </a>
          </div>

          <div className="loginFacebook">
            <a href="#">
              <GoogleIcon />
            </a>
          </div>
        </div>
        <div className="logo">{/* <Logo /> */}</div>
      </div>
    </>
  );
}
