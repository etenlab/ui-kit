import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ThemeProvider,
  RangeSelectableTextArea,
} from '../../../../packages/ui-kit/src';

export default {
  title: 'Partial/Crowd Bible/RangeSelectableTextArea',
  component: RangeSelectableTextArea,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          background: '#eee',
          width: '500px',
          padding: '20px',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof RangeSelectableTextArea>;

const Template: ComponentStory<typeof RangeSelectableTextArea> = (args) => {
  const [range, setRange] = useState<{
    start: number | null;
    end: number | null;
  }>({ start: null, end: null });

  const handleChangeRange = ({
    start,
    end,
  }: {
    start: number | null;
    end: number | null;
  }) => {
    setRange({ start, end });
  };

  return (
    <RangeSelectableTextArea
      {...args}
      range={range}
      onChangeRange={handleChangeRange}
    />
  );
};

export const SelectableText = Template.bind({});
SelectableText.args = {
  text: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 5. From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage. 6. Ut enim ad minim veniam, quis nostrud exercitation.',
};
