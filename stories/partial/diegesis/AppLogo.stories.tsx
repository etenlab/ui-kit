import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import AppLogo from '../../../packages/ui-kit/src/diegesis/AppLogo';

export default {
  title: 'Partial/Diegesis/AppLogo',
  component: AppLogo,
  decorators: [
    Story => (
      <div style={{ margin: '3em', padding: '1em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = args => (
  <AppLogo {...args} />
);

export const PrimaryAppLogo = Template.bind({});
PrimaryAppLogo.args = {
};

