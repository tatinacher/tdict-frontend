export type TranslationsType = {
  id: number;
  word: string;
  language: string;
};

export type WordType = {
  id: number;
  word: string;
  language: string;
  description: string;
  translations: TranslationsType[];
};

export type DictionaryType = {
  count: number;
  next?: string;
  previous?: string;
  results: WordType[];
};
