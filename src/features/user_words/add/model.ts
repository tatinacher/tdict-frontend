import React from "react";

import {
  combine,
  createEffect,
  createEvent,
  createStore,
  guard,
} from "effector";
import { addWord } from "@api";

export const $word_from = createStore("");
export const $description = createStore("");
export const $word_to = createStore("");

export const handleChange = createEvent<React.ChangeEvent<HTMLInputElement>>();

export const handleSubmit = createEvent<React.FormEvent<HTMLFormElement>>();

$word_from.on(handleChange, (_, event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.name === "word") {
    return event.target.value;
  }
});

$description.on(
  handleChange,
  (_, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "description") {
      return event.target.value;
    }
  }
);

$word_to.on(handleChange, (_, event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.name === "translation") {
    return event.target.value;
  }
});

export const addUserWord = createEffect(addWord);

guard({
  source: combine(
    $word_from,
    $word_to,
    $description,
    (word_from, word_to, description) => ({
      word_from,
      word_to,
      description,
    })
  ),
  clock: handleSubmit,
  filter: ({ word_from, word_to }: { word_from: string; word_to: string }) =>
    word_from !== "" && word_to !== "",
  target: addUserWord,
});
