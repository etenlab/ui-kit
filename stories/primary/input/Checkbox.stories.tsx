import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { Checkbox } from '../../../packages/ui-kit/src/input';

export default {
  title: 'Primary/Input/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  color: 'blue-primary',
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  color: 'blue-primary',
};
