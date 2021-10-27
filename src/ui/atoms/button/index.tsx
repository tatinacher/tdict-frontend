import * as React from "react";

interface ButtonProps {
  name: string;
  onClick?: () => void;
  text: string;
  type?: "button" | "submit";
}

export const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  text,
  type = "button",
}) => (
  <button
    className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
    name={name}
    onClick={onClick}
    type={type}
  >
    {text}
  </button>
);
