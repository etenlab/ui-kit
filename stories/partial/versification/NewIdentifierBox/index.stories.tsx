import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NewIdentifierBox } from '../../../../packages/ui-kit/src/versification/NewIdentifierBox';
import { buildDecorator, buildDocs } from '../common';

const args = {
  nodeType: 'verse' as const,
  originalValue: '1',
  translationValues: ['2', '5'],
  onSave: (value: string) => alert(`Clicked Save Button with value: ${value}`),
  onCancel: () => alert('Clicked Cancel Button'),
};

export default {
  title: 'Partial/Versification/NewIdentifierBox',
  component: NewIdentifierBox,
  args,
  decorators: [buildDecorator()],
} as ComponentMeta<typeof NewIdentifierBox>;

const Template: ComponentStory<typeof NewIdentifierBox> = (args) => (
  <NewIdentifierBox {...args} />
);

export const Primary = Template.bind({});
Primary.parameters = buildDocs(<NewIdentifierBox {...args} />);
