import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryPaper } from '../../StoryPaper';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { Checkbox } from '../../../packages/ui-kit/src/input';

export default {
  title: 'Primary/Input/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <StoryPaper>
          <Story />
        </StoryPaper>
      </ThemeProvider>
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
