import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { ImageViewer } from '../../../../packages/ui-kit/src/discussion-box';

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
  src: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/online-marketing-courses.jpg?width=595&height=400&name=online-marketing-courses.jpg',
  file_name: 'photo',
  mode: 'view',
};

export const Quill = Template.bind({});
Quill.args = {
  src: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/online-marketing-courses.jpg?width=595&height=400&name=online-marketing-courses.jpg',
  file_name: 'photo',
  mode: 'quill',
};
