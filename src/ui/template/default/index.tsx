import { Header } from "@ui/organisms";
import * as React from "react";

export const DefaultTemplate: React.FC<{ navigation: any }> = ({
  navigation,
  children,
}) => (
  <>
    <Header navigation={navigation} />
    <div className="p-12 h-screen">{children}</div>
  </>
);
