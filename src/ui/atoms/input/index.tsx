import * as React from "react";

interface InputProps {
  type: "text" | "password" | "email";
  placeholder?: string;
  name: string;
}
export const Input: React.FC<InputProps> = ({ type, placeholder, name }) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    className="py-2 px-4 mb-2 border-gray-500 border rounded-xl"
  />
);
