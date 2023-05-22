import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import jsxToString from 'jsx-to-string';

import { ThemeProvider } from '@eten-lab/ui-kit/src';
import { FadeSpinner } from '@eten-lab/ui-kit/src/FadeSpinner';

export default {
  title: 'Partial/FadeSpinner',
  component: FadeSpinner,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          border: '1px solid #000',
          width: '800px',
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof FadeSpinner>;

const Template: ComponentStory<typeof FadeSpinner> = (args) => {
  return <FadeSpinner {...args} />;
};

export const PrimaryFadeSpinner = Template.bind({});
PrimaryFadeSpinner.args = {
  color: 'black',
  progress: '75',
};

PrimaryFadeSpinner.parameters = {
  docs: {
    source: {
      code: jsxToString(<FadeSpinner color="black" progress="75" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
