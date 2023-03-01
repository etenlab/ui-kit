import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@mui/material';
import { ThemeProvider } from '../../../../packages/ui-kit/src';
import {
  ReactionButton,
  ReactionPlusButton,
  IReaction,
} from '../../../../packages/ui-kit/src/discussion-box';
import jsxToString from 'jsx-to-string';

export default {
  title: 'Partial/Discussion Box/ReactionButton',
  component: ReactionButton,
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
          <Stack direction="row" gap="10px">
            <Story />
            <ReactionPlusButton onClick={() => {}} />
          </Stack>
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof ReactionButton>;

const Template: ComponentStory<typeof ReactionButton> = (args) => (
  <ReactionButton {...args} />
);

const reactions = [
  {
    id: 7,
    user_id: 100,
    user: {
      user_id: 100,
      active: true,
      email: 'hiroshi@test.com',
      username: 'Gru',
      is_email_verified: false,
      created_at: new Date('2023-02-08T09:12:01.078Z'),
    },
    post_id: 1,
    content: '1f609',
  },
  {
    id: 8,
    user: {
      user_id: 102,
      active: true,
      email: 'michael@test.com',
      username: 'Michael Marshall',
      is_email_verified: false,
      created_at: new Date('2023-02-08T09:12:01.078Z'),
    },
    post_id: 1,
    content: '1f609',
  },
  {
    id: 9,
    user: {
      user_id: 102,
      active: true,
      email: 'svetlana@test.com',
      username: 'Svetlana Podolianko',
      is_email_verified: false,
      created_at: new Date('2023-02-08T09:12:01.078Z'),
    },
    post_id: 1,
    content: '1f609',
  },
] as IReaction[];

export const Primary = Template.bind({});
Primary.args = {
  reactions,
  emoji: '1f609',
  onClick: (emoji: string) => console.log(emoji),
};
Primary.parameters = {
  docs: {
    source: {
      code: jsxToString(
        <ReactionButton
          reactions={reactions}
          emoji="1f609"
          onClick={(emoji: string) => console.log(emoji)}
        />
      ),
      language: 'jsx',
      format: true,
      type: 'auto',
    },
  },
};
