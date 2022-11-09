import "./styles.css";
import Login from "./components/Login";
import React, { useState } from "react";
import Profile from "./components/Profile";
import { LoginContext } from "./Contexts/LoginContext";

export default function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setusername] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setusername, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}
