import React from "react";

const ButtonComponent = ({ style, children, ...rest }) => {
  return (
    <button
      className={`px-2 py-3 w-full text-white  bg-blue-400 rounded active:ring-2 active:ring-blue-600 duration-200 ${style}`}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
