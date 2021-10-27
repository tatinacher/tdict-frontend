import { Header } from "@ui/organisms";
import * as React from "react";

export const DefaultTemplate: React.FC<{ navigation: any }> = ({
  navigation,
  children,
}) => (
  <div className="flex flex-col items-center">
    <Header navigation={navigation} />
    <div
      className="p-12 h-screen"
      style={{ maxWidth: "1024px", width: "100%" }}
    >
      {children}
    </div>
  </div>
);
