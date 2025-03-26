import React from "react";

const Input = ({ value, placeholder, type, id, name, onChange }) => {
  return (
    <input
      value={value}
      className="h-10 w-full border rounded-md p-2 mt-3 outline-none"
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
