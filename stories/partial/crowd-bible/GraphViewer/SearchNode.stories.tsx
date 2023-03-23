import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { SearchNode } from '../../../../packages/ui-kit/src/crowd-bible/GraphViewer/SearchNode';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/GraphViewer/SearchNode',
  component: SearchNode,
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
} as ComponentMeta<typeof SearchNode>;

const Template: ComponentStory<typeof SearchNode> = (args) => {
  return <SearchNode {...args} />;
};

const nodes = [
  {
    node_id: 1,
    node_type: 'bible',
    propertyKeys: [
      {
        property_key: 'name',
        upVotes: 5,
        downVotes: 6,
        posts: [],
        values: [
          {
            property_value: {
              value: 'NIV',
            },
            upVotes: 10,
            downVotes: 11,
            posts: [
              {
                id: 111,
              },
            ],
          },
          {
            property_value: {
              value: 'VIN',
            },
            upVotes: 7,
            downVotes: 3,
            posts: [
              {
                id: 222,
              },
              {
                id: 333,
              },
            ],
          },
        ],
      },
      {
        property_key: 'name',
        upVotes: 12,
        downVotes: 7,
        posts: [],
        values: [
          {
            property_value: {
              value: 'NIV',
            },
            upVotes: 10,
            downVotes: 7,
            posts: [],
          },
          {
            property_value: {
              value: 'VIN',
            },
            upVotes: 2,
            downVotes: 3,
            posts: [
              {
                id: 123,
              },
            ],
          },
        ],
      },
    ],
    relationships: [],
  },
  {
    node_id: 1,
    node_type: 'word',
    propertyKeys: [
      {
        property_key: 'word_name',
        upVotes: 10,
        downVotes: 4,
        posts: [],
        values: [
          {
            property_value: {
              value: 'ln',
            },
            upVotes: 2,
            downVotes: 3,
            posts: [
              {
                id: 111,
              },
            ],
          },
          {
            property_value: {
              value: 'nl',
            },
            upVotes: 6,
            downVotes: 4,
            posts: [
              {
                id: 222,
              },
              {
                id: 333,
              },
            ],
          },
        ],
      },
      {
        property_key: 'eman_drow',
        upVotes: 11,
        downVotes: 9,
        posts: [],
        values: [
          {
            property_value: {
              value: 'ln',
            },
            upVotes: 3,
            downVotes: 1,
            posts: [
              {
                id: 111,
              },
            ],
          },
          {
            property_value: {
              value: 'nl',
            },
            upVotes: 4,
            downVotes: 4,
            posts: [],
          },
        ],
      },
    ],
    relationships: [],
  },
  {
    node_id: 1,
    node_type: 'word',
    propertyKeys: [
      {
        property_key: 'word_name',
        upVotes: 10,
        downVotes: 4,
        posts: [],
        values: [
          {
            property_value: {
              value: 'beginning',
            },
            upVotes: 2,
            downVotes: 3,
            posts: [
              {
                id: 111,
              },
            ],
          },
          {
            property_value: {
              value: 'gninnigeb',
            },
            upVotes: 6,
            downVotes: 4,
            posts: [
              {
                id: 222,
              },
              {
                id: 333,
              },
            ],
          },
        ],
      },
      {
        property_key: 'eman_drow',
        upVotes: 11,
        downVotes: 9,
        posts: [],
        values: [
          {
            property_value: {
              value: 'ln',
            },
            upVotes: 3,
            downVotes: 1,
            posts: [
              {
                id: 111,
              },
            ],
          },
          {
            property_value: {
              value: 'nl',
            },
            upVotes: 4,
            downVotes: 4,
            posts: [],
          },
        ],
      },
    ],
    relationships: [],
  },
];

export const Primary = Template.bind({});
Primary.args = {
  nodes: nodes,
  isLoading: false,
  setSearch: () => {},
  onClick: () => alert('Node Item Clicked.'),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <SearchNode
          nodes={nodes}
          isLoading={false}
          setSearch={() => {}}
          onClick={() => alert('Node Item Clicked.')}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};