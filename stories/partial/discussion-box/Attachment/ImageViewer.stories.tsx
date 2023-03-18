import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { Attachment } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/Attachment/ImageViewer',
  component: Attachment,
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
} as ComponentMeta<typeof Attachment>;

const Template: ComponentStory<typeof Attachment> = (args) => (
  <Attachment {...args} />
);

const file = {
  id: 1,
  file_name: 'images.jpg',
  file_type: 'image/jpeg',
  file_size: 1025334,
  file_url: '/images.jpg',
};

export const ViewMode = Template.bind({});
ViewMode.args = {
  file,
  mode: 'view',
  onRemove: () => alert('Click remove button!'),
};
ViewMode.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Attachment
          file={file}
          mode="view"
          onRemove={() => alert('Click remove button!')}
        />,
      ),
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
  onRemove: () => alert('Click remove button!'),
};
QuillMode.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Attachment
          file={file}
          mode="quill"
          onRemove={() => alert('Click remove button!')}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
