import React, { MouseEvent } from 'react';
import { Stack, IconButton } from '@mui/material';

import { Avatar } from '../Avatar';
import { Username } from '../Username';
import { DateViewer } from '../DateViewer';
import { BsFillRecordFill, DiMore } from '../../icons';

type PostHeaderProps = {
  username: string;
  avatar: string;
  date: Date;
  openActionList(event: MouseEvent<HTMLElement>): void;
};

export function PostHeader({
  username,
  avatar = '',
  date,
  openActionList,
}: PostHeaderProps) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" gap="10px" alignItems="center">
        <Avatar username={username} url={avatar} mini={false} />
        <Username username={username} />
        <BsFillRecordFill style={{ fontSize: '4px' }} />
        <DateViewer date={date} />
      </Stack>
      <IconButton onClick={openActionList}>
        <DiMore />
      </IconButton>
    </Stack>
  );
}
