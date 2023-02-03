import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonList, ThemeProvider } from '../../../../packages/ui-kit/src';

export default {
  title: 'Partial/Crowd Bible/Button List',
  component: ButtonList,
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
} as ComponentMeta<typeof ButtonList>;

const Template: ComponentStory<typeof ButtonList> = (args) => (
  <ButtonList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select a Chapter',
  items: [
    {
      onClick: () => alert('Click Chapter 1'),
      label: 'Chapter 1: Name of the Chapter',
    },
    {
      onClick: () => alert('Click Chapter 2'),
      label: 'Chapter 2: Name of the Chapter',
    },
    {
      onClick: () => alert('Click Chapter 3'),
      label: 'Chapter 3: Name of the Chapter',
    },
  ],
};

export const WithUnderline = Template.bind({});
WithUnderline.args = {
  withUnderline: true,
  label: 'select a chapter',
  items: [
    {
      onClick: () => alert('Click Chapter 1'),
      label: 'Chapter 1: Name of the Chapter',
    },
    {
      onClick: () => alert('Click Chapter 2'),
      label: 'Chapter 2: Name of the Chapter',
    },
    {
      onClick: () => alert('Click Chapter 3'),
      label: 'Chapter 3: Name of the Chapter',
    },
  ],
};
