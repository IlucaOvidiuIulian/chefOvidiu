import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
import login from "../../apis/AuthApis";

const Login = () => {
  const { setAuthUser, setIsLoggedIn, isLoggedIn } = useAuth();
  const { setBasket } = useBasket();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    // Take user login input data
    const { email, password } = loginForm;

    // Login
    login(email, password, setAuthUser, setIsLoggedIn, setBasket);

    setRedirectToHome(true);
  }

  if (isLoggedIn || redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2> Conectare</h2>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Introdu emailul"
        required
      />

      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Introdu parola"
        required
      />
      <div className="form-actions">
        <Link to="/auth/forgotPassword">Am uitat parola!</Link>
        <Link to="/auth/register">Nu am cont!</Link>
        <button type="submit">Conecteaza-te</button>
      </div>
    </form>
  );
};

export default Login;
