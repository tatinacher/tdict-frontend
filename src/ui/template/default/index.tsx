import * as React from "react";

export const DefaultTemplate: React.FC = ({ children }) => (
  <>
    <nav className="bg-green-500 h-16 shadow-md"></nav>
    <div>{children}</div>
  </>
);
