import { DictionaryType, request } from "@lib";

export const fetchPublicDictionary = (): Promise<DictionaryType> =>
  request({
    url: "/public/words/",
    method: "get",
  });
