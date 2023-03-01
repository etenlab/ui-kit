import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { Avatar } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/Avatar',
  component: Avatar,
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
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Text = Template.bind({});
Text.args = {
  username: 'Svetlana Podolianko',
};
Text.parameters = {
  docs: {
    source: {
      code: jsxToString(<Avatar username="Svetlana Podolianko" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Picture = Template.bind({});
Picture.args = {
  username: 'Username',
  url: '/images.jpg',
};
Picture.parameters = {
  docs: {
    source: {
      code: jsxToString(<Avatar username="Username" url="/images.jpg" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Mini = Template.bind({});
Mini.args = {
  username: 'Username',
  url: '/images.jpg',
  mini: true,
};
Mini.parameters = {
  docs: {
    source: {
      code: jsxToString(<Avatar username="Username" url="/images.jpg" mini />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
