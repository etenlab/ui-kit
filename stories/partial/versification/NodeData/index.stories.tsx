import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import jsxToString from 'jsx-to-string';

import {
  mode,
  ThemeProvider,
} from '../../../../packages/ui-kit/src/ThemeProvider/ThemeProvider';
import { colors } from '../../../../packages/ui-kit/src/ThemeProvider/palette';
import { NodeData } from '../../../../packages/ui-kit/src/versification/NodeData';

const args = {
  currentValue: '5',
  short: false,
  nodeType: 'chapter' as const,
  originalValue: '5',
  translationValues: ['7', '9'],
  onNewIdentifierSave: (value: string) =>
    alert(`Clicked Save New Identifier Button with value: ${value}`),
  col: false,
  inline: true,
  numUpVotes: 0,
  numDownVotes: 0,
  numPosts: 0,
};

export default {
  title: 'Partial/Versification/NodeData',
  component: NodeData,
  args,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          width: '500px',
          border: `1px solid ${colors['light-blue'][mode]}`,
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof NodeData>;

const Template: ComponentStory<typeof NodeData> = (args) => (
  <NodeData {...args} />
);

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<NodeData {...args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Short = Template.bind({});
Short.args = {
  ...args,
  short: true,
};
Short.parameters = {
  docs: {
    source: {
      code: jsxToString(<NodeData {...args} {...Short.args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const WithValues = Template.bind({});
WithValues.args = {
  ...args,
  currentValue: '3',
  nodeType: 'verse' as const,
  originalValue: '3',
  translationValues: ['4', '1'],
  numUpVotes: 42,
  numDownVotes: 15,
};
WithValues.parameters = {
  docs: {
    source: {
      code: jsxToString(<NodeData {...args} {...WithValues.args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Column = Template.bind({});
Column.args = {
  ...args,
  currentValue: '3-5',
  nodeType: 'verse' as const,
  originalValue: '3-5',
  translationValues: ['2a', 'w7'],
  col: true,
};
Column.parameters = {
  docs: {
    source: {
      code: jsxToString(<NodeData {...args} {...Column.args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const NotInline = Template.bind({});
NotInline.args = {
  ...Column.args,
  inline: false,
};
NotInline.parameters = {
  docs: {
    source: {
      code: jsxToString(<NodeData {...args} {...NotInline.args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
