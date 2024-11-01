import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Username and Password is required");
      return; // exits the function if the inputs are empty
      
    }

    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      alert("login successfull");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(
        `login error message:${error.respone?.data?.message || error.message}`
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleLogin} className="w-50 mx-auto">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control mb-3"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control mb-3"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
