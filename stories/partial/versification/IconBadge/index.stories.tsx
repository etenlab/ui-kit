import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconBadge } from '../../../../packages/ui-kit/src/versification/IconBadge';
import {
  BiLike,
  BiDislike,
  BiMessageRounded,
} from '../../../../packages/ui-kit/src/icons';
import { buildDecorator, buildDocs } from '../common';

const args = {
  value: 0,
  Icon: BiMessageRounded,
  success: false,
  danger: false,
};

export default {
  title: 'Partial/Versification/IconBadge',
  component: IconBadge,
  args,
  decorators: [buildDecorator({ sx: { display: 'flex' } })],
} as ComponentMeta<typeof IconBadge>;

const Template: ComponentStory<typeof IconBadge> = (args) => (
  <IconBadge {...args} />
);

export const Primary = Template.bind({});
Primary.parameters = buildDocs(<IconBadge {...args} />);

export const Success = Template.bind({});
Success.args = {
  ...args,
  value: 42,
  success: true,
  danger: false,
  Icon: BiLike,
};
Success.parameters = buildDocs(<IconBadge {...args} {...Success.args} />);

export const Danger = Template.bind({});
Danger.args = {
  ...args,
  value: 15,
  success: false,
  danger: true,
  Icon: BiDislike,
};
Danger.parameters = buildDocs(<IconBadge {...args} {...Danger.args} />);
