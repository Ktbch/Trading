import React from "react";

export const LabelAndError = ({ name, error, children }) => {
  return (
    <div className="flex items-start flex-col gap-5">
      <label htmlFor={name}>{name}</label>
      {children}
      {error && <span>{error.message}</span>}
    </div>
  );
};
