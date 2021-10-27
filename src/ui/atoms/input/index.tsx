import * as React from "react";

interface InputProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: "text" | "password" | "email";
  value: string;
}
export const Input: React.FC<InputProps> = ({
  name,
  onChange,
  placeholder,
  type,
  value,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    className="py-2 px-4 mb-2 border-gray-500 border rounded-xl"
  />
);
