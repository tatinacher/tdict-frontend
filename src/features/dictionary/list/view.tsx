import * as React from "react";
import { WordType } from "@lib";
import { TranslationCard } from "@features";
import { reflect } from "@effector/reflect";
import { $list, $pending, getWords } from "./model";
import { Loader } from "@ui";

interface DictionaryListProps {
  list: WordType[];
  pending: boolean;
}

export const DictionaryListBlock: React.FC<DictionaryListProps> = ({
  list,
  pending,
}) => (
  <div className="flex flex-wrap">
    {/* {pending ? (
      <Loader />
    ) : (
      list.map(({ word, id, description, translations }) => (
        <div className="p-6">
          <TranslationCard
            key={id}
            word={word}
            translateEn={description}
            translateRu={translations[0].word}
          />
        </div>
      ))
    )} */}
  </div>
);

export const DictionaryList = reflect({
  view: DictionaryListBlock,
  bind: {
    list: $list,
    pending: $pending,
  },
  hooks: {
    mounted: getWords,
  },
});
