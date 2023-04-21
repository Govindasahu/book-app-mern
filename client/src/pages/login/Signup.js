import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandle = async () => {
    if (!username || !email || !password) {
      return alert("Please fill all the inputs");
    }
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      navigate("/");
    } catch (error) {
      alert("something wrong!");
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <h2>SIGNUP PAGE</h2>
        <input
          type="text"
          placeholder="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="lInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="lInput"
        />
        `
        <button onClick={signupHandle} className="lButton">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
