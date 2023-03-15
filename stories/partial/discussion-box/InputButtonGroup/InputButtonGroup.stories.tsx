import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { InputButtonGroup } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/InputButtonGroup',
  component: InputButtonGroup,
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
} as ComponentMeta<typeof InputButtonGroup>;

const Template: ComponentStory<typeof InputButtonGroup> = (args) => (
  <InputButtonGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onClick: (mode: unknown) => alert(`Click ${mode}`),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <InputButtonGroup
          onClick={(mode: unknown) => alert(`Click ${mode}`)}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
