import React, { useState, useCallback, useRef } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  ThemeProvider,
  useColorModeContext,
} from '../../../../packages/ui-kit/src';

import { Stack, Button, Box } from '@mui/material';

import {
  Discussion,
  IUser,
  UserForm,
} from '../../../../packages/ui-kit/src/discussion-box';

function DiscussionShower({ user }: { user: IUser }) {
  const { getColor } = useColorModeContext();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={ref}
      sx={{
        width: '374px',
        height: '736px',
        border: `1px solid #000`,
        background: getColor('bg-main'),
      }}
    >
      <Discussion
        user={user}
        tableName="example-table"
        rowId="example-row"
        httpUri="http://localhost:8201/graphql"
        wsUri="ws://localhost:8201/graphql"
        height="736px"
      />
    </Box>
  );
}

function DiscussionGroup() {
  const { getColor } = useColorModeContext();

  const [users, setUsers] = useState<IUser[]>([]);
  const [isForm, setIsForm] = useState<boolean>(false);

  const handleAddMore = () => {
    setIsForm(true);
  };

  const handleCancel = useCallback(() => {
    setIsForm(false);
  }, []);

  const handleAddNewUser = useCallback((user: IUser) => {
    setUsers((_users) => [..._users, user]);
    setIsForm(false);
  }, []);

  const formCom = isForm ? (
    <Box
      sx={{
        width: '374px',
        height: '736px',
        border: `1px solid #000`,
        padding: '20px',
        background: getColor('bg-main'),
      }}
    >
      <UserForm
        httpUri="http://localhost:8201/graphql"
        wsUri="ws://localhost:8201/graphql"
        onNewUser={handleAddNewUser}
        onCancel={handleCancel}
      />
    </Box>
  ) : null;

  return (
    <Box>
      Discussion Group
      <Button onClick={handleAddMore}>+ Add More</Button>
      <Stack direction="row" gap="20px">
        {users.map((user) => (
          <DiscussionShower key={user.user_id} user={user} />
        ))}
        {formCom}
      </Stack>
    </Box>
  );
}

export default {
  title: 'Partial/Discussion Box/DiscussionGroup',
  component: DiscussionGroup,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof DiscussionGroup>;

const Template: ComponentStory<typeof DiscussionGroup> = () => (
  <DiscussionGroup />
);

export const Primary = Template.bind({});
Primary.args = {};
