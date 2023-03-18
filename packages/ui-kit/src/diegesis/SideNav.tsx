import { Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { CloseIcon } from './icons';

interface IProps {
  open: boolean;
  close: () => void;
}
export function SideNav(props: IProps) {
  const { open, close } = props;
  return (
    <Stack
      direction={'column'}
      alignItems={'start'}
      className={`side-nav-container ${
        open ? 'show-side-nav' : 'hide-side-nav'
      }`}
    >
      <Stack
        direction={'row'}
        className="full-width close-btn"
        alignItems={'center'}
        justifyContent={'flex-end'}
        onClick={() => {
          close();
        }}
      >
        <Typography variant={'caption'}>Close</Typography>
        <CloseIcon />
      </Stack>
      <Stack
        direction={'column'}
        className="full-width nav-items-container"
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
      >
        <Button
          href="/"
          variant={'text'}
          size={'large'}
          color={'dark'}
          className="big-nav-item"
        >
          Home
        </Button>
        <Button
          href="/"
          variant={'text'}
          size={'large'}
          color={'dark'}
          className="big-nav-item"
        >
          Entries
        </Button>
        <Button
          href="/"
          variant={'text'}
          size={'large'}
          color={'dark'}
          className="big-nav-item"
        >
          Technology
        </Button>
        <Button
          href="/"
          variant={'text'}
          size={'large'}
          color={'dark'}
          className="big-nav-item"
        >
          About
        </Button>
        <Divider className="full-width"></Divider>
        <Button
          href="/"
          variant={'text'}
          size={'medium'}
          color={'dark'}
          className="md-nav-item"
        >
          <Stack direction={'row'} alignItems={'center'}>
            <MdAccountCircle size={24} className={'mr-1'} />
            Account Settings
          </Stack>
        </Button>
        <Divider className="full-width"></Divider>
        <Button
          href="/"
          variant={'text'}
          size={'medium'}
          color={'dark'}
          className="md-nav-item"
        >
          Terms & conditions
        </Button>
        <Button
          href="/"
          variant={'text'}
          size={'medium'}
          color={'dark'}
          className="md-nav-item"
        >
          Privacy policy
        </Button>
      </Stack>
    </Stack>
  );
}
export default SideNav;
