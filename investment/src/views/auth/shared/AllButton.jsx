import React from "react";
import { BiLoader } from "react-icons/bi";

export const AllButton = ({ buttonName, classname, loading }) => {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-200 ${
        classname || ""
      }`}
      type="submit"
      disabled={loading}
    >
      {loading ? <BiLoader /> : buttonName}
    </button>
  );
};
