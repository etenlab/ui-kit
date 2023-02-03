import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ThemeProvider,
  QuestionBox,
  CheckItemType,
} from '../../../../packages/ui-kit/src';

export default {
  title: 'Partial/Crowd Bible/QuestionBox',
  component: QuestionBox,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          background: '#eee',
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
} as ComponentMeta<typeof QuestionBox>;

const Template: ComponentStory<typeof QuestionBox> = (args) => (
  <QuestionBox {...args} />
);

export const TextQuestionBox = Template.bind({});
TextQuestionBox.args = {
  question:
    'From its medieval origins to the digital era, learn everything is to know about the ubiquitous?',
  questionKind: 'text',
  onCancel: () => alert('Click Cancel Button'),
  onSave: ({ text }: { text?: string }) => alert('Click save button'),
};

export const AgreeQuestionBox = Template.bind({});
AgreeQuestionBox.args = {
  question:
    'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs?',
  questionKind: 'agree',
  onCancel: () => alert('Click Cancel Button'),
  onSave: ({ agree }: { agree?: boolean }) => alert('Click save button'),
};

export const ChooseQuestionBox = Template.bind({});
ChooseQuestionBox.args = {
  question:
    'From its medieval origins to the digital era, learn everything there is to know?',
  questionKind: 'choose',
  questionData: ['Laying', 'Typesetter', 'Attributed'],
  onCancel: () => alert('Click Cancel Button'),
  onSave: ({ choose }: { choose?: string }) => alert('Click save button'),
};

export const CheckQuestionBox = Template.bind({});
CheckQuestionBox.args = {
  question:
    'From its medieval origins to the digital era, learn everything there is to know?',
  questionKind: 'check',
  questionData: ['Laying', 'Typesetter', 'Attributed'],
  onCancel: () => alert('Click Cancel Button'),
  onSave: ({ check }: { check: CheckItemType[] }) => alert('Click save button'),
};
