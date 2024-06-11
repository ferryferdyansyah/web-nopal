import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/login.css";

function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleToggle = () => {
    setRememberMe(!rememberMe);
  };
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-red-700 font-poppins text-center mb-4">
          Megament
        </h1>
        <div className="mt-5 bg-white rounded-xl shadow-md w-80 flex flex-col items-center justify-center">
          <div
            className="bg-red-600 rounded shadow-md w-full w-72 h-32 flex items-center justify-center"
            style={{ marginTop: "-1rem" }}
          >
            <p className="text-white text-xl font-poppins">Sign In</p>
          </div>
          <div className="flex flex-col mt-10 w-full px-4">
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
            <input
              type="password"
              placeholder="Current Password"
              className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
          </div>
          <div className="flex mb-4 w-full px-4">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <span className="ml-2">Remember Me</span>
          </div>
          <div className="w-full px-4 rounded-xl mt-2">
            <Link to="/Dashboard">
            <button className="py-3 bg-red-600 w-full px-10 rounded-lg text-white text-sm font-poppins">
              SIGN IN
            </button>
            </Link>
          </div>
          <div className="py-5 px-4 h-20">
            <p className="align-center">
              Dont have a account? <span className="text-red-600">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
