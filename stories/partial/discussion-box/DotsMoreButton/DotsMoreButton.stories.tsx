import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { DotsMoreButton } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/DotsMoreButton',
  component: DotsMoreButton,
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
} as ComponentMeta<typeof DotsMoreButton>;

const Template: ComponentStory<typeof DotsMoreButton> = (args) => (
  <DotsMoreButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => console.log(event),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<DotsMoreButton onClick={() => alert('Clicked')} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
