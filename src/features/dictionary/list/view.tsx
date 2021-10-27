import * as React from "react";
import { WordType } from "@lib";
import { TranslationCard } from "@features";
import { reflect } from "@effector/reflect";
import { $list, getWords } from "./model";

interface DictionaryListProps {
  list: WordType[];
}

export const DictionaryListBlock: React.FC<DictionaryListProps> = ({
  list,
}) => (
  <div>
    {list.map(({ word, id, description, translations }) => (
      <TranslationCard
        key={id}
        word={word}
        translateEn={description}
        translateRu={translations[0].word}
      />
    ))}
  </div>
);

export const DictionaryList = reflect({
  view: DictionaryListBlock,
  bind: {
    list: $list,
  },
  hooks: {
    mounted: getWords,
  },
});
