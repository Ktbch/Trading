import React from "react";

export const Plans = () => {
  return (
    <div>
      <div className="text-xl font-semibold mt-8 text-center text-gray-800">
        <h1>You Do Not Have Any Active Investment Plan</h1>
      </div>
      <button className="Border mt-8 items-center justify-center flex ml-28 md:ml-44  bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white font-semibold">
        Create Plan
      </button>
    </div>
  );
};

export default Plans;
