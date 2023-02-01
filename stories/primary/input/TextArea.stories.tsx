import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { TextArea } from '../../../packages/ui-kit/src/input';

export default {
  title: 'Primary/Input/TextArea',
  component: TextArea,
  decorators: [
    Story => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => (
  <TextArea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Email or Username',
  fullWidth: true,
};
Primary.storyName = 'Primary';

export const Error = Template.bind({});
Error.args = {
  label: 'Email or Username',
  valid: false,
  fullWidth: true,
};

export const Success = Template.bind({});
Success.args = {
  label: 'Email or Username',
  valid: true,
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Email or Username',
  disabled: true,
  fullWidth: true,
};
