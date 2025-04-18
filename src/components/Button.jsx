import React from "react";

const Button = ({ onClick, btnText }) => {
  return (
    <button
      className="w-full h-10 bg-indigo-600 text-white flex items-center justify-center mt-5 rounded-md border-transparent cursor-pointer"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
