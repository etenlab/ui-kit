import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { WordTable } from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';
import { Button } from '@mui/material';

export default {
  title: 'Partial/Crowd Bible/WordTable',
  component: WordTable,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          border: '1px solid #000',
          width: '500px',
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof WordTable>;

const Template: ComponentStory<typeof WordTable> = (args) => {
  return <WordTable {...args} />;
};

const items = [
  {
    title: {
      content: 'Bible',
      upVote: 42,
      downVote: 15,
    },
    contents: [
      {
        content:
          'the Christian scriptures, consisting of the Old and New Testaments.',
        upVote: 42,
        downVote: 15,
      },
      {
        content: 'a book regarded as authoritative in a particular sphere.',
        upVote: 42,
        downVote: 15,
      },
    ],
  },
  {
    title: {
      content: 'Lorem',
      upVote: 42,
      downVote: 15,
    },
    contents: [
      {
        content:
          'placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
        upVote: 42,
        downVote: 15,
      },
    ],
  },
];

export const Word = Template.bind({});
Word.args = {
  label_1: 'Word',
  label_2: 'Definition',
  items,
};
Word.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <WordTable label_1="Word" label_2="Definition" items={items} />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const KeyTerm = Template.bind({});
KeyTerm.args = {
  label_1: 'Key Term ',
  label_2: 'Definition',
  items,
};
KeyTerm.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <WordTable label_1="Key Term" label_2="Definition" items={items} />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};


const element = <Button variant='contained'>some React Element</Button>

export const KeyTermWithButton = Template.bind({});
KeyTermWithButton.args = {
  label_1: 'Key Term ',
  label_2: element,
  items,
};
KeyTermWithButton.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <WordTable label_1="Key Term" label_2={element} items={items} />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};