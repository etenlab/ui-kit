import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryPaper } from '../../StoryPaper';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { Input } from '../../../packages/ui-kit/src/input';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Primary/Input/Input',
  component: Input,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <StoryPaper>
          <Story />
        </StoryPaper>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Email or Username',
};
Primary.storyName = 'Primary';
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<Input label="Email or Username" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  label: 'Email or Username',
  valid: false,
};
Error.parameters = {
  docs: {
    source: {
      code: jsxToString(<Input label="Email or Username" valid={false} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  label: 'Email or Username',
  valid: true,
};
Success.parameters = {
  docs: {
    source: {
      code: jsxToString(<Input label="Email or Username" valid />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const WithOutLegend = Template.bind({});
WithOutLegend.args = {
  label: 'Email or Username',
  withLegend: false,
};
WithOutLegend.parameters = {
  docs: {
    source: {
      code: jsxToString(<Input label="Email or Username" withLegend={false} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Email or Username',
  disabled: true,
  fullWidth: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: jsxToString(<Input label="Email or Username" disabled fullWidth />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
