import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, SimpleQuill } from '../../../../packages/ui-kit/src';

export default {
  title: 'Partial/Crowd Bible/SimpleQuill',
  component: SimpleQuill,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          background: '#eee',
          width: '800px',
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof SimpleQuill>;

const Template: ComponentStory<typeof SimpleQuill> = (args) => {
  const [value, setValue] = useState<string>('');
  return <SimpleQuill value={value} setValue={setValue} />;
};

export const Primary = Template.bind({});
Primary.args = {};
