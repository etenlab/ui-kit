import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryPaper } from '../../StoryPaper';

import { ThemeProvider } from '@eten-lab/ui-kit/src/ThemeProvider';
import { Radio } from '@eten-lab/ui-kit/src/input';

export default {
  title: 'Primary/Input/Radio',
  component: Radio,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <StoryPaper>
          <Story />
        </StoryPaper>
      </ThemeProvider>
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
