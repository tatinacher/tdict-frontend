export type WordType = {
  id: number;
  word_from: string;
  word_to: string;
  language_from: string;
  language_to: string;
  description?: string;
};

export type DictionaryType = {
  count: number;
  next?: string;
  previous?: string;
  results: WordType[];
};
