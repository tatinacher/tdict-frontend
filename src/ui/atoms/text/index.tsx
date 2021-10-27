import * as React from "react";

export const Text: React.FC<{ size?: "l" | "m" | "s" }> = ({
  size = "s",
  children,
}) => (
  <p
    className={size === "l" ? "text-2xl" : size === "m" ? "text-xl" : "text-sm"}
  >
    {children}
  </p>
);
