import { createStore, createEffect } from "effector";
import { DictionaryType, WordType } from "@lib/types";
import { fetchPublicDictionary } from "@api";

export const getWords = createEffect<void, DictionaryType>();
export const $list = createStore<WordType[]>([]);
export const $prevButton = createStore<string>("");
export const $nextButton = createStore<string>("");
export const $pending = createStore<boolean>(true);

$list.on(getWords.done, (_, payload) => payload.result.results);
$prevButton.on(getWords.done, (_, payload) => payload.result.previous);
$nextButton.on(getWords.done, (_, payload) => payload.result.next);
$pending.on(getWords.done, () => false);

getWords.use(fetchPublicDictionary);
