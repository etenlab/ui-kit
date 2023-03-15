import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { WordTable } from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/WordTable',
  component: WordTable,
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
} as ComponentMeta<typeof WordTable>;

const Template: ComponentStory<typeof WordTable> = (args) => {
  return <WordTable {...args} />;
};

const items = [
  {
    title: {
      content: 'Bible',
      upVote: 42,
      downVote: 15,
    },
    contents: [
      {
        content:
          'the Christian scriptures, consisting of the Old and New Testaments.',
        upVote: 42,
        downVote: 15,
      },
      {
        content: 'a book regarded as authoritative in a particular sphere.',
        upVote: 42,
        downVote: 15,
      },
    ],
  },
  {
    title: {
      content: 'Lorem',
      upVote: 42,
      downVote: 15,
    },
    contents: [
      {
        content:
          'placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
        upVote: 42,
        downVote: 15,
      },
    ],
  },
];

export const Primary = Template.bind({});
Primary.args = {
  label_1: 'Word',
  label_2: 'Definition',
  items,
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <WordTable
          label_1="Word"
          label_2="Definition"
          items={items}
        />
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

// export const WithUnderline = Template.bind({});
// WithUnderline.args = {
//   withUnderline: true,
//   label: 'select a chapter',
//   items,
// };
// WithUnderline.parameters = {
//   docs: {
//     source: {
//       code: jsxToString(
//         <VerticalRadioList
//           label="Select a Chapter"
//           withUnderline
//           items={items}
//           value={1}
//           onChange={() => {}}
//         />
//       ),
//       language: 'jsx',
//       format: true,
//       type: 'auto',
//     },
//   },
// };

// export const WithoutLabel = Template.bind({});
// WithoutLabel.args = {
//   withUnderline: true,
//   items,
// };
// WithUnderline.parameters = {
//   docs: {
//     source: {
//       code: jsxToString(
//         <VerticalRadioList
//           withUnderline
//           items={items}
//           value={1}
//           onChange={() => {}}
//         />
//       ),
//       language: 'jsx',
//       format: true,
//       type: 'auto',
//     },
//   },
// };

// export const ColoredUnderline = Template.bind({});
// ColoredUnderline.args = {
//   withUnderline: true,
//   underlineColor: 'red',
//   items,
// };
// ColoredUnderline.parameters = {
//   docs: {
//     source: {
//       code: jsxToString(
//         <VerticalRadioList
//           withUnderline
//           underlineColor="red"
//           items={items}
//           value={1}
//           onChange={() => {}}
//         />
//       ),
//       language: 'jsx',
//       format: true,
//       type: 'auto',
//     },
//   },
// };
