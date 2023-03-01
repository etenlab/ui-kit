import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { FileViewer } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/FileViewer',
  component: FileViewer,
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
} as ComponentMeta<typeof FileViewer>;

const Template: ComponentStory<typeof FileViewer> = (args) => (
  <FileViewer {...args} />
);

const file = {
  id: 1,
  file_name: 'Discussion Box Guide.docs',
  file_type: 'plain/text',
  file_size: 1025334,
  file_url: '/Discussion Box Guide.docs',
};

export const ViewMode = Template.bind({});
ViewMode.args = {
  file,
  mode: 'view',
};
ViewMode.parameters = {
  docs: {
    source: {
      code: jsxToString(<FileViewer file={file} mode="view" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const QuillMode = Template.bind({});
QuillMode.args = {
  file,
  mode: 'quill',
};
QuillMode.parameters = {
  docs: {
    source: {
      code: jsxToString(<FileViewer file={file} mode="quill" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
