import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import jsxToString from 'jsx-to-string';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { IdentifierLabel } from '../../../../packages/ui-kit/src/versification/IdentifierLabel';

const args = {
  nodeType: 'chapter' as const,
  originalValue: '2',
  translationValues: ['1', '5', '9'],
  currentValue: '1',
  short: false,
  onNewIdentifierSave: (value) =>
    alert(`Clicked Save New Identifier Button with value: ${value}`),
};

export default {
  title: 'Partial/Versification/IdentifierLabel',
  component: IdentifierLabel,
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
} as ComponentMeta<typeof IdentifierLabel>;

const Template: ComponentStory<typeof IdentifierLabel> = (args) => (
  <IdentifierLabel {...args} />
);

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<IdentifierLabel {...args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Short = Template.bind({});
Short.args = {
  short: true,
};
Short.parameters = {
  docs: {
    source: {
      code: jsxToString(<IdentifierLabel {...Short.args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
