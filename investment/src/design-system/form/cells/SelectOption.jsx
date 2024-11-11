import React from "react";

export const SelectOption = ({ option, name, register }) => {
  return (
    <div>
      <select {...register(name)} name={name}>
        {option.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
