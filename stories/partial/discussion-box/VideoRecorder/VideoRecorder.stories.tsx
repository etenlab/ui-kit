import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { VideoRecorder } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/VideoRecorder',
  component: VideoRecorder,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          position: 'relative',
          width: '350px',
          height: '700px',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof VideoRecorder>;

const Template: ComponentStory<typeof VideoRecorder> = (args) => (
  <VideoRecorder {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onCancel: () => alert('Clicked Cancel'),
  onSave: (blobs: Blob[]) => console.log(blobs),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <VideoRecorder
          onSave={() => alert('Clicked Save')}
          onCancel={() => alert('Clicked Cancel')}
        />
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
