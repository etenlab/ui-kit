import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { AudioRecorder } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/AudioRecorder',
  component: AudioRecorder,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
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
} as ComponentMeta<typeof AudioRecorder>;

const Template: ComponentStory<typeof AudioRecorder> = (args) => (
  <AudioRecorder {...args} />
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
        <AudioRecorder
          onSave={() => alert('Clicked Save')}
          onCancel={() => alert('Clicked Cancel')}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
