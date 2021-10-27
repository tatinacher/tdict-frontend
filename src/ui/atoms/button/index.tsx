import * as React from "react";

interface ButtonProps {
  name: string;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, name }) => (
  <button
    name={name}
    className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
  >
    {text}
  </button>
);
