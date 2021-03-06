import * as React from "react";
import { DefaultTemplate } from "@ui";
import { navigationPublic, navigationPrivate } from "@lib";

import { Title } from "@ui";

export const DictionaryPage: React.FC<{ isAuth: boolean }> = ({
  isAuth,
}: {
  isAuth: boolean;
}) => (
  <DefaultTemplate
    navigation={isAuth ? navigationPrivate : navigationPublic}
    isAuth={isAuth}
  >
    <div className="p-6">
      <Title>My list</Title>
    </div>
  </DefaultTemplate>
);
