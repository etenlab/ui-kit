import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { ImageViewer } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/ImageViewer',
  component: ImageViewer,
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
} as ComponentMeta<typeof ImageViewer>;

const Template: ComponentStory<typeof ImageViewer> = (args) => (
  <ImageViewer {...args} />
);

export const View = Template.bind({});
View.args = {
  src: '/images.jpg',
  file_name: 'images',
  mode: 'view',
};
View.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ImageViewer src="/images.jpg" file_name="images" mode="view" />
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Quill = Template.bind({});
Quill.args = {
  src: '/images.jpg',
  file_name: 'images',
  mode: 'quill',
};
Quill.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ImageViewer src="/images.jpg" file_name="images" mode="quill" />
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
