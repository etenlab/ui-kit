export type BibleBook = {
  bibleId: string;
  bibleName: string;
  bookId: string;
  bookName: string;
  chapters: Chapter[];
};

export type Chapter = {
  id: string;
  identifier: Identifier;
  verses: Verse[];
};

export type Verse = {
  id: string;
  identifier: Identifier;
  text: string;
};

export type Identifier = {
  id: string;
  values: {
    value: string;
    numUpVotes: number;
    numDownVotes: number;
    numPosts: number;
  }[];
};
