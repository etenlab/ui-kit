import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import {
  QuestionBox,
  CheckItemType,
} from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';

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

export const NormalQuestionBox = Template.bind({});
NormalQuestionBox.args = {
  question:
    'From its medieval origins to the digital era, learn everything is to know about the ubiquitous?',
  questionKind: 'Normal',
  onCancel: () => alert('Click Cancel Button'),
  onSave: ({ text }: { text?: string }) => alert('Click save button'),
};
NormalQuestionBox.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <QuestionBox
          question="From its medieval origins to the digital era, learn everything is to know about the ubiquitous?"
          questionKind="Normal"
          onCancel={() => alert('Click Cancel Button')}
          onSave={({ normal }: { normal?: string }) =>
            alert('Click save button')
          }
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const AgreeQuestionBox = Template.bind({});
AgreeQuestionBox.args = {
  question:
    'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs?',
  questionKind: 'agreeOrDisagree',
  onCancel: () => alert('Click Cancel Button'),
  onSave: ({ agreeOrDisagree }: { agreeOrDisagree?: boolean }) =>
    alert('Click save button'),
};
AgreeQuestionBox.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <QuestionBox
          question="From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs?"
          questionKind="Agree/Disagree"
          onCancel={() => alert('Click Cancel Button')}
          onSave={({ agreeOrDisagree }: { agreeOrDisagree?: boolean }) =>
            alert('Click save button')
          }
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const TrueOrFalseQuestionBox = Template.bind({});
TrueOrFalseQuestionBox.args = {
  question:
    'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs?',
  questionKind: 'True/False',
  onCancel: () => alert('Click Cancel Button'),
  onSave: ({ trueOrFalse }: { trueOrFalse?: boolean }) =>
    alert('Click save button'),
};
TrueOrFalseQuestionBox.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <QuestionBox
          question="From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs?"
          questionKind="True/False"
          onCancel={() => alert('Click Cancel Button')}
          onSave={({ trueOrFalse }: { trueOrFalse?: boolean }) =>
            alert('Click save button')
          }
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const ChooseOneQuestionBox = Template.bind({});
ChooseOneQuestionBox.args = {
  question:
    'From its medieval origins to the digital era, learn everything there is to know?',
  questionKind: 'Choose One',
  questionData: ['Laying', 'Typesetter', 'Attributed'],
  onCancel: () => alert('Click Cancel Button'),
  onSave: ({ choose }: { choose?: string }) => alert('Click save button'),
};
ChooseOneQuestionBox.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <QuestionBox
          question="From its medieval origins to the digital era, learn everything there is to know?"
          questionKind="Choose One"
          questionData={['Laying', 'Typesetter', 'Attributed']}
          onCancel={() => alert('Click Cancel Button')}
          onSave={({ chooseOne }: { chooseOne?: string }) =>
            alert('Click save button')
          }
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const MultiselectQuestionBox = Template.bind({});
MultiselectQuestionBox.args = {
  question:
    'From its medieval origins to the digital era, learn everything there is to know?',
  questionKind: 'check',
  questionData: ['Laying', 'Typesetter', 'Attributed'],
  onCancel: () => alert('Click Cancel Button'),
  onSave: ({ multiselect }: { multiselect: CheckItemType[] }) =>
    alert('Click save button'),
};
MultiselectQuestionBox.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <QuestionBox
          question="From its medieval origins to the digital era, learn everything there is to know?"
          questionKind="Multiselect"
          questionData={['Laying', 'Typesetter', 'Attributed']}
          onCancel={() => alert('Click Cancel Button')}
          onSave={({ multiselect }: { multiselect: CheckItemType[] }) =>
            alert('Click save button')
          }
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
