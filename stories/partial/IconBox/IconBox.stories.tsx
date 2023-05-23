import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import jsxToString from 'jsx-to-string';

import { ThemeProvider } from '@eten-lab/ui-kit/src';
import { IconBox } from '@eten-lab/ui-kit/src/IconBox';

export default {
  title: 'Partial/IconBox',
  component: IconBox,
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
} as ComponentMeta<typeof IconBox>;

const Template: ComponentStory<typeof IconBox> = (args) => {
  return <IconBox {...args} />;
};

export const SuccessIconBox = Template.bind({});
SuccessIconBox.args = {
  isSuccess: true,
  text: 'Process completed successfully!',
};

SuccessIconBox.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <IconBox isSuccess text="Process completed successfully!" />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const FailedIconBox = Template.bind({});
FailedIconBox.args = {
  isSuccess: false,
  text: 'Oops... something went wrong!',
};

FailedIconBox.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <IconBox isSuccess={false} text="Oops... something went wrong!" />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
