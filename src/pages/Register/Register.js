import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

class UserRegisterRequest {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.permission = "client";
    this.basket = [];
    this.orders = [];
    this.cards = [];
    this.locations = [];
  }
}
const Register = () => {
  const { setAuthUser, setIsLoggedIn } = useAuth();
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

    const userRegisterRequest = new UserRegisterRequest(
      username,
      email,
      password
    );

    // Check if user already exists
    fetch(`http://localhost:4000/users?email=${email}`)
      .then((res) => {
        if (!res.ok) {
          setIsLoggedIn(false);
          setAuthUser(null);
          console.log("Logging failed! Error from the backend json");
        }

        return res.json();
      })
      .then((data) => {
        if (data[0] === null || data[0] === undefined) {
          // create new user if not already exists
          fetch("http://localhost:4000/users", {
            method: "POST",
            body: JSON.stringify(userRegisterRequest),
          })
            .then((res) => {
              if (!res.ok) {
                setIsLoggedIn(false);
                setAuthUser(null);
              }
              return res.json();
            })
            .then((data) => {
              console.log("am intrat in handlesubmit6");
              data.password = "";
              setIsLoggedIn(true);
              setAuthUser(data);
              console.log("Registered");
            });
        } else {
          // throw error if already exists;
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3> Username: </h3>
      <input type="text" name="username" onChange={handleChange} />
      <h3> Email: </h3>
      <input type="email" name="email" onChange={handleChange} />
      <h3> Password: </h3>
      <input type="password" name="password" onChange={handleChange} />
      <button> Am deja cont </button>
      <button type="submit">Înregistrează-te</button>
    </form>
  );
};

export default Register;
