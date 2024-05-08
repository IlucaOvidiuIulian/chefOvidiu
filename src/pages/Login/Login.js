import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

import { Link } from "react-router-dom";

const Login = () => {
  const { setAuthUser, setIsLoggedIn } = useAuth();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginForm;

    if (email == null) {
      // handle error submit
    }
    if (password == null) {
      // handle password submit
    }

    fetch(`http://localhost:4000/users?email=${email}&password=${password}`)
      .then((res) => {
        if (!res.ok) {
          setIsLoggedIn(false);
          setAuthUser(null);
          console.log("Logging failed! Error from the backend json");
        }

        return res.json();
      })
      .then((data) => {
        if (data[0] == null || data[0] === "") {
          setIsLoggedIn(false);
          setAuthUser(null);
          console.log("Logging failed! Username or password wrong");
        }
        let user = data[0];
        user.password = "";
        setIsLoggedIn(true);
        setAuthUser(user);
        console.log("Logged succesfully", user.username);
      });
  };

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
      <br />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Introdu parola"
        required
      />
      <br />
      <Link to="/auth/forgotPassword">Am uitat parola!</Link>
      <Link to="/auth/register">Am uitat parola!</Link>
      <button>Nu am cont!</button>
      <br></br>
      <button type="submit">Conecteaza-te</button>
    </form>
  );
};

export default Login;
