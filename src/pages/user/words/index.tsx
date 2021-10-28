import * as React from "react";
import { DictionaryList } from "@features";
import { DefaultTemplate, Title } from "@ui";
import { navigationPublic, navigationPrivate } from "@lib";

export const WordsPage: React.FC<{ isAuth: boolean }> = ({
  isAuth,
}: {
  isAuth: boolean;
}) => (
  <DefaultTemplate
    navigation={isAuth ? navigationPrivate : navigationPublic}
    isAuth={isAuth}
  >
    <div className="p-6">
      <Title>My words</Title>
    </div>
    <DictionaryList />
  </DefaultTemplate>
);
