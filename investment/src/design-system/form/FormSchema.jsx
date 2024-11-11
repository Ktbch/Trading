import React from "react";
import RenderForm from "./RenderForm";
import FormButton from "./cells/FormButton";

const FormSchema = ({
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
      <FormButton
        buttonName="SignIn"
        className="border  w-full p-3 text-white bg-blue-500"
      />
    </form>
  );
};

export default FormSchema;
