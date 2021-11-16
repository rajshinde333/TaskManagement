import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Auth/Login.js";
import Register from "../Auth/Register.js";
import Home from "../Home.js";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default PageRoutes;
