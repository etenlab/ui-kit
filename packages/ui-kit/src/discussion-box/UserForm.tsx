import React, { useState, useEffect, ChangeEventHandler } from 'react';

import { useMutation } from '@apollo/client';

import { TextField, Stack, Button } from '@mui/material';

import { CREATE_USER } from './graphql/discussionQuery';

import { IUser } from './utils/types';
import { DiscussionApolloProvider } from './DiscussionApolloProvider';

export function UserFormPure({
  onNewUser,
  onCancel,
}: {
  onNewUser(user: IUser): void;
  onCancel(): void;
}) {
  const [
    createUser,
    {
      data: createdUserData,
      error: createdUserError,
      loading: createdUserLoading,
    },
  ] = useMutation(CREATE_USER);

  useEffect(() => {
    if (createdUserLoading || !createdUserData) {
      return;
    }

    if (createdUserError && !createdUserLoading) {
      alert('error at creating new user');
      return;
    }

    onNewUser(createdUserData.createUser);
  }, [createdUserData, createdUserError, createdUserLoading, onNewUser]);

  const [tempData, setTempData] = useState<{
    kid: string;
    username: string;
    email: string;
    avatar_url: string;
    first_name: string;
    last_name: string;
  }>({
    kid: '1',
    username: 'Dia',
    email: 'dia@test.com',
    avatar_url: '',
    first_name: 'Takeshi',
    last_name: 'Suzuki',
  });

  const handleCancel = () => {
    onCancel();
  };

  const handleCreateNewUser = () => {
    if (tempData.kid.trim() === '') {
      alert('kid cannot be empty');
      return;
    }
    if (tempData.username.trim() === '') {
      alert('username cannot be empty');
      return;
    }
    if (tempData.email.trim() === '') {
      alert('email cannot be empty');
      return;
    }
    if (tempData.first_name.trim() === '') {
      alert('first_name cannot be empty');
      return;
    }
    if (tempData.last_name.trim() === '') {
      alert('last_name cannot be empty');
      return;
    }

    createUser({
      variables: {
        newUserData: {
          ...tempData,
        },
      },
    });
  };

  const handleChangeKid: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTempData((_tempData) => ({
      ..._tempData,
      kid: e.target.value,
    }));
  };
  const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTempData((_tempData) => ({
      ..._tempData,
      username: e.target.value,
    }));
  };
  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTempData((_tempData) => ({
      ..._tempData,
      email: e.target.value,
    }));
  };
  const handleChangeAvatarUrl: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTempData((_tempData) => ({
      ..._tempData,
      avatar_url: e.target.value,
    }));
  };
  const handleChangeFirstName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTempData((_tempData) => ({
      ..._tempData,
      first_name: e.target.value,
    }));
  };
  const handleChangeLastName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTempData((_tempData) => ({
      ..._tempData,
      last_name: e.target.value,
    }));
  };

  return (
    <Stack gap="15px">
      <TextField
        id="kid"
        label="kid"
        variant="outlined"
        value={tempData.kid}
        onChange={handleChangeKid}
      />
      <TextField
        id="username"
        label="username"
        variant="outlined"
        value={tempData.username}
        onChange={handleChangeUsername}
      />
      <TextField
        id="email"
        label="email"
        variant="outlined"
        value={tempData.email}
        onChange={handleChangeEmail}
      />
      <TextField
        id="avatar_url"
        label="avatar_url"
        variant="outlined"
        value={tempData.avatar_url}
        onChange={handleChangeAvatarUrl}
      />
      <TextField
        id="first_name"
        label="first_name"
        variant="outlined"
        value={tempData.first_name}
        onChange={handleChangeFirstName}
      />
      <TextField
        id="last_name"
        label="last_name"
        variant="outlined"
        value={tempData.last_name}
        onChange={handleChangeLastName}
      />

      <Button variant="contained" onClick={handleCreateNewUser}>
        Create a new user
      </Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </Stack>
  );
}

export function UserForm({
  onNewUser,
  onCancel,
  httpUri,
  wsUri,
}: {
  httpUri: string;
  wsUri: string;
  onNewUser(user: IUser): void;
  onCancel(): void;
}) {
  return (
    <DiscussionApolloProvider httpUri={httpUri} wsUri={wsUri}>
      <UserFormPure onNewUser={onNewUser} onCancel={onCancel} />
    </DiscussionApolloProvider>
  );
}
