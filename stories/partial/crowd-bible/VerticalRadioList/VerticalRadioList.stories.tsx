import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { VerticalRadioList } from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/Vertical Radio List',
  component: VerticalRadioList,
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
} as ComponentMeta<typeof VerticalRadioList>;

const Template: ComponentStory<typeof VerticalRadioList> = (args) => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <VerticalRadioList {...args} value={value} onChange={handleChange} />;
};

const items = [
  { value: 1, label: 'Chapter 1: Name of the Chapter' },
  { value: 2, label: 'Chapter 2: Name of the Chapter' },
  { value: 3, label: 'Chapter 3: Name of the Chapter' },
];

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select a Chapter',
  items,
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <VerticalRadioList
          label="Select a Chapter"
          items={items}
          value={1}
          onChange={() => {}}
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
};
WithUnderline.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <VerticalRadioList
          label="Select a Chapter"
          withUnderline
          items={items}
          value={1}
          onChange={() => {}}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  withUnderline: true,
  items,
};
WithUnderline.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <VerticalRadioList
          withUnderline
          items={items}
          value={1}
          onChange={() => {}}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const ColoredUnderline = Template.bind({});
ColoredUnderline.args = {
  withUnderline: true,
  underlineColor: 'red',
  items,
};
ColoredUnderline.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <VerticalRadioList
          withUnderline
          underlineColor="red"
          items={items}
          value={1}
          onChange={() => {}}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
