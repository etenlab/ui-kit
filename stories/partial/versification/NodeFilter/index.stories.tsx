import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import jsxToString from 'jsx-to-string';

import {
  mode,
  ThemeProvider,
} from '../../../../packages/ui-kit/src/ThemeProvider/ThemeProvider';
import { colors } from '../../../../packages/ui-kit/src/ThemeProvider/palette';
import { NodeFilter } from '../../../../packages/ui-kit/src/versification/NodeFilter';

export default {
  title: 'Partial/Versification/NodeFilter',
  component: NodeFilter,
  args: {
    nodeType: 'chapter',
    disabled: false,
    value: undefined,
    options: [
      { value: '1', text: '1' },
      { value: '2', text: '2' },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          width: '500px',
          backgroundColor: colors['light-blue'][mode],
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof NodeFilter>;

const Template: ComponentStory<typeof NodeFilter> = (args) => {
  const [value, setValue] = useState<undefined | string>(args.value);

  return <NodeFilter {...args} value={value} onChange={setValue} />;
};

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(<NodeFilter nodeType="chapter" />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: jsxToString(<NodeFilter nodeType="chapter" disabled />),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
