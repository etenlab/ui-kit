import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IdentifierLabel } from '../../../../packages/ui-kit/src/versification/IdentifierLabel';
import { buildDecorator, buildDocs } from '../common';

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
  decorators: [buildDecorator()],
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
