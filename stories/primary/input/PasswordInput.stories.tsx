import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryPaper } from '../../StoryPaper';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { PasswordInput } from '../../../packages/ui-kit/src/input';
import jsxToString from 'jsx-to-string';
import { logger } from '@eten-lab/ui-kit/src';

export default {
  title: 'Primary/Input/PasswordInput',
  component: PasswordInput,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <StoryPaper>
          <Story />
        </StoryPaper>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput {...args} />
);

export const Hide = Template.bind({});
Hide.args = {
  label: 'Password',
  show: false,
  onClickShowIcon: () => alert('Click show Icon'),
};
Hide.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <PasswordInput
          label="Password"
          show={false}
          onClickShowIcon={() => logger.info('Clicked')}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Show = Template.bind({});
Show.args = {
  label: 'Password',
  show: true,
  onClickShowIcon: () => alert('Click show Icon'),
};
Show.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <PasswordInput
          label="Password"
          show={true}
          onClickShowIcon={() => logger.info('Clicked')}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
