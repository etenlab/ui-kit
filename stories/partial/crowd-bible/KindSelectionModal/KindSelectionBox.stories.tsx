import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { KindSelectionBox } from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/KindSelectionBox',
  component: KindSelectionBox,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof KindSelectionBox>;

const Template: ComponentStory<typeof KindSelectionBox> = (args) => (
  <KindSelectionBox {...args} />
);

export const LeaveFeedbackBox = Template.bind({});
LeaveFeedbackBox.args = {
  title: 'Leave Feedback',
  label: 'Choose what you want to leave feedback for:',
  onTextClick: () => {
    alert('Click Text Button');
  },
  onChapterClick: () => {
    alert('Click Chapter Button');
  },
  onVerseClick: () => {
    alert('Click Verse Button');
  },
  onCancel: () => {
    alert('Click Cancel Button');
  },
};
LeaveFeedbackBox.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <KindSelectionBox
          title="Leave Feedback"
          label="Choose what you want to leave feedback for:"
          onTextClick={() => {
            alert('Click Text Button');
          }}
          onChapterClick={() => {
            alert('Click Chapter Button');
          }}
          onVerseClick={() => {
            alert('Click Verse Button');
          }}
          onCancel={() => {
            alert('Click Cancel Button');
          }}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const AskQuestion = Template.bind({});
AskQuestion.args = {
  title: 'Ask Question',
  label: 'Сhoose what you want to leave asking for:',
  onTextClick: () => {
    alert('Click Text Button');
  },
  onChapterClick: () => {
    alert('Click Chapter Button');
  },
  onVerseClick: () => {
    alert('Click Verse Button');
  },
  onCancel: () => {
    alert('Click Cancel Button');
  },
};
AskQuestion.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <KindSelectionBox
          title="Ask Question"
          label="Сhoose what you want to leave asking for:"
          onTextClick={() => {
            alert('Click Text Button');
          }}
          onChapterClick={() => {
            alert('Click Chapter Button');
          }}
          onVerseClick={() => {
            alert('Click Verse Button');
          }}
          onCancel={() => {
            alert('Click Cancel Button');
          }}
        />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
