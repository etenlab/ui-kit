import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { SimpleQuill } from '../../../../packages/ui-kit/src/crowd-bible';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Crowd Bible/SimpleQuill',
  component: SimpleQuill,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          background: '#eee',
          width: '800px',
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof SimpleQuill>;

const Template: ComponentStory<typeof SimpleQuill> = (args) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (newValue) => setValue(newValue);

  return (
    <SimpleQuill
      value={value}
      onChange={handleChange}
      placeholder="Leave Feedback (optional)..."
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <SimpleQuill
          value="Value"
          onChange={(newValue: string) => {}}
          placeholder="Leave Feedback (optional)..."
        />
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
