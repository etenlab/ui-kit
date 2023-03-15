import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import jsxToString from 'jsx-to-string';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { NewIdentifierBox } from '../../../../packages/ui-kit/src/versification/NewIdentifierBox';

const args = {
  nodeType: 'verse' as const,
  originalValue: '1',
  translationValues: ['2', '5'],
  onSave: (value) => alert(`Clicked Save Button with value: ${value}`),
  onCancel: () => alert('Clicked Cancel Button'),
};

export default {
  title: 'Partial/Versification/NewIdentifierBox',
  component: NewIdentifierBox,
  args,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          width: '500px',
          border: '1px solid #e3eaf3',
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof NewIdentifierBox>;

const Template: ComponentStory<typeof NewIdentifierBox> = (args) => (
  <NewIdentifierBox {...args} />
);

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<NewIdentifierBox {...args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
