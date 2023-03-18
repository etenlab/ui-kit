import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { PlusButton } from '../../../packages/ui-kit/src/button';

export default {
  title: 'Primary/Button/PlusButton',
  component: PlusButton,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof PlusButton>;

const Template: ComponentStory<typeof PlusButton> = (args) => (
  <PlusButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
