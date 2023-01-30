import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VerticalRadioGroup } from '../../../packages/ui-kit/src/formGroup/VerticalRadioGroup';

export default {
  title: 'Partial/Form Group/Vertical Radio',
  component: VerticalRadioGroup,
  decorators: [
    Story => (
      <div style={{ margin: '3em', background: '#c2c2c2', width: '500px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof VerticalRadioGroup>;

const Template: ComponentStory<typeof VerticalRadioGroup> = args => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <VerticalRadioGroup {...args} value={value} onChange={handleChange} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select a Chapter',
  items: [
    { value: 1, label: 'Chapter 1: Name of the Chapter' },
    { value: 2, label: 'Chapter 2: Name of the Chapter' },
    { value: 3, label: 'Chapter 3: Name of the Chapter' },
  ],
};

export const WithUnderline = Template.bind({});
WithUnderline.args = {
  withUnderline: true,
  label: 'Select a Chapter',
  items: [
    { value: 1, label: 'Chapter 1: Name of the Chapter' },
    { value: 2, label: 'Chapter 2: Name of the Chapter' },
    { value: 3, label: 'Chapter 3: Name of the Chapter' },
  ],
};
