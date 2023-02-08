import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { ReactionPlusButton } from '../../../../packages/ui-kit/src/discussion-box';

export default {
  title: 'Partial/Discussion Box/ReactionPlusButton',
  component: ReactionPlusButton,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          background: '#ccc',
          width: '500px',
          padding: '3em',
        }}
      >
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof ReactionPlusButton>;

const Template: ComponentStory<typeof ReactionPlusButton> = (args) => (
  <ReactionPlusButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => console.log(event),
};
