import * as React from "react";
import { AddWordForm } from "@features";
import { DefaultTemplate } from "@ui";
import { navigationPublic, navigationPrivate } from "@lib";

import { Title } from "@ui";

export const AddWordPage: React.FC<{ isAuth: boolean }> = ({
  isAuth,
}: {
  isAuth: boolean;
}) => (
  <DefaultTemplate
    navigation={isAuth ? navigationPrivate : navigationPublic}
    isAuth={isAuth}
  >
    <Title>Add new word</Title>
    <AddWordForm />
  </DefaultTemplate>
);
