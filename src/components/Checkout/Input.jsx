import React from "react";

const Input = ({ labelFor, label, type, name, value, onChange, isRequire }) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-start">
        <label htmlFor={labelFor} className="text-gray-400">
          {label}
        </label>
        {isRequire && <p className="text-red-400">*</p>}
      </div>
      <input
        type={`${type ?? "text"}`}
        className="bg-[#F5F5F5] w-[80%] px-3 py-2.5 rounded-lg outline-0 focus:ring-2 ring-gray-400"
        id={labelFor}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
