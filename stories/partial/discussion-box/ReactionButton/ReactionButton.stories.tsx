import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@mui/material';
import { ThemeProvider } from '../../../../packages/ui-kit/src';
import {
  ReactionButton,
  ReactionPlusButton,
  IReaction,
} from '../../../../packages/ui-kit/src/discussion-box';

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

export const Primary = Template.bind({});
Primary.args = {
  reactions: [
    {
      id: 7,
      user_id: 100,
      user: {
        user_id: 100,
        active: true,
        email: 'hiroshi@test.com',
        username: 'Gru',
        is_email_verified: false,
        created_at: '2023-02-08T09:12:01.078Z',
        __typename: 'User',
      },
      post_id: 1,
      content: '1f609',
      __typename: 'Reaction',
    },
    {
      id: 8,
      user_id: 101,
      user: {
        user_id: 102,
        active: true,
        email: 'michael@test.com',
        username: 'Michael Marshall',
        is_email_verified: false,
        created_at: '2023-02-08T09:12:01.078Z',
        __typename: 'User',
      },
      post_id: 1,
      content: '1f609',
      __typename: 'Reaction',
    },
    {
      id: 9,
      user_id: 102,
      user: {
        user_id: 102,
        active: true,
        email: 'svetlana@test.com',
        username: 'Svetlana Podolianko',
        is_email_verified: false,
        created_at: '2023-02-08T09:12:01.078Z',
        __typename: 'User',
      },
      post_id: 1,
      content: '1f609',
      __typename: 'Reaction',
    },
  ],
  emoji: '1f609',
  onClick: (emoji: string) => console.log(emoji),
};
