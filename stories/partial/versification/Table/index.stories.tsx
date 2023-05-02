import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Table } from '../../../../packages/ui-kit/src/versification/Table';
import { buildDecorator, buildDocs } from '../common';
import { bibleBook } from './data';

const args = {
  bibleBook,
  onNewIdentifierSave: (id: string, value: string) =>
    alert(`Clicked Save Button with id: ${id} and value: ${value}`),
};

export default {
  title: 'Partial/Versification/Table',
  component: Table,
  args,
  decorators: [buildDecorator()],
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.parameters = buildDocs(<Table {...args} />);
