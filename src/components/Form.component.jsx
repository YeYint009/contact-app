import React from "react";

const FormComponent = ({ name, type, label, placeholder = "", ...rest }) => {
  return (
    <div className="flex flex-col mt-2">
      <label htmlFor={name} className=" font-semibold">
        {label}
      </label>
      <input
        {...rest}
        className=" border-2 border-blue-200 rounded focus:border-blue-400 focus:outline-none"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormComponent;
