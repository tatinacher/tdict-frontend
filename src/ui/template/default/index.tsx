import { Header } from "@ui/organisms";
import * as React from "react";

export const DefaultTemplate: React.FC<{ navigation: any; isAuth: boolean }> =
  ({ navigation, children, isAuth }) => (
    <div className="flex flex-col items-center">
      <Header navigation={navigation} isAuth={isAuth} />
      <div
        className="p-12 h-screen"
        style={{ maxWidth: "1024px", width: "100%" }}
      >
        {children}
      </div>
    </div>
  );
