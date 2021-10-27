import * as React from "react";

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => (
  <div
    className="shadow-md p-6 flex flex-shrink-0 rounded-xl items-center"
    style={{ width: "fit-content" }}
  >
    {children}
  </div>
);
