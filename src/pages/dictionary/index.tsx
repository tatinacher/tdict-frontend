import * as React from "react";
import { DictionaryList } from "@features";
import { DefaultTemplate } from "@ui";
import { navigation } from "@lib";

export const DictionaryPage: React.FC = () => (
  <DefaultTemplate navigation={navigation}>
    <DictionaryList />
  </DefaultTemplate>
);
