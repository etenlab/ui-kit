import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import jsxToString from 'jsx-to-string';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { IconBadge } from '../../../../packages/ui-kit/src/versification/IconBadge';
import {
  BiLike,
  BiDislike,
  BiMessageRounded,
} from '../../../../packages/ui-kit/src/icons';

const args = {
  value: 0,
  Icon: BiMessageRounded,
  success: false,
  danger: false,
};

export default {
  title: 'Partial/Versification/IconBadge',
  component: IconBadge,
  args,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          margin: '3em',
          width: '500px',
          border: '1px solid #e3eaf3',
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof IconBadge>;

const Template: ComponentStory<typeof IconBadge> = (args) => (
  <IconBadge {...args} />
);

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<IconBadge {...args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  ...args,
  value: 42,
  success: true,
  danger: false,
  Icon: BiLike,
};
Success.parameters = {
  docs: {
    source: {
      code: jsxToString(<IconBadge {...Success.args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Danger = Template.bind({});
Danger.args = {
  ...args,
  value: 15,
  success: false,
  danger: true,
  Icon: BiDislike,
};
Danger.parameters = {
  docs: {
    source: {
      code: jsxToString(<IconBadge {...Danger.args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
