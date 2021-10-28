import * as React from "react";
import { Button, Input } from "@ui";
import { reflect } from "@effector/reflect";

import {
  $description,
  $word_from,
  $word_to,
  handleChange,
  handleSubmit,
} from "./model";

interface AddWordProps {
  description: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  translation: string;
  word: string;
}

export const AddWord: React.FC<AddWordProps> = ({
  description,
  onChange,
  onSubmit,
  translation,
  word,
}) => {
  return (
    <div className="flex flex-col h-screen">
      <form className="flex flex-col max-w-sm" onSubmit={onSubmit}>
        <label className="flex flex-col">
          <span>Word</span>
          <Input
            name="word"
            onChange={onChange}
            placeholder="word"
            type="text"
            value={word}
          />
        </label>
        <label className="flex flex-col">
          <span>Description</span>
          <Input
            name="description"
            onChange={onChange}
            placeholder="description"
            type="text"
            value={description}
          />
        </label>
        <label className="flex flex-col">
          <span>Translation</span>
          <Input
            name="translation"
            onChange={onChange}
            placeholder="translation"
            type="text"
            value={translation}
          />
        </label>
        <div className="flex flex-col justify-center pb-6">
          <Button name="user" text="Save" type="submit" />
        </div>
      </form>
    </div>
  );
};

export const AddWordForm = reflect({
  view: AddWord,
  bind: {
    description: $description,
    onChange: handleChange,
    onSubmit: handleSubmit,
    translation: $word_to,
    word: $word_from,
  },
});

handleSubmit.watch((event) => {
  event.preventDefault();
});
