import * as React from "react";
import { loader } from "@assets";

export const Loader: React.FC = () => (
  <div className="h-full w-full flex justify-center align-center">
    <div
      className="animate-spin flex"
      style={{ height: "fit-content", width: "fit-content" }}
    >
      <img src={loader} alt="loader" />
    </div>
  </div>
);
