import React from "react";
import "./input.css";
export default function InputCard({
  placeholder,
  type,
  name,
  value,
  onChange,
  multiple,
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        className=""
        multiple={multiple}
      />
    </div>
  );
}
