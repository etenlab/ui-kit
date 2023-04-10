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

type VotableContent = {
  content: string;
  upVotes: number;
  downVotes: number;
  id: string | null;
  candidateId: string | null;
};

type VotableItem = {
  title: VotableContent;
  contents: VotableContent[];
  contentElectionId: string | null;
};

// mock data
const items: Array<VotableItem> = [
  {
    title: {
      id: '1234abcd',
      candidateId: '2345a',
      content: 'title content title content title content',
      downVotes: 1,
      upVotes: 2,
    },
    contents: [
      {
        id: '3456b',
        candidateId: '4567b',
        content: 'some content1',
        upVotes: 10,
        downVotes: 11,
      },
      {
        id: '3456c',
        candidateId: '4567c',
        content: 'some content11',
        upVotes: 10,
        downVotes: 11,
      },
    ],
    contentElectionId: '987987c',
  },
  {
    title: {
      id: '1234d',
      candidateId: '2345d',
      content: 'title content2 title content2 title content2',
      downVotes: 21,
      upVotes: 22,
    },
    contents: [
      {
        id: '3456e',
        candidateId: '4567e',
        content: 'some content4',
        upVotes: 30,
        downVotes: 31,
      },
    ],
    contentElectionId: '987987e',
  },
  {
    title: {
      id: '1234f',
      candidateId: '2345f',
      content:
        'title content3 title content3 title content3 title content 3title content3',
      downVotes: 31,
      upVotes: 32,
    },
    contents: [
      {
        id: '3456f',
        candidateId: '4567f',
        content: 'some content4',
        upVotes: 30,
        downVotes: 31,
      },
    ],
    contentElectionId: '987987f',
  },
];

export const Primary = Template.bind({});
Primary.args = {
  items,
  setSelectedItem: (i) => alert('setSelectedItem: ' + JSON.stringify(i)),
  setLikeItem: (i) => alert('setLikeItem: ' + i),
  setDislikeItem: (i) => alert('setDislikeItem: ' + i),
};

Primary.parameters = {
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
