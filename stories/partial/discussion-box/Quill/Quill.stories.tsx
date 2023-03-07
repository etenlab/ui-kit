import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { Quill, IFile } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/Quill',
  component: Quill,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          border: '1px solid #000',
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
} as ComponentMeta<typeof Quill>;

const Template: ComponentStory<typeof Quill> = (args) => <Quill {...args} />;

const attachments = [
  {
    id: 1,
    file_name: 'images',
    file_type: 'image/jpg',
    file_size: 1234,
    file_url: '/images.jpg',
  },
  {
    id: 2,
    file_name: 'images',
    file_type: 'image/jpg',
    file_size: 1234,
    file_url: '/images.jpg',
  },
  {
    id: 3,
    file_name: 'images',
    file_type: 'image/jpg',
    file_size: 1234,
    file_url: '/images.jpg',
  },
];

const noAttachments = [];

export const Primary = Template.bind({});
Primary.args = {
  emojiMode: 'in',
  mode: 'editing',
  onInitializeQuill: () => alert('Clicked initialize quill'),
  quillTitle: 'Editing',
  initQuill: 'Init',
  initPlain: 'Init',
  uploading: false,
  attachments: noAttachments,
  onAttach: (file: File) => alert('New Attach'),
  onCancelAttachment: () => alert('Clicked cancel'),
  onSend: ({ quill, plain }) => alert(`${quill} ${plain}`),
  onClose: () => alert('Clicked Close'),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <Quill
          emojiMode="in"
          mode="editing"
          onInitializeQuill={() => alert('Clicked initialize quill')}
          quillTitle="Editing"
          initQuill="Init"
          initPlain="Init"
          uploading={false}
          attachments={noAttachments}
          onAttach={(file: File) => alert('New Attach')}
          onCancelAttachment={() => alert('Clicked cancel')}
          onSend={({ quill, plain }) => alert(`${quill} ${plain}`)}
          onClose={() => alert('Clicked Close')}
        />
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
