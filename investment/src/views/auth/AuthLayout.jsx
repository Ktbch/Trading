import React from "react";
import { Link } from "react-router-dom";

export const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center p-2 md:p-10 h-screen  bg-gray-50">
      <div className="md:p-20 p-5 border w-[350px] md:w-[500px] rounded-md bg-white ">
        <h1 className="text-center text-2xl mb-5 font-bold">LogIn</h1>
        <div className="text-center text-xl w-full  font-bold gap-3 ">
          <div className="">
            {/* <h1>{layoutName}</h1> */}
            {children}
          </div>
        </div>
        <div className="text-sm mt-5 cursor-pointer font-semibold justify-between flex gap-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/Sign-up"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
