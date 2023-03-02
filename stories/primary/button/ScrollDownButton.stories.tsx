import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src';
import { ScrollDownButton } from '../../../packages/ui-kit/src/button';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Primary/Button/ScrollDownButton',
  component: ScrollDownButton,
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
} as ComponentMeta<typeof ScrollDownButton>;

const Template: ComponentStory<typeof ScrollDownButton> = (args) => (
  <ScrollDownButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => alert('Clicked'),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<ScrollDownButton onClick={() => alert('Clicked')} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
