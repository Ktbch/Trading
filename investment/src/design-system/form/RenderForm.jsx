import FormInput from "./organs/FormInput";
import FormSelect from "./organs/FormSelect";

const RenderForm = ({
  error,
  type,
  placeholder,
  register,
  name,
  option,
  className,
}) => {
  const formProps = {
    error,
    type,
    placeholder,
    register,
    name,
    option,
    className,
  };

  switch (type) {
    case "text":
    case "email":
    case "number":
    case "password":
      return <FormInput {...formProps} />;
    case "select":
      return <FormSelect {...formProps} />;
    default:
      return <input type="text" className="border" />;
  }
};

export default RenderForm;
