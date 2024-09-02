import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Profile from "./pages/profile/Profile";
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home/>} />
      <Route exact path="/login" element={ <Login/>} />
      <Route exact path="/register" element={ <Register/>} />
      <Route exact path="/profile/:username" element={ <Profile/>} />
    </Routes>
  );
}

export default App;
