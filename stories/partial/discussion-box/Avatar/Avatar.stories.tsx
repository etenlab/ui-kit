import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { Avatar } from '../../../../packages/ui-kit/src/discussion-box';

export default {
  title: 'Partial/Discussion Box/Avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          background: '#ccc',
          width: '500px',
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Text = Template.bind({});
Text.args = {
  username: 'Svetlana Podolianko',
};

export const Picture = Template.bind({});
Picture.args = {
  username: 'Username',
  url: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/online-marketing-courses.jpg?width=595&height=400&name=online-marketing-courses.jpg',
};

export const Mini = Template.bind({});
Mini.args = {
  username: 'Username',
  url: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/online-marketing-courses.jpg?width=595&height=400&name=online-marketing-courses.jpg',
  mini: true,
};
