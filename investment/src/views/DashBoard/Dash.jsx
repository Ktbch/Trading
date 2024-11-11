import React from "react";
import OptionComponent from "../../views/auth/shared/OptionComponent";
import Plans from "./Plans";
export const Dash = () => {
  return (
    <div className=" md:p-4 p-2">
      <div className="flex items-center justify-center gap-5 border md:py-3 md:px-64 bg-white">
        <div className=" py-7  text-7xl text-blue-400">
          <h1>0.00</h1>
        </div>
        <OptionComponent />
      </div>
      <div className=" mt-7 flex flex-col items-center justify-center">
        {/* <div className="text-xl font-semibold text-gray-800">
          <h1>You Do Not Have Any Active Investment Plan</h1>
        </div>
        <button className="Border mt-6 bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white font-semibold">
          Create Plan
        </button> */}
        <Plans />
      </div>
    </div>
  );
};

export default Dash;
