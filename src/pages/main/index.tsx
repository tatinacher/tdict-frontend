import * as React from "react";
import { TranslationCard } from "@features";
import { DefaultTemplate, Title } from "@ui";
import { navigationPublic, navigationPrivate } from "@lib";

export const MainPage: React.FC<{ isAuth: boolean }> = ({
  isAuth,
}: {
  isAuth: boolean;
}) => (
  <DefaultTemplate
    navigation={isAuth ? navigationPrivate : navigationPublic}
    isAuth={isAuth}
  >
    <Title>Save and learn new words</Title>
    <TranslationCard
      translateEn="to decrease the strength"
      translateRu="уменьшить"
      word="abate"
    />
  </DefaultTemplate>
);
