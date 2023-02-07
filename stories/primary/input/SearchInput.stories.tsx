import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { SearchInput } from '../../../packages/ui-kit/src/input';

export default {
  title: 'Primary/Input/SearchInput',
  component: SearchInput,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

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

export const WithoutLegend = Template.bind({});
WithoutLegend.args = {
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
