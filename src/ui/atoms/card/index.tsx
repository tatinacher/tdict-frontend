import * as React from "react";

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => (
  <div className="shadow-md p-6 flex flex-shrink-0 rounded-xl items-center max-w-sm">
    {children}
  </div>
);
