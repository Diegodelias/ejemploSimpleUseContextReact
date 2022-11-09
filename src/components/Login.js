import React, { useState, useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

function Login() {
  //destrcuturing de variables que vienen en login contex
  const { setusername, setShowProfile } = useContext(LoginContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => {
          setusername(event.target.value);
        }}
      />
      <input type="text" placeholder="Password..." />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        LOGIN
      </button>
      {/* {showProfile && <h1>{username}</h1>} */}
    </div>
  );
}

export default Login;
