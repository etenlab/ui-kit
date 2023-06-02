import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { logger, ThemeProvider } from '../../../../packages/ui-kit/src';
import { buildDocs } from '../../../common';
import { StoryPaper } from '../../../StoryPaper';

import { CardsMenu } from '../../../../packages/ui-kit/src/crowd-bible';
import {
  PlusButton,
  BiFile,
  FilterButton,
} from '../../../../packages/ui-kit/src';

import { Chip } from '@mui/material';

export default {
  title: 'Partial/Crowd Bible/CardsMenu',
  component: CardsMenu,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <StoryPaper>
          <Story />
        </StoryPaper>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof CardsMenu>;

const Template: ComponentStory<typeof CardsMenu> = (args) => (
  <CardsMenu {...args} />
);

const items = [
  {
    value: '1',
    label: 'Document #1',
    description: 'Document #1 Description',
  },
  {
    value: '2',
    label: 'Document #2',
    description: 'Document #2 Description',
  },
  {
    value: '3',
    label: 'Document #3',
    description: 'Document #3 Description',
  },
];

const docItems = items.map((item) => ({
  ...item,
  startIcon: (
    <BiFile
      style={{
        borderRadius: '7px',
        padding: '7px',
        fontSize: '32px',
        background: '#E3EAF3',
      }}
    />
  ),
}));

export const CardsMenuList1 = Template.bind({});
CardsMenuList1.storyName = 'Document List';
CardsMenuList1.args = {
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
CardsMenuList1.parameters = buildDocs(
  <CardsMenu
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

export const CardsMenuList2 = Template.bind({});
CardsMenuList2.storyName = 'Feedback Chapter List';
CardsMenuList2.args = {
  label: 'Select a chapter',
  withUnderline: true,
  items,
  onClick: (selected: unknown) => alert(`Clicked ${selected} Button`),
};
CardsMenuList2.parameters = buildDocs(
  <CardsMenu
    label="Select a chapter"
    withUnderline={true}
    items={items}
    onClick={() => {}}
  />,
);

export const CardsMenuList3 = Template.bind({});
CardsMenuList3.storyName = 'Site Text Application List';
CardsMenuList3.args = {
  label: 'List of Applications',
  withUnderline: true,
  items,
  toolBtnGroup: <PlusButton variant="primary" onClick={() => {}} />,
  onClick: (selected: unknown) => alert(`Clicked ${selected} Button`),
};
CardsMenuList3.parameters = buildDocs(
  <CardsMenu
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

export const CardsMenuList4 = Template.bind({});
CardsMenuList4.storyName = 'Home Route List';
CardsMenuList4.args = {
  label: 'Document tools',
  withUnderline: true,
  items: HomeItems,
  onClick: (selected: unknown) => alert(`Clicked ${selected} Button`),
};
CardsMenuList4.parameters = buildDocs(
  <CardsMenu
    label="Select a chapter"
    withUnderline={true}
    items={HomeItems}
    onClick={() => {}}
  />,
);
