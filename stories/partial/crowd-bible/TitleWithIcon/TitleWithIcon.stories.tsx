import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, TitleWithIcon } from '../../../../packages/ui-kit/src';

export default {
  title: 'Partial/Crowd Bible/TitleWithIcon',
  component: TitleWithIcon,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof TitleWithIcon>;

const Template: ComponentStory<typeof TitleWithIcon> = (args) => (
  <TitleWithIcon {...args} />
);

export const TitleWithBackIcon = Template.bind({});
TitleWithBackIcon.args = {
  label: 'Verses',
  withBackIcon: true,
  onClose: () => alert('Clicked Close Button'),
  onBack: () => alert('Clicked Back Button'),
};

export const TitleWithoutIcon = Template.bind({});
TitleWithoutIcon.args = {
  label: 'Chapters',
  withBackIcon: false,
  onClose: () => alert('Clicked Close Button'),
  onBack: () => alert('Clicked Back Button'),
};
