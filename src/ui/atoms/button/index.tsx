import * as React from "react";

interface ButtonProps {
  name: string;
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, name, onClick }) => (
  <button
    name={name}
    onClick={onClick}
    className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
  >
    {text}
  </button>
);
