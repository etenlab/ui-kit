import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from '@mui/material';

import { ThemeProvider, logger } from '../../../../packages/ui-kit/src';
import {
  QuestionCreatorBox,
  Question,
} from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/QuestionCreatorBox',
  component: QuestionCreatorBox,
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
} as ComponentMeta<typeof QuestionCreatorBox>;

const Template: ComponentStory<typeof QuestionCreatorBox> = (args) => (
  <Box sx={{ border: '1px solid #555' }}>
    <QuestionCreatorBox {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {
  onSave: (question: Question) => logger.info(question),
  onCancel: () => {},
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <QuestionCreatorBox
          onSave={(question: Question) => logger.info(question)}
          onCancel={() => {}}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
