import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '@eten-lab/ui-kit/src';
import { NodeDetails } from '../../../../packages/ui-kit/src/crowd-bible/GraphViewer/NodeDetails';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/GraphViewer/NodeDetails',
  component: NodeDetails,
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
} as ComponentMeta<typeof NodeDetails>;

const Template: ComponentStory<typeof NodeDetails> = (args) => {
  return <NodeDetails {...args} />;
};

const node = {
  id: 1,
  node_type: 'word',
  propertyKeys: [
    {
      property_key: 'word_name',
      upVotes: 10,
      downVotes: 4,
      posts: [],
      propertyValue: {
        property_value: '{"value":"ln"}',
        upVotes: 2,
        downVotes: 3,
        posts: [
          {
            id: 111,
          },
        ],
      },
    },
    {
      property_key: 'eman_drow',
      upVotes: 11,
      downVotes: 9,
      posts: [],
      propertyValue: {
        property_value: '{"value":"nl"}',
        upVotes: 3,
        downVotes: 1,
        posts: [],
      },
    },
  ],
  nodeRelationships: [
    {
      id: 2,
      relationship_type: 'word-sequence-to-word',
      from_id: 1,
      to_id: 2,
      propertyKeys: [
        {
          property_key: 'position',
          upVotes: 2,
          downVotes: 1,
          posts: [],
          propertyValue: {
            property_value: '{"value":"1"}',
            upVotes: 7,
            downVotes: 13,
            posts: [],
          },
        },
        {
          property_key: 'noitisop',
          upVotes: 5,
          downVotes: 2,
          posts: [],
          propertyValue: {
            property_value: '{"value":"2"}',
            upVotes: 13,
            downVotes: 8,
            posts: [
              {
                id: 123,
              },
            ],
          },
        },
      ],
      fromNode: {
        id: 1,
        node_type: 'word-sequence',
        propertyKeys: [],
        nodeRelationships: [],
      },
      toNode: {
        id: 1,
        node_type: 'word-sequence',
        propertyKeys: [],
        nodeRelationships: [],
      },
    },
  ],
};

export const Primary = Template.bind({});
Primary.args = {
  node: node,
  isLoading: false,
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<NodeDetails node={node} isLoading={false} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
