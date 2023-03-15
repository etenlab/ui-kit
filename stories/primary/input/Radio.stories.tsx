import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { Radio } from '../../../packages/ui-kit/src/input';

export default {
  title: 'Primary/Input/Radio',
  component: Radio,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

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
