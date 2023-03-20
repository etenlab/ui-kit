import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src';
import { VoteButton } from '../../../packages/ui-kit/src/button';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Primary/Button/VoteButton',
  component: VoteButton,
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
} as ComponentMeta<typeof VoteButton>;

const Template: ComponentStory<typeof VoteButton> = (args) => (
  <VoteButton {...args} />
);

export const Like = Template.bind({});
Like.args = {
  isLike: true,
  count: 42,
  onClick: () => alert('Like Clicked'),
};
Like.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <VoteButton count={42} onClick={() => alert('Like Clicked')} />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Dislike = Template.bind({});
Dislike.args = {
  isLike: false,
  count: 15,
  onClick: () => alert('Dislike Clicked'),
};
Dislike.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <VoteButton
          isLike={false}
          count={15}
          onClick={() => alert('Dislike Clicked')}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
