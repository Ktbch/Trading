import React from "react";
import FormSchema from "../design-system/form/FormSchema";
import { useForm } from "react-hook-form";
import { SIGNUP_FIELDS } from "./auth/shared/SigupFielda";
import { SignupLayout } from "./auth/shared/SignupLayout";

export const Signup = () => {
  const { handleSubmit, register, error } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    // have a authLayout
    <SignupLayout>
      <FormSchema
        error={error}
        handleSubmit={handleSubmit(submit)}
        register={register}
        fields={SIGNUP_FIELDS}
        className={
          "bg-transparent font-thin text-base px-10 text-start border border-gray-100 rounded-lg py-1"
        }
      />
    </SignupLayout>
  );
};
