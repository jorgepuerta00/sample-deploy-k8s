import React from "react";

export interface IInputProps {
  type: any,
  name: any,
  placeholder?: any,
  errors: any,
  validation: any
}

const Input: React.FC<IInputProps> = ({
  type,
  name,
  placeholder,
  errors,
  validation
}) => {

  return (
    <>
      <input 
        type={type}
        aria-invalid={errors[name] ? "true" : "false"} 
        placeholder={placeholder}
        id={name}
        name={name}
        ref={validation} 
      /> 
      {errors[name] && errors[name].type === "required" && (
        <span role="alert">This is required</span>
      )}
      {errors[name] && errors[name].type === "maxLength" && (
        <span role="alert">Max length exceeded</span>
      )}
      {errors[name] && errors[name].type === "min" && (
        <span role="alert">Should be greatter than 0</span>
      )}
      {errors[name] && errors[name].type === "max" && (
        <span role="alert">Should be lower than 100</span>
      )}
      {errors[name] && errors[name].type === "pattern" && (
        <span role="alert">Should be valid email</span>
      )}
      <br /><br />
    </>
  );
}

export default Input;