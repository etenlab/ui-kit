import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  mode,
  ThemeProvider,
} from '../../../../packages/ui-kit/src/ThemeProvider/ThemeProvider';
import { colors } from '../../../../packages/ui-kit/src/ThemeProvider/palette';
import { IdentifierLabel } from '../../../../packages/ui-kit/src/versification/IdentifierLabel';
import { buildDocs } from '../common';

const args = {
  nodeType: 'chapter' as const,
  originalValue: '2',
  translationValues: ['1', '5', '9'],
  currentValue: '1',
  short: false,
  onNewIdentifierSave: (value: string) =>
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
} as ComponentMeta<typeof IdentifierLabel>;

const Template: ComponentStory<typeof IdentifierLabel> = (args) => (
  <IdentifierLabel {...args} />
);

export const Primary = Template.bind({});
Primary.parameters = buildDocs(<IdentifierLabel {...args} />);

export const Short = Template.bind({});
Short.args = {
  short: true,
};
Short.parameters = buildDocs(<IdentifierLabel {...args} {...Short.args} />);
