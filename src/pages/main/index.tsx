import * as React from "react";
import { TranslationCard } from "@features";
import { DefaultTemplate } from "@ui";
import { navigation } from "@lib";

export const MainPage: React.FC = () => (
  <DefaultTemplate navigation={navigation}>
    <TranslationCard
      translateEn="to decrease the strength"
      translateRu="уменьшить"
      word="abate"
    />
  </DefaultTemplate>
);
