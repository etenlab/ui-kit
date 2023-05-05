import { Stack, styled } from '@mui/material';
import React from 'react';
import { FlexibleBackButton, BackBtnProps } from '../BackButton';

export function BottomBackBtn(props: BackBtnProps) {
  return (
    <StyledBackButtonContainer flexDirection={'row'}>
      <FlexibleBackButton {...props} id="bottom-back-button" />
    </StyledBackButtonContainer>
  );
}

const StyledBackButtonContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  paddingBottom: '1.5rem',
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));
