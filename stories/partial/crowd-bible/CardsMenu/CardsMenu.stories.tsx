import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { buildDocs } from '../../../common';
import { StoryPaper } from '../../../StoryPaper';

import { CardsMenu } from '../../../../packages/ui-kit/src/crowd-bible';
import {
  DiFileText,
  DiAskQuestion,
  DiTranslate,
  DiCross,
} from '../../../../packages/ui-kit/src';

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
    value: '/documents',
    title: 'Documents',
    description: 'Upload a document to use in other crowd sourcing tools',
    startIcon: <DiFileText color="blue" />,
  },
  {
    value: '/qa-route',
    title: 'Question & Answer',
    description:
      'Annotate a text with questions so other users can provide answers',
    startIcon: <DiAskQuestion color="blue" />,
  },
  {
    value: '/translation',
    title: 'Translation',
    description:
      'Translate a document by submitting and voting on translations',
    startIcon: <DiTranslate color="blue" />,
    disabled: true,
  },
  {
    value: '/commentary',
    title: 'Commentary',
    description: 'Annotate a document and vote on what you support',
    startIcon: <DiCross color="red" />,
  },
];

export const CardsMenuList1 = Template.bind({});
CardsMenuList1.storyName = 'Document List';
CardsMenuList1.args = {
  label: 'Document Tools',
  items: items,
  onClick: (selected: string) => alert(`Clicked ${selected} Button`),
};
CardsMenuList1.parameters = buildDocs(
  <CardsMenu
    label="Document Tools"
    items={items}
    onClick={(selected: unknown) => alert(`Clicked ${selected} Button`)}
  />,
);
