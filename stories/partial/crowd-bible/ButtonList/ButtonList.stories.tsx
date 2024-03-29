import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { logger, ThemeProvider } from '../../../../packages/ui-kit/src';
import { buildDocs } from '../../../common';
import { StoryPaper } from '../../../StoryPaper';

import { ButtonList } from '../../../../packages/ui-kit/src/crowd-bible';
import {
  PlusButton,
  DiFileText,
  FilterButton,
} from '../../../../packages/ui-kit/src';

import { Chip } from '@mui/material';

export default {
  title: 'Partial/Crowd Bible/ButtonList',
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
  {
    value: '1',
    label: 'Document #1',
  },
  {
    value: '2',
    label: 'Document #2',
  },
  {
    value: '3',
    label: 'Document #2',
  },
];

const docItems = items.map((item) => ({
  ...item,
  startIcon: (
    <DiFileText
      style={{
        borderRadius: '7px',
        padding: '7px',
        fontSize: '32px',
        background: '#E3EAF3',
      }}
    />
  ),
}));

export const ButtonList1 = Template.bind({});
ButtonList1.storyName = 'Document List';
ButtonList1.args = {
  label: 'List of Docs',
  search: {
    value: '',
    onChange: (str: string) => {
      logger.info(str);
    },
    placeHolder: 'Search documents by name',
  },
  withUnderline: true,
  items: docItems,
  toolBtnGroup: (
    <>
      <FilterButton variant="secondary" onClick={() => {}} />
      <PlusButton variant="primary" onClick={() => {}} />
    </>
  ),
  onClick: (selected: unknown) => alert(`Clicked ${selected} Button`),
};
ButtonList1.parameters = buildDocs(
  <ButtonList
    label="List of Docs"
    search={{
      value: '',
      onChange: (str: string) => {
        logger.info(str);
      },
      placeHolder: 'Search documents by name',
    }}
    withUnderline={true}
    items={items}
    // toolBtnGroup={
    //   <Fragment>
    //     <FilterButton variant="secondary" onClick={() => {}} />
    //     <PlusButton variant="primary" onClick={() => {}} />
    //   </Fragment>
    // }
    onClick={(selected: unknown) => alert(`Clicked ${selected} Button`)}
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

const HomeItems = [
  { value: '1', label: 'Documents viewer', color: 'green', endIcon: '1' },
  { value: '2', label: 'Feedback', startIcon: 'selected' },
  {
    value: '3',
    label: 'Versification editor',
    endIcon: (
      <Chip
        label="Online only"
        variant="outlined"
        color="error"
        size="small"
        sx={{ marginLeft: 2 }}
      />
    ),
    disabled: true,
    color: 'red',
  },
];

export const ButtonList4 = Template.bind({});
ButtonList4.storyName = 'Home Route List';
ButtonList4.args = {
  label: 'Document tools',
  withUnderline: true,
  items: HomeItems,
  onClick: (selected: unknown) => alert(`Clicked ${selected} Button`),
};
ButtonList4.parameters = buildDocs(
  <ButtonList
    label="Select a chapter"
    withUnderline={true}
    items={HomeItems}
    onClick={() => {}}
  />,
);
