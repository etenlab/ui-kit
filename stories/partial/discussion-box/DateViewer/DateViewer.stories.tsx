import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { DateViewer } from '../../../../packages/ui-kit/src/discussion-box';

export default {
  title: 'Partial/Discussion Box/DateViewer',
  component: DateViewer,
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
} as ComponentMeta<typeof DateViewer>;

const Template: ComponentStory<typeof DateViewer> = (args) => (
  <DateViewer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  date: new Date('2020-01-01'),
};

export const Today = Template.bind({});
Today.args = {
  date: new Date(),
};
