// concepts props- properties

export const Input = ({ type, placeholder, register, name, className }) => {
  console.log(className);
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      {...register(name)}
    />
  );
};
