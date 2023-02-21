import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider';
import { SearchInput } from '../../../packages/ui-kit/src/input';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Primary/Input/SearchInput',
  component: SearchInput,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: '#eee', width: '500px' }}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Email or Username',
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<SearchInput label="Email or Username" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
