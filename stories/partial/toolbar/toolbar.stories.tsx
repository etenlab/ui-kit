import React, { useState } from 'react';

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

const Template: ComponentStory<typeof Toolbar> = (args) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleClickThemeBtn = () => {
    setTheme((_theme) => (_theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Toolbar
      {...args}
      themeMode={theme}
      onClickThemeModeBtn={handleClickThemeBtn}
    />
  );
};

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
          themeMode="light"
          onClickDiscussionBtn={() => console.log()}
          onClickThemeModeBtn={() => console.log()}
          onClickNotificationBtn={() => console.log()}
          onClickMenuBtn={() => console.log()}
        />,
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
          themeMode="light"
          onClickDiscussionBtn={() => console.log()}
          onClickThemeModeBtn={() => console.log()}
          onClickNotificationBtn={() => console.log()}
          onClickMenuBtn={() => console.log()}
        />,
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
          themeMode="light"
          onClickDiscussionBtn={() => console.log()}
          onClickThemeModeBtn={() => console.log()}
          onClickNotificationBtn={() => console.log()}
          onClickMenuBtn={() => console.log()}
        />,
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
    menu: true,
  },
};
NotificationWithBadge.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Toolbar
          title="Showcase"
          themeMode="light"
          onClickDiscussionBtn={() => console.log()}
          onClickThemeModeBtn={() => console.log()}
          onClickNotificationBtn={() => console.log()}
          onClickMenuBtn={() => console.log()}
          buttons={{
            discussion: false,
            notification: true,
            menu: true,
          }}
        />,
      ),
      language: 'html',
      type: 'auto',
    },
  },
};

export const WithoutIcons = Template.bind({});
WithoutIcons.args = {
  ...Primary.args,
  title: 'Showcase',
  buttons: {
    discussion: false,
    notification: false,
    menu: false,
  },
};
WithoutIcons.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Toolbar
          title="Showcase"
          themeMode="light"
          onClickDiscussionBtn={() => console.log()}
          onClickThemeModeBtn={() => console.log()}
          onClickNotificationBtn={() => console.log()}
          onClickMenuBtn={() => console.log()}
          buttons={{
            discussion: false,
            notification: false,
            menu: false,
          }}
        />,
      ),
      language: 'html',
      type: 'auto',
    },
  },
};
