import React from "react";
import FormSchemas from "../../design-system/form/organs/FormSchemas";
import { useForm } from "react-hook-form";
import { SIGNIN_FIELDS } from "./shared/constant";
import AuthLayout from "./AuthLayout";

export const Signin = () => {
  const { handleSubmit, register, error } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    // have a authLayout
    <AuthLayout>
      <FormSchemas
        error={error}
        handleSubmit={handleSubmit(submit)}
        register={register}
        fields={SIGNIN_FIELDS}
        className={
          "bg-transparent font-thin text-base px-10 text-start border border-gray-100 rounded-lg"
        }
      />
    </AuthLayout>
  );
};
