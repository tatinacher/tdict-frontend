import * as React from "react";
import { TranslationCard } from "@features";
import { DefaultTemplate } from "@ui";

const navigation = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Login",
    path: "/login",
  },
];

export const MainPage: React.FC = () => (
  <DefaultTemplate navigation={navigation}>
    <TranslationCard
      translateEn="to decrease the strength"
      translateRu="уменьшить"
      word="abate"
    />
  </DefaultTemplate>
);
