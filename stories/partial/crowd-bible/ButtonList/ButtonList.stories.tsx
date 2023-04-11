import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { buildDocs } from '../../../common';
import { StoryPaper } from '../../../StoryPaper';

import { ButtonList } from '../../../../packages/ui-kit/src/crowd-bible';
import { PlusButton, BiFile } from '../../../../packages/ui-kit/src';

export default {
  title: 'Partial/Crowd Bible/Button List',
  component: ButtonList,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <StoryPaper>
          <Story />
        </StoryPaper>
      </ThemeProvider>
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

export const ButtonList1 = Template.bind({});
ButtonList1.storyName = 'Document List';
ButtonList1.args = {
  label: 'List of Docs',
  search: {
    value: '',
    onChange: (str: string) => {
      console.log(str);
    },
    placeHolder: 'Search documents by name',
  },
  withUnderline: true,
  items,
  itemIcon: (
    <BiFile
      style={{
        borderRadius: '7px',
        padding: '7px',
        fontSize: '32px',
        background: '#E3EAF3',
      }}
    />
  ),
  onClick: (selected: unknown) => alert(`Clicked ${selected} Button`),
};
ButtonList1.parameters = buildDocs(
  <ButtonList
    label="List of Docs"
    search={{
      value: 'Random String',
      onChange: (str: string) => {
        console.log(str);
      },
      placeHolder: 'Search documents by name',
    }}
    withUnderline={true}
    items={items}
    itemIcon={
      <BiFile
        style={{
          borderRadius: '7px',
          padding: '7px',
          fontSize: '32px',
          background: '#E3EAF3',
        }}
      />
    }
    onClick={() => {}}
  />,
);

export const ButtonList2 = Template.bind({});
ButtonList2.storyName = 'Feedback Chapter List';
ButtonList2.args = {
  label: 'Select a chapter',
  withUnderline: true,
  items,
  onClick: (selected: unknown) => alert(`Clicked ${selected} Button`),
};
ButtonList2.parameters = buildDocs(
  <ButtonList
    label="Select a chapter"
    withUnderline={true}
    items={items}
    onClick={() => {}}
  />,
);

export const ButtonList3 = Template.bind({});
ButtonList3.storyName = 'Site Text Application List';
ButtonList3.args = {
  label: 'List of Applications',
  withUnderline: true,
  items,
  toolBtnGroup: <PlusButton variant="primary" onClick={() => {}} />,
  onClick: (selected: unknown) => alert(`Clicked ${selected} Button`),
};
ButtonList3.parameters = buildDocs(
  <ButtonList
    label="Select a chapter"
    withUnderline={true}
    items={items}
    toolBtnGroup={<PlusButton variant="primary" onClick={() => {}} />}
    onClick={() => {}}
  />,
);
