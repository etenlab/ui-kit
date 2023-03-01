import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { Username } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/Username',
  component: Username,
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
} as ComponentMeta<typeof Username>;

const Template: ComponentStory<typeof Username> = (args) => (
  <Username {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  username: 'hiroshi tanaka',
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<Username username="Hiroshi Tanaka" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
