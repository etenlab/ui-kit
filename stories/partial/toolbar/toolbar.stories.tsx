import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { Toolbar } from '../../../packages/ui-kit/src/toolbar';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Toolbar',
  component: Toolbar,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args) => (
  <Toolbar {...args} />
);

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
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Toolbar
          title="crowd.Bible"
          onClickDiscussionBtn={() => console.log()}
          onClickNotificationBtn={() => console.log()}
          onClickMenuBtn={() => console.log()}
        />
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const DiscussionWithBadge = Template.bind({});
DiscussionWithBadge.args = {
  ...Primary.args,
  isNewDiscussion: true,
};
DiscussionWithBadge.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Toolbar
          title="crowd.Bible"
          isNewDiscussion
          onClickDiscussionBtn={() => console.log()}
          onClickNotificationBtn={() => console.log()}
          onClickMenuBtn={() => console.log()}
        />
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const NotificationWithBadge = Template.bind({});
NotificationWithBadge.args = {
  ...Primary.args,
  isNewNotification: true,
};
NotificationWithBadge.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Toolbar
          title="crowd.Bible"
          isNewNotification
          onClickDiscussionBtn={() => console.log()}
          onClickNotificationBtn={() => console.log()}
          onClickMenuBtn={() => console.log()}
        />
      ),
      language: 'html',
      type: 'auto',
    },
  },
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
NotificationWithBadge.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Toolbar
          title="Showcase"
          onClickDiscussionBtn={() => console.log()}
          onClickNotificationBtn={() => console.log()}
          onClickMenuBtn={() => console.log()}
          buttons={{
            discussion: false,
            notification: true,
          }}
        />
      ),
      language: 'html',
      type: 'auto',
    },
  },
};
