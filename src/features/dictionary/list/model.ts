import { createStore, createEffect } from "effector";
import { DictionaryType, WordType } from "@lib/types";
import { fetchPublicDictionary } from "@api";

export const getWords = createEffect<void, DictionaryType>();
export const $list = createStore<WordType[]>([]);

$list.on(getWords.done, (_, payload) => payload.result.results);

getWords.use(fetchPublicDictionary);
