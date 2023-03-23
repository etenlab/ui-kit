export type BibleBook = {
  bibleId: number;
  bibleName: string;
  bookId: number;
  bookName: string;
  chapters: Chapter[];
};

export type Chapter = {
  id: number;
  identifier: Identifier;
  verses: Verse[];
};

export type Verse = {
  id: number;
  identifier: Identifier;
  text: string;
};

export type Identifier = {
  id: number;
  values: {
    value: string;
    numUpVotes: number;
    numDownVotes: number;
    numPosts: number;
  }[];
};
