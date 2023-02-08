import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { DotsText } from '../../../../packages/ui-kit/src/crowd-bible';

export default {
  title: 'Partial/Crowd Bible/DotsText',
  component: DotsText,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          background: '#eee',
          width: '500px',
          padding: '20px',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof DotsText>;

const Template: ComponentStory<typeof DotsText> = (args) => (
  <DotsText {...args} />
);

const text =
  '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 5. From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage. 6. Ut enim ad minim veniam, quis nostrud exercitation.';
const ranges = [
  {
    id: 0,
    start: 1,
    end: 10,
  },
  {
    id: 1,
    start: 15,
    end: 35,
  },
  {
    id: 2,
    start: 40,
    end: 60,
  },
  {
    id: 3,
    start: 65,
    end: 75,
  },
  {
    id: 3,
    start: 80,
    end: 90,
  },
];

export const YellowDots = Template.bind({});
YellowDots.args = {
  text,
  ranges,
  onSelect: (id: number) => alert(`Clicked ${id} dots!`),
  dotColor: 'yellow',
  selectedColor: 'middle-yellow',
};

export const BlueDots = Template.bind({});
BlueDots.args = {
  text,
  ranges,
  onSelect: (id: number) => alert(`Clicked ${id} dots!`),
  dotColor: 'blue-primary',
  selectedColor: 'light-blue',
};
