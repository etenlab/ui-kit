import React from 'react';
import { styled } from '@mui/material';
import { Button } from '../../button';
import { DiMessages } from '../../icons';

type StyledDiMessagesProps = HTMLButtonElement & any;
export const StyledDiMessages = styled((props: StyledDiMessagesProps) => (
  <Button {...props}>
    <DiMessages />
  </Button>
))(({ theme }) => ({
  height: '32px',
  backgroundColor: theme.palette.text['light-blue'],
  padding: '2px',
  borderRadius: '4px',
  color: theme.palette.text.gray,
  minWidth: 'fit-content',
  ':hover': {
    backgroundColor: theme.palette.text['light-blue'],
  },
}));
