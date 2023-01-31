import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { Toolbar } from '../../../packages/ui-kit/src/toolbar';

export default {
  title: 'Partial/Toolbar',
  component: Toolbar,
  decorators: [
    Story => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = args => <Toolbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'crowd.Bible',
  onClickDiscussionBtn: () => {
    alert('Clicked Discussion Btn!');
  },
  onClickNotificationBtn: () => {
    alert('Clicked Notification Btn!');
  },
  onClickMenuBtn: () => {
    alert('Clicked Menu Btn!');
  },
};

export const DiscussionWithBadge = Template.bind({});
DiscussionWithBadge.args = {
  ...Primary.args,
  isNewDiscussion: true,
};

export const NotificationWithBadge = Template.bind({});
NotificationWithBadge.args = {
  ...Primary.args,
  isNewNotification: true,
};

export const WithoutDiscussion = Template.bind({});
WithoutDiscussion.args = {
  ...Primary.args,
  title: 'Showcase',
  buttons: {
    discussion: false,
    notification: true,
  },
};
