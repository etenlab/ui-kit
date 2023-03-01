import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { VideoPlayer } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/VideoPlayer',
  component: VideoPlayer,
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
} as ComponentMeta<typeof VideoPlayer>;

const Template: ComponentStory<typeof VideoPlayer> = (args) => (
  <VideoPlayer {...args} />
);

export const ViewMode = Template.bind({});
ViewMode.args = {
  src: '/movie.mp4',
};
ViewMode.parameters = {
  docs: {
    source: {
      code: jsxToString(<VideoPlayer src="/movie.mp4" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const QuillMode = Template.bind({});
QuillMode.args = {
  src: '/movie.mp4',
  mode: 'quill',
};
ViewMode.parameters = {
  docs: {
    source: {
      code: jsxToString(<VideoPlayer src="/movie.mp4" mode="quill" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
