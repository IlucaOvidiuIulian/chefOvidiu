import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../apis/AuthApis";
import { useBasket } from "../../contexts/BasketContext";

const Register = () => {
  const { setAuthUser, setIsLoggedIn } = useAuth();
  const { setBasket } = useBasket();
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    const { username, email, password } = registerForm;
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      // throw error
      console.log("Logging failed. Reason: input data is mandatory");
    }

    const userRegisterRequest = {
      username: username,
      email: email,
      password: password,
      permission: "client",
      basket: [],
      orders: [],
      cards: [],
      locations: [],
    };

    register(userRegisterRequest, setAuthUser, setIsLoggedIn, setBasket);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Înregistrează-te</h2>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="Introdu numele"
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Introdu email"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Introdu parola"
      />
      <div className="form-actions">
        <Link to="/auth/login"> Am deja cont </Link>
        <button type="submit">Înregistrează-te</button>
      </div>
    </form>
  );
};

export default Register;
