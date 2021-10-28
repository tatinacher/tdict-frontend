import { DictionaryType, request } from "@lib";

export const fetchPublicDictionary = (): Promise<DictionaryType> =>
  request({
    url: "/public/words/",
    method: "get",
  });

export const getDictionary = (): Promise<DictionaryType> =>
  request({
    url: "/words/",
    method: "get",
  });

export const addWord = (params: {
  word_from: string;
  word_to: string;
  description: string;
}): Promise<DictionaryType> =>
  request({
    url: "/words/",
    method: "post",
    params,
  });
