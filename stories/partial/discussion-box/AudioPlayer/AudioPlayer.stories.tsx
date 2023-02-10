import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { AudioPlayer } from '../../../../packages/ui-kit/src/discussion-box';

export default {
  title: 'Partial/Discussion Box/AudioPlayer',
  component: AudioPlayer,
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
} as ComponentMeta<typeof AudioPlayer>;

const Template: ComponentStory<typeof AudioPlayer> = (args) => (
  <AudioPlayer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  src: '/horse.mp3',
};
