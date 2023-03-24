import { BibleBook } from '../../../../packages/ui-kit/src/versification/Table/types';

export const bibleBook: BibleBook = {
  bibleId: 1,
  bibleName: 'NIV',
  bookId: 2,
  bookName: 'Genesis',
  chapters: [
    {
      id: 3,
      identifier: {
        id: 4,
        values: [
          {
            value: '9',
            numUpVotes: 2,
            numDownVotes: 1,
            numPosts: 7,
          },
          {
            value: '10',
            numUpVotes: 4,
            numDownVotes: 7,
            numPosts: 2,
          },
        ],
      },
      verses: [
        {
          id: 4,
          identifier: {
            id: 6,
            values: [
              {
                value: '1-2',
                numUpVotes: 9,
                numDownVotes: 12,
                numPosts: 18,
              },
              {
                value: '2-1',
                numUpVotes: 6,
                numDownVotes: 8,
                numPosts: 21,
              },
            ],
          },
          text: 'In the beginning God created the heavens and the earth',
        },
      ],
    },
  ],
};
