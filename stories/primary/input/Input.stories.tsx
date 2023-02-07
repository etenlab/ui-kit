import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { Input } from '../../../packages/ui-kit/src/input';

export default {
  title: 'Primary/Input/Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Email or Username',
};
Primary.storyName = 'Primary';

export const Error = Template.bind({});
Error.args = {
  label: 'Email or Username',
  valid: false,
};

export const Success = Template.bind({});
Success.args = {
  label: 'Email or Username',
  valid: true,
};

export const WithOutLegend = Template.bind({});
WithOutLegend.args = {
  label: 'Email or Username',
  withLegend: false,
};
Primary.storyName = 'Primary';

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Email or Username',
  disabled: true,
  fullWidth: true,
};
