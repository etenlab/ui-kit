import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import jsxToString from 'jsx-to-string';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { NodeData } from '../../../../packages/ui-kit/src/versification/NodeData';

const args = {
  label: '',
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

export const Labeled = Template.bind({});
Labeled.args = {
  ...args,
  label: 'Ch. 1',
};
Labeled.parameters = {
  docs: {
    source: {
      code: jsxToString(<NodeData {...Labeled.args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const LabeledWithValues = Template.bind({});
LabeledWithValues.args = {
  ...args,
  label: 'v3',
  numUpVotes: 42,
  numDownVotes: 15,
};
LabeledWithValues.parameters = {
  docs: {
    source: {
      code: jsxToString(<NodeData {...LabeledWithValues.args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const LabeledColNotInline = Template.bind({});
LabeledColNotInline.args = {
  ...args,
  label: 'v3-5',
  col: true,
  inline: false,
};
LabeledColNotInline.parameters = {
  docs: {
    source: {
      code: jsxToString(<NodeData {...LabeledColNotInline.args} />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
