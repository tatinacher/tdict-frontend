import * as React from "react";
import { WordType } from "@lib";
import { TranslationCard } from "@features";
import { reflect } from "@effector/reflect";
import { $list, $pending, getWords } from "./model";
import { Loader, Text } from "@ui";
import { LinkButton } from "@ui/atoms/link-button";

interface DictionaryListProps {
  list: WordType[];
  pending: boolean;
}

export const DictionaryListBlock: React.FC<DictionaryListProps> = ({
  list,
  pending,
}) => {
  if (pending) {
    return <Loader />;
  }
  if (list.length === 0) {
    return (
      <div>
        <Text size="l">Still no words? Add new one!</Text>
        <br />
        <LinkButton to="/user/add-word" text="Add a word" />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap">
      {list.map(({ word_from, id, description, word_to }) => (
        <div className="p-6">
          <TranslationCard
            key={id}
            word={word_from}
            translateEn={description}
            translateRu={word_to}
          />
        </div>
      ))}
    </div>
  );
};

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
