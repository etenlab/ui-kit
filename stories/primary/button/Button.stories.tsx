import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, Button, BiLike } from '../../../packages/ui-kit/src';

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
  variant: 'contained',
  children: 'Get Started Now',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
  children: 'Get Started Now',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  endIcon: true,
  variant: 'contained',
  children: 'Get Started Now',
};
PrimaryWithIcon.storyName = 'Primary with arrow icon';

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  endIcon: true,
  variant: 'outlined',
  children: 'Get Started Now',
};
SecondaryWithIcon.storyName = 'Secondary with arrow icon';

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  endIcon: <BiLike />,
  variant: 'outlined',
  children: 'Get Started Now',
};
