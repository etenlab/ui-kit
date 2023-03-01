import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ThemeProvider,
  BiShare,
  BiPencil,
  BiTrashAlt,
} from '../../../../packages/ui-kit/src';
import { ActionList } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/ActionList',
  component: ActionList,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          background: '#ccc',
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
} as ComponentMeta<typeof ActionList>;

const Template: ComponentStory<typeof ActionList> = (args) => (
  <ActionList {...args} />
);

const actions = [
  {
    name: 'Edit Post',
    action: () => alert('Clicked'),
    icon: <BiPencil style={{ fontSize: 16 }} />,
  },
  {
    name: 'Reply',
    action: () => alert('Clicked'),
    icon: <BiShare style={{ fontSize: 16 }} />,
  },
  {
    name: 'Delete Post',
    action: () => alert('Clicked'),
    icon: <BiTrashAlt style={{ fontSize: 16, color: 'red' }} />,
  },
];

export const Primary = Template.bind({});
Primary.args = {
  actions,
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<ActionList actions={actions} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
