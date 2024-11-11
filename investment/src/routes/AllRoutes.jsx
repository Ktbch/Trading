import React from "react";
import { Route, Routes } from "react-router-dom";
import { Marketing } from "../hooks/Marketing";
import { Signin } from "../views/auth/Signin";
import { Signup } from "../views/Signup";
import Home from "../pages/Home";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Marketing />} />
        <Route path="/Sign-in" element={<Signin />} />
        <Route path="/Sign-up" element={<Signup />} />
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
