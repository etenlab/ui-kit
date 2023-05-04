import { Stack, styled } from '@mui/material';
import React from 'react';
import { FC } from 'react';
import BackButton, { BackBtnProps } from '../BackButton';

export const BottomBackBtn: FC<BackBtnProps> = (props) => {
  return (
    <StyledBackButtonContainer flexDirection={'row'}>
      <BackButton {...props} />
    </StyledBackButtonContainer>
  );
};
export default BottomBackBtn;

const StyledBackButtonContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  paddingBottom: '1.5rem',
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));
