import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NodeFilter } from '../../../../packages/ui-kit/src/versification/NodeFilter';
import { buildDecorator, buildDocs } from '../common';

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
  decorators: [buildDecorator()],
} as ComponentMeta<typeof NodeFilter>;

const Template: ComponentStory<typeof NodeFilter> = (args) => {
  const [value, setValue] = useState<undefined | string>(args.value);

  return <NodeFilter {...args} value={value} onChange={setValue} />;
};

export const Primary = Template.bind({});
Primary.parameters = buildDocs(<NodeFilter nodeType="chapter" />);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.parameters = buildDocs(<NodeFilter nodeType="chapter" disabled />);
