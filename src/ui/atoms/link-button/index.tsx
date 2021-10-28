import * as React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to: string;
  text: string;
}

export const LinkButton: React.FC<ButtonProps> = ({ to, text }) => (
  <Link
    className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
    to={to}
  >
    {text}
  </Link>
);
