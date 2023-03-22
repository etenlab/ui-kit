import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import jsxToString from 'jsx-to-string';
import { ItemsClickableList } from '@eten-lab/ui-kit/src/crowd-bible';

export default {
  title: 'Partial/Crowd Bible/ItemsClickableList',
  component: ItemsClickableList,
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
} as ComponentMeta<typeof ItemsClickableList>;

const Template: ComponentStory<typeof ItemsClickableList> = (args) => {
  return <ItemsClickableList {...args} />;
};

type Content = {
  content: string;
  upVote: number;
  downVote: number;
};
type Item = {
  title: Content;
  contents: Content[];
};
const items: Array<Item> = [
  {
    title: {
      content: 'title content title content title content',
      downVote: 1,
      upVote: 2,
    },
    contents: [
      {
        content: 'some content1',
        upVote: 10,
        downVote: 11,
      },
      {
        content: 'some content11',
        upVote: 10,
        downVote: 11,
      },
    ],
  },
  {
    title: {
      content: 'title content2 title content2 title content2',
      downVote: 21,
      upVote: 22,
    },
    contents: [
      {
        content: 'some content4',
        upVote: 30,
        downVote: 31,
      },
    ],
  },
  {
    title: {
      content:
        'title content3 title content3 title content3 title content 3title content3',
      downVote: 31,
      upVote: 32,
    },
    contents: [
      {
        content: 'some content4',
        upVote: 30,
        downVote: 31,
      },
    ],
  },
];

export const NormalFiltersAndSearch = Template.bind({});
NormalFiltersAndSearch.args = {
  items,
  setSelectedItem: (i) => alert('setSelectedItem: ' + JSON.stringify(i)),
  setLikeItem: (i) => alert('setLikeItem: ' + i),
  setDislikeItem: (i) => alert('setDislikeItem: ' + i),
};

NormalFiltersAndSearch.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ItemsClickableList
          items={items}
          setSelectedItem={(i) => alert('setSelectedItem: ' + i)}
          setLikeItem={(i) => alert('setLikeItem: ' + i)}
          setDislikeItem={(i) => alert('setDislikeItem: ' + i)}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
