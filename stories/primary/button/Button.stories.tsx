import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { Button } from '../../../packages/ui-kit/src/button';

export default {
  title: 'Primary/Button/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Get Started Now',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Get Started Now',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  withIcon: true,
  variant: 'primary',
  children: 'Get Started Now',
};
PrimaryWithIcon.storyName = 'Primary with arrow icon';

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  withIcon: true,
  variant: 'secondary',
  children: 'Get Started Now',
};
SecondaryWithIcon.storyName = 'Secondary with arrow icon';

export const Dark = Template.bind({});
Dark.args = {
  variant: 'secondary',
  children: 'Get Started Now',
  color: 'dark',
};
