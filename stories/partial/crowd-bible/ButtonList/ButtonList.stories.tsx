import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { ButtonList } from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';
import {  BiRightArrowAlt } from 'react-icons/bi';

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

const items = [
  { value: 1, label: 'Chapter 1: Name of the Chapter' },
  { value: 2, label: 'Chapter 2: Name of the Chapter' },
  { value: 3, label: 'Chapter 3: Name of the Chapter' },
];

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select a Chapter',
  items,
  onClick: (selected: unknown) => alert(`Clicked ${selected} Button`),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ButtonList
          label="Select a Chapter"
          items={items}
          onClick={() => {}}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const WithUnderline = Template.bind({});
WithUnderline.args = {
  withUnderline: true,
  label: 'select a chapter',
  items,
  onClick: (selected: unknown) => alert(`Clicked ${selected} Button`),
};
WithUnderline.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ButtonList
          withUnderline
          label="Select a Chapter"
          items={items}
          onClick={() => {}}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};



export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Select a Chapter',
  items,
  icon: <BiRightArrowAlt/>,
  onClick: (selected: unknown) => alert(`Clicked ${selected} Button`),
};
WithIcon.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ButtonList
          label="Select a Chapter"
          items={items}
          onClick={() => { }}
          icon={<BiRightArrowAlt/>}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};