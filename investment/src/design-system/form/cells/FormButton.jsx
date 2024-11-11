import React from "react";
import { BiLoader } from "react-icons/bi";

export const FormButton = ({ buttonName, className, loading }) => {
  return (
    <button
      className={!className ? "" : className}
      type="submit"
      disabled={loading}
    >
      {loading ? <BiLoader /> : buttonName}
    </button>
  );
};

export default FormButton;
