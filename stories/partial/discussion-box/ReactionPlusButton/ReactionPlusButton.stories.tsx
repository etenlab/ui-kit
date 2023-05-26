import React, { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider, logger } from '../../../../packages/ui-kit/src';
import { ReactionPlusButton } from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

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
  onClick: (event: MouseEvent<HTMLButtonElement>) => logger.info(event),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ReactionPlusButton onClick={() => logger.info('Clicked')} />,
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
