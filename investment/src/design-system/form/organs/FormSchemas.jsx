import React from "react";
import RenderForm from "../RenderForm";
import FormButton from "../cells/FormButton";
import { Link } from "react-router-dom";

const FormSchemas = ({
  error,
  type,
  register,
  fields,
  handleSubmit,
  option,
  className,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-5">
      {fields.map((field, index) => (
        <RenderForm
          error={error}
          name={field.name}
          placeholder={field.placeholder}
          register={register}
          type={field.type}
          key={index}
          option={option}
          className={className}
        />
      ))}
      <Link to={"/Home"}>
        <FormButton
          buttonName="LogIn"
          className="border w-[150px] md:w-full md:px-36 px-32 p-2 text-white bg-blue-500"
        />
      </Link>
    </form>
  );
};

export default FormSchemas;
