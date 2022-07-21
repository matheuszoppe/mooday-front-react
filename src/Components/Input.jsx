import React from "react";

const Input = ({id, type, placeholder, title}) => {
  return (
    <>
      <label
        className="block text-gray-700 text-base font-bold mb-2"
        htmlFor="email"
      >
        {title}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-3 mb-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></input>
    </>
  );
};

export default Input;
